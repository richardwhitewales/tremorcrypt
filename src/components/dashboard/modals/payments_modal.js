import { useState } from 'react';
import { useAuth } from '@/firebase/fire_auth_context';
import { db } from '@/firebase/fire_config';
import { toast } from "react-toastify";
import Loader from '@/components/loader/loader';
import { doc, updateDoc } from 'firebase/firestore';

export default function Payments({ user }) {
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [deposit, setDeposit] = useState("");
    const [withdraw, setWithdraw] = useState("");
    const [address, setAddress] = useState("");
    const { authUser } = useAuth();

    const onDeposit = async event => {
        event.preventDefault();
        setLoading(true);

        const docRef = doc(db, "users", authUser.email);
        if (user.dashboard.wallet.card.cvv.length || user.dashboard.wallet.billingAddress.zipCode) {
            await updateDoc(docRef, {
                "dashboard.balance": parseFloat(user.dashboard.balance) + parseFloat(deposit),
                "dashboard.deposit": parseFloat(user.dashboard.deposit) + parseFloat(deposit),
            }).then(() => {
                toast.success("Deposit Completed. Quillaruda will confirm transtion in 2 working days");
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

    const onWithdraw = async event => {
        event.preventDefault();
        setLoading2(true);

        const docRef = doc(db, "users", authUser.email);
        if (user.dashboard.wallet.card.cvv.length || user.dashboard.wallet.billingAddress.zipCode) {
            await updateDoc(docRef, {
                "dashboard.balance": parseFloat(user.dashboard.balance) - parseFloat(withdraw),
                "dashboard.withdraw": parseFloat(user.dashboard.withdraw) + parseFloat(withdraw),
                "dashboard.address": address,
            }).then(() => {
                toast.success("Withdrawal Completed. Quillaruda will confirm transtion in 2 working days");
                setLoading2(false);
            }).catch((error) => {
                if (error.code == "not-found") {
                    toast.error("User not found");
                    setLoading2(false);
                } else {
                    toast.error(`Something is wrong: ${error.message}`);
                    setLoading2(false);
                }
            });
        } else {
            toast.error("Address Card Info & Billing Address First for security reasons!");
            setLoading2(false);
        }
    };

    return (
        <div className="modal fade" id="paymentsModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="paymentsModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="paymentsModalLabel">Payments</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <form onSubmit={onDeposit}>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="alert p-2 alert-light border shadow">
                                            Make deposit to the BitCoin (BTC) address below or scan the QR code.

                                            <div className="alert alert-dark mt-3 p-1">
                                                bc1qdxmcrqn8uw3348pknz7r9eyqs2s0atlvsldtnp
                                            </div>

                                            <div className="alert alert-dark mt-3 p-1">
                                                <b>NETWORK</b> BitCoin
                                            </div>

                                            <div className="text-center mt-3 p-1">
                                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=bc1qdxmcrqn8uw3348pknz7r9eyqs2s0atlvsldtnp" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="alert p-2 alert-light border shadow">
                                            Make deposit to the USD Tether (USDT) address below or scan the QR code.

                                            <div className="alert alert-dark mt-3 p-1">
                                                TFMYQMDNJwaH84dQqx7r3wKS7UBFQcoLUR
                                            </div>

                                            <div className="alert alert-dark mt-3 p-1">
                                                <b>NETWORK</b> Trc20
                                            </div>

                                            <div className="text-center mt-3 p-1">
                                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=TFMYQMDNJwaH84dQqx7r3wKS7UBFQcoLUR" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 mx-2 mb-3">
                                    After payment enter the <i>Amount</i> below and click <b>&quot;Deposit&quot;</b> to confirm.
                                </div>

                                <div className="col-12">
                                    <div className="form-floating mx-2">
                                        <input type="text"
                                            className="form-control"
                                            required
                                            id="deposit"
                                            placeholder="Amount"
                                            onChange={(event) => setDeposit(event.target.value)}
                                        />
                                        <label htmlFor="deposit">Amount</label>
                                    </div>
                                </div>

                                <div className=" my-3">
                                    <button type="submit" className="btn btn-lg btn-warning w-100">
                                        {loading ? <Loader /> : "Deposit"}
                                    </button>
                                </div>
                            </form>

                            <hr />

                            <div className="col-12">
                                <form onSubmit={onWithdraw}>
                                    <div className="alert alert-light border shadow">
                                        Enter the <i>Address</i> and <i>Amount</i> you will like to withdraw below
                                        and click <b>&quot;Withdraw&quot;</b> to confirm.
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating mx-2">
                                            <input type="text"
                                                className="form-control"
                                                required
                                                id="address"
                                                placeholder="Address"
                                                onChange={(event) => setAddress(event.target.value)}
                                            />
                                            <label htmlFor="address">Address</label>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-3">
                                        <div className="form-floating mx-2">
                                            <input type="text"
                                                className="form-control"
                                                required
                                                id="withdraw"
                                                placeholder="Amount"
                                                onChange={(event) => setWithdraw(event.target.value)}
                                            />
                                            <label htmlFor="withdraw">Amount</label>
                                        </div>
                                    </div>

                                    <div className="modal-footer mt-3">
                                        <button type="submit" className="btn btn-lg btn-success w-100">
                                            {loading2 ? <Loader /> : "Withdraw"}
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