import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/firebase/fire_auth_context';
import { db } from '@/firebase/fire_config';
import { toast } from "react-toastify";
import Loader from '@/components/loader/loader';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import uploadPayment from '@/components/dashboard/user/upload_payment.js';
import BuyCrypto from '@/components/home/buy_crypto';
import Link from 'next/link';

export default function DepositModal({ user, plan }) {
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const inputRefs = [useRef(null), useRef(null), useRef(null)];
    const [deposit, setDeposit] = useState("");
    const [reciept, setReciept] = useState(null);
    const [sendersWallet, setSendersWallet] = useState("");
    const [hasdID, setHasdID] = useState("");
    const [addr, setAddr] = useState(null);
    const { authUser } = useAuth();

    const onDeposit = async event => {
        event.preventDefault();
        setLoading(true);

        const docRef = doc(db, "users", authUser.email);
        const balance = parseInt(user.dashboard.balance);
        const depositBalance = parseInt(user.dashboard.deposit.balance);
        const amount = parseInt(deposit);

        await updateDoc(docRef, {
            "accountStatus": "ACTIVE",
            "dashboard.balance": `${balance + amount}`,
            "dashboard.deposit.balance": `${depositBalance + amount}`,
            "dashboard.deposit.sendersWallet": sendersWallet,
            "dashboard.deposit.hasdID": hasdID,
        }).then(() => {
            uploadPayment(user.email, reciept).then(() => {
                toast.success("Deposit Completed. Harpy will confirm transtion in 2 working days");
                setLoading(false);
                setDone(true)
            });
        }).catch((error) => {
            if (error.code === "not-found") {
                toast.error("User not found");
                setLoading(false);
            } else {
                toast.error(`Something is wrong: ${error.message}`);
                setLoading(false);
            }
        });
    };

    useEffect(() => {
        getDoc(doc(db, 'harpy', 'harpy'))
            .then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    setAddr(docSnapshot.data());
                } else {
                    toast.error('Profile not found');
                }
            })
            .catch((error) => {
                toast.error('Error getting profile:', error);
            });
    }, []);

    const onClearModal = () => {
        setLoading(false); setDone(false); setDeposit("");
        setReciept(null); setSendersWallet("");
        setHasdID("");
    };

    return (
        <div className="modal fade" id="depositModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="depositModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="depositModalLabel">Deposit</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClearModal}></button>
                    </div>
                    <div className="modal-body">
                        <form className="row" onSubmit={onDeposit}>
                            <div className="col-md-6 mb-3">
                                Make deposit to the <b>BitCoin (BTC)</b> address below or scan the QR code.

                                <div className="alert alert-dark bg_black_15 text-center p-1">
                                    {addr && addr.btcAddr}
                                </div>

                                <div className="text-center mx-2">
                                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${addr && addr.btcAddr}`} alt="btc address" />
                                </div>
                            </div>

                            <div className="col-md-6 mb-3">
                                Make deposit to the <b>USDT {addr && addr.usdtNetwork}</b> address below or scan the QR code.

                                <div className="alert alert-dark bg_black_15 text-center p-1">
                                    {addr && addr.usdtAddr}
                                </div>

                                <div className="text-center mx-2">
                                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${addr && addr.usdtAddr}`} alt="usdt address" />
                                </div>
                            </div>

                            {done ?
                                <div className="alert alert-light my-3 border_primary shadow">
                                    After making payment send the <b>Proof screenshot or reciept image</b> to <Link href="https://widget-page.smartsupp.com/widget/f5acb7fcd05f8c3af730bb9f2888a41ad1dec0d6" onClick={() => { onClearModal(); }} target="_blank">here</Link>
                                </div>
                                :
                                <>
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <div className="form-floating ">
                                                <input type="text"
                                                    className="form-control"
                                                    required
                                                    id="deposit"
                                                    placeholder="Amount in $"
                                                    onChange={(event) => setDeposit(event.target.value)}
                                                    ref={inputRefs[0]}
                                                />
                                                <label htmlFor="deposit">Amount in $</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating ">
                                                <input type="text"
                                                    className="form-control"
                                                    required
                                                    id="address"
                                                    placeholder="Address"
                                                    onChange={(event) => setSendersWallet(event.target.value)}
                                                    ref={inputRefs[1]}
                                                />
                                                <label htmlFor="address">Address</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-3">
                                        <button type="submit" className="btn btn-lg btn_secondary white w-100">
                                            {loading ? <Loader /> : "I have Deposited"}
                                        </button>
                                    </div>
                                </>
                            }

                        </form>

                        <hr />

                        <div className="row justify-content-center">
                            <button className="btn" data-bs-toggle="modal" data-bs-target="#otherPaymentMethodModal">
                                Other Payment Methods
                            </button>
                        </div>

                        <BuyCrypto />
                    </div>
                </div>
            </div>
        </div>
    )
}