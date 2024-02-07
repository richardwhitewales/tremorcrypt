import { useState, useRef } from 'react';
import { useAuth } from '@/firebase/fire_auth_context';
import { db } from '@/firebase/fire_config';
import { toast } from "react-toastify";
import Loader from '@/components/loader/loader';
import { doc, updateDoc } from 'firebase/firestore';

export default function WithdrawModal({ user }) {
    const [loading, setLoading] = useState(false);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const [withdraw, setWithdraw] = useState("");
    const [receiverWallet, setReceiverWallet] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [accountName, setAccountName] = useState("");
    const { authUser } = useAuth();

    const onWithdraw = async event => {
        event.preventDefault();
        setLoading(true);

        const docRef = doc(db, "users", authUser.email);
        const balance = parseInt(user.dashboard.balance);
        const withdrawBalance = parseInt(user.dashboard.withdraw.balance);
        const amount = parseInt(withdraw);

        if (amount > balance || balance === 0) {
            toast.error("Insufficient balance");
            setLoading(false);
        } else {
            await updateDoc(docRef, {
                "dashboard.balance": `${balance - amount}`,
                "dashboard.withdraw.balance": `${withdrawBalance + amount}`,
                "dashboard.withdraw.receiverWallet": receiverWallet,
                "dashboard.withdraw.accountNumber": accountNumber,
                "dashboard.withdraw.accountName": accountName,
            }).then(() => {
                toast.success("Withdrawal Pending. Harpy will confirm transtion in 2 working days");
                setLoading(false);
                onClearModal();
            }).catch((error) => {
                if (error.code === "not-found") {
                    toast.error("User not found");
                    setLoading(false);
                } else {
                    toast.error(`Something is wrong: ${error.message}`);
                    setLoading(false);
                }
            });
        }
    };

    const onClearModal = () => {
        setLoading(false); setWithdraw("");
        setReceiverWallet(""); setAccountName("");
        setAccountNumber("");
        inputRefs.forEach(ref => (ref.current.value = ''));
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
                                        Enter the <b>Address (optional)</b>, <b>Amount</b>, <b>Bank Account Name</b> and <b>Bank Account Number</b> you would like to withdraw to below
                                        and click <b>&quot;Withdraw&quot;</b> to confirm.
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating mx-2">
                                            <input type="text"
                                                className="form-control"
                                                id="address"
                                                placeholder="BTC Address (optional)"
                                                onChange={(event) => setReceiverWallet(event.target.value)}
                                                ref={inputRefs[0]}
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
                                                ref={inputRefs[1]}
                                            />
                                            <label htmlFor="withdraw">Amount in $</label>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-3">
                                        <div className="form-floating mx-2">
                                            <input type="text"
                                                className="form-control"
                                                required
                                                id="accountName"
                                                placeholder="Account Name"
                                                onChange={(event) => setAccountName(event.target.value)}
                                                ref={inputRefs[2]}
                                            />
                                            <label htmlFor="accountName">Account Name</label>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-3">
                                        <div className="form-floating mx-2">
                                            <input type="text"
                                                className="form-control"
                                                required
                                                id="accountNumber"
                                                placeholder="Account Number"
                                                onChange={(event) => setAccountNumber(event.target.value)}
                                                ref={inputRefs[3]}
                                            />
                                            <label htmlFor="accountNumber">Account Number</label>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <button type="submit" className="btn btn-lg btn_secondary white w-100">
                                            {loading ? <Loader /> : "Withdraw"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <hr />

                        <div className="row justify-content-center">
                            <button className="btn" data-bs-toggle="modal" data-bs-target="#otherPaymentMethodModal">
                                Other Payment Methods
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}