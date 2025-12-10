import { useState, useRef } from 'react';
import { useAuth } from '@/firebase/fire_auth_context';
import { db } from '@/firebase/fire_config';
import { toast } from "react-toastify";
import Loader from '@/components/loader/loader';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

export default function WithdrawModal({ user }) {
    const [loading, setLoading] = useState(false);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const [withdraw, setWithdraw] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [accountName, setAccountName] = useState("");
    const [bankName, setBankName] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [showPinCode, setShowPinCode] = useState(false);
    const [showProgress, setShowProgress] = useState(false);
    const { authUser } = useAuth();

    const onWithdraw = async event => {
        event.preventDefault();
        setLoading(true);

        const balance = parseInt(user.dashboard.balance);
        const amount = parseInt(withdraw);

        if (amount > balance || balance === 0) {
            toast.error("Insufficient balance");
            setLoading(false);
        } else {
            setLoading(false);
            setShowProgress(true)

            setTimeout(() => {
                setShowProgress(false)
                setShowPinCode(true)
            }, 5000);

        }
    };

    const onPinCode = async (e) => {
        e.preventDefault();

        if (pinCode === user.pinCode) {
            setShowPinCode(false)
            setShowProgress(true)

            setTimeout(() => {
                setShowProgress(false)

                onTransfer()

            }, 5000);
        } else {
            toast.error("Incorrect Withdrawal Code");
            setLoading(false);
        }
    }


    const onTransfer = async () => {
        const docRef = doc(db, "users_tremorcrypt", authUser.email);
        const balance = parseInt(user.dashboard.balance);
        const withdrawBalance = parseInt(user.dashboard.withdraw.balance ? user.dashboard.withdraw.balance : "0");
        const amount = parseInt(withdraw);

        const transfer = {
            type: "debit",
            amount: amount,
            balance: (balance + amount).toString(),
            createdOn: new Date(),
        };

        await updateDoc(docRef, {
            "dashboard.balance": `${balance - amount}`,
            "dashboard.withdraw.balance": `${withdrawBalance + amount}`,
            "dashboard.withdraw.accountNumber": accountNumber,
            "dashboard.withdraw.accountName": accountName,
            "dashboard.withdraw.bankName": bankName,
            "dashboard.transfers": arrayUnion(transfer),
        }).then(() => {
            toast.success("Withdrawal Pending. Tremorcrypt will confirm transtion in 2 working days");
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

    const onClearModal = () => {
        setLoading(false);
        setWithdraw("");
        setAccountName("");
        setAccountNumber("");
        setBankName("");
        setPinCode("");
    };

    const transferForm = () => {
        if (showProgress) {
            return (
                <div className="col-md-12 text-center">
                    <div className="card p-5 border-0 align-items-center">
                        <h4 className="mb-5">Processing Transaction...</h4>

                        <div className="loader-transfer" />
                    </div>
                </div >
            )
        }

        if (showPinCode) {
            return (
                <div className="col-md-12">
                    <form className="card p-5 border-0" onSubmit={onPinCode}>
                        <div className="mb-3">
                            <div className="form-floating">
                                <input type="text"
                                    className="form-control"
                                    required
                                    id="pinCode"
                                    placeholder="Withdrawal Code"
                                    maxLength={5}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if (/^\d{0,5}$/.test(value)) {
                                            setPinCode(value);
                                        } else {
                                            toast.error("Withdrawal Code must be numbers")
                                        }
                                    }}
                                    ref={inputRefs[4]}
                                />
                                <label htmlFor="pinCode">Withdrawal Code</label>
                            </div>
                        </div>

                        <div className='d-flex justify-content-between align-items-center'>
                            <button
                                type="button"
                                onClick={() => { setShowPinCode(false) }}
                                className="btn btn-lg btn-dark me-3"
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                className="btn btn-lg btn_secondary white w-100"
                            >
                                Withdraw
                            </button>
                        </div>
                    </form>
                </div >
            )
        }

        return (
            <form onSubmit={onWithdraw}>
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

                <div className="col-12 mt-3">
                    <div className="form-floating mx-2">
                        <input type="text"
                            className="form-control"
                            required
                            id="bankName"
                            placeholder="Bank Name"
                            onChange={(event) => setBankName(event.target.value)}
                            ref={inputRefs[3]}
                        />
                        <label htmlFor="bankName">Bank Name</label>
                    </div>
                </div>

                <div className="mt-3">
                    <button type="submit" className="btn btn-lg btn_secondary white w-100">
                        {loading ? <Loader /> : "Continue"}
                    </button>
                </div>
            </form>
        )
    }

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
                                <div className="alert alert-light border_primary shadow">
                                    Enter the <b>Address (optional)</b>, <b>Amount</b>, <b>Bank Account Name</b> and <b>Bank Account Number</b> you would like to withdraw to below
                                    and click <b>&quot;Withdraw&quot;</b> to confirm.

                                    {withdraw.length > 0 && <>
                                        <br />
                                        <br />
                                        Withdrawal Charges: <b>20%</b>
                                    </>
                                    }
                                </div>

                                {transferForm()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}