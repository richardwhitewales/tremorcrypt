import { useState } from 'react';
import { useAuth } from '@/firebase/fire_auth_context';
import { db } from '@/firebase/fire_config';
import { toast } from "react-toastify";
import Loader from '@/components/loader/loader';
import { doc, updateDoc } from 'firebase/firestore';

export default function WithdrawModal({ user }) {
    const [loading, setLoading] = useState(false);
    const [withdraw, setWithdraw] = useState("");
    const [address, setAddress] = useState("");
    const { authUser } = useAuth();

    const onWithdraw = async event => {
        event.preventDefault();
        setLoading(true);

        const docRef = doc(db, "users", authUser.email);
        if (user.dashboard.wallet.card.cvv.length || user.dashboard.wallet.billingAddress.zipCode) {
            await updateDoc(docRef, {
                "dashboard.balance": parseFloat(user.dashboard.balance) - parseFloat(withdraw),
                "dashboard.withdraw": parseFloat(user.dashboard.withdraw) + parseFloat(withdraw),
                "dashboard.address": address,
            }).then(() => {
                toast.success("Withdrawal Completed. Harpy Crypto will confirm transtion in 2 working days");
                setLoading(false);
            }).catch((error) => {
                if (error.code == "not-found") {
                    toast.error("User not found");
                    setLoading(false);
                } else {
                    toast.error(`Something is wrong: ${error.message}`);
                    setLoading(false);
                }
            });
        } else {
            toast.error("Address Card Info & Billing Address First for security reasons!");
            setLoading(false);
        }
    };

    const onClearModal = () => {
        setLoading(false); setWithdraw(""); setAddress("");
    };

    return (
        <div className="modal fade" id="withdrawModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="withdrawModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="withdrawModalLabel">Withdrawal</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClearModal}></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-12">
                                <form onSubmit={onWithdraw}>
                                    <div className="alert alert-light border_primary shadow">
                                        Enter the <b>Address</b> and <b>Amount</b> you will like to withdraw below
                                        and click <b>&quot;Withdraw&quot;</b> to confirm.
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating mx-2">
                                            <input type="text"
                                                className="form-control"
                                                required
                                                id="address"
                                                placeholder="BTC Address"
                                                onChange={(event) => setAddress(event.target.value)}
                                            />
                                            <label htmlFor="address">BTC Address</label>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-3">
                                        <div className="form-floating mx-2">
                                            <input type="text"
                                                className="form-control"
                                                required
                                                id="withdraw"
                                                placeholder="Amount in $"
                                                onChange={(event) => setWithdraw(event.target.value)}
                                            />
                                            <label htmlFor="withdraw">Amount in $</label>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <button type="submit" className="btn btn-lg btn_secondary black w-100">
                                            {loading ? <Loader /> : "Withdraw"}
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