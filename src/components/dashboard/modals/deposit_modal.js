import { useState } from 'react';
import { useAuth } from '@/firebase/fire_auth_context';
import { db } from '@/firebase/fire_config';
import { toast } from "react-toastify";
import Loader from '@/components/loader/loader';
import { doc, updateDoc } from 'firebase/firestore';
import uploadPayment from '@/components/dashboard/upload_payment.js';

export default function DepositModal({ user, plan }) {
    const [loading, setLoading] = useState(false);
    const [deposit, setDeposit] = useState("");
    const [reciept, setReciept] = useState(null);
    const { authUser } = useAuth();

    const onDeposit = async event => {
        event.preventDefault();
        setLoading(true);

        const docRef = doc(db, "users", authUser.email);
        await updateDoc(docRef, {
            "dashboard.investmentPlan": parseInt(plan),
            "dashboard.total": parseInt(user.dashboard.total) + parseInt(deposit),
            "dashboard.balance": parseInt(user.dashboard.balance) + parseInt(deposit),
            "dashboard.deposit": parseInt(deposit),
        }).then(() => {
            uploadPayment(user.email, reciept).then(() => {
                toast.success("Deposit Completed. Harpy Cryto will confirm transtion in 2 working days");
                setLoading(false);
                onClearModal();
            });
        }).catch((error) => {
            if (error.code == "not-found") {
                toast.error("User not found");
                setLoading(false);
            } else {
                toast.error(`Something is wrong: ${error.message}`);
                setLoading(false);
            }
        });
    };

    const onClearModal = () => {
        setLoading(false); setDeposit(""); setReciept(null);
    };

    return (
        <div className="modal fade" id="depositModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="depositModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="depositModalLabel">Deposit {typeof plan}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClearModal}></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-12">
                                <form onSubmit={onDeposit}>
                                    <div className="col-12">
                                        Make deposit to the <b>BitCoin (BTC)</b> address below or scan the QR code.

                                        <div className="alert alert-dark bg_black_15 text-center mt-3 p-1">
                                            bc1qnvm6rhzm2y295qf7f32ysmgdwg9a3jm463j08q
                                        </div>

                                        <div className="text-center mt-3 p-1">
                                            <img src="/qr.png" alt="btc address" width={150} />
                                        </div>
                                    </div>

                                    <div className="alert alert-light my-3 border_primary shadow">
                                        After making payment;
                                        <ul>
                                            <li>
                                                <small>Enter the <b>Amount</b> below</small>
                                            </li>
                                            <li>
                                                <small>Upload the <b>Proof</b> below, screenshot or reciept image</small>
                                            </li>
                                        </ul>
                                        and click <b>&quot;Deposit&quot;</b> to confirm.
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating mx-2">
                                            <input type="text"
                                                className="form-control"
                                                required
                                                id="deposit"
                                                placeholder="Amount in $"
                                                onChange={(event) => setDeposit(event.target.value)}
                                            />
                                            <label htmlFor="deposit">Amount in $</label>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-3">
                                        <div className="form-floating mx-2">
                                            <input type="file"
                                                className="form-control"
                                                required
                                                id="deposit"
                                                placeholder="Proof (screenshot or reciept)"
                                                onChange={(event) => setReciept(event.target.files[0])}
                                            />
                                            <label htmlFor="deposit">Proof (screenshot or reciept)</label>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <button type="submit" className="btn btn-lg btn_secondary black w-100">
                                            {loading ? <Loader /> : "Deposit"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}