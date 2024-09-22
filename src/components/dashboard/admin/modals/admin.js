import { useState } from 'react';
import { db } from '@/firebase/fire_config';
import { toast } from "react-toastify";
import { doc, updateDoc } from 'firebase/firestore';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function AdminModal({ user }) {
    const [btcAddr, setBtcAddr] = useState("");
    const [usdtAddr, setUsdtAddr] = useState("");
    const [usdtNetwork, setUsdtNetwork] = useState("");
    const [signal, setSignal] = useState("");
    const [whatsApp, setWhatsApp] = useState("");
    const [allBankTransferDetails, setAllBankTransferDetails] = useState(user.allBankTransferDetails);

    const onUpdateBtcAddr = async e => {
        e.preventDefault();

        const docRef = doc(db, 'harpy', 'harpy');
        await updateDoc(docRef, {
            "btcAddr": btcAddr,
        }).then(() => {
            toast.success("BTC Updated!");
        }).catch((error) => {
            if (error.code === "not-found") {
                toast.error("User not found");
            } else {
                toast.error(`Something is wrong: ${error.message}`);
            }
        });
    };

    const onUpdateUsdtAddr = async e => {
        e.preventDefault();

        const docRef = doc(db, 'harpy', 'harpy');
        await updateDoc(docRef, {
            "usdtAddr": usdtAddr,
            "usdtNetwork": usdtNetwork,
        }).then(() => {
            toast.success("USDT Updated!");
        }).catch((error) => {
            if (error.code === "not-found") {
                toast.error("User not found");
            } else {
                toast.error(`Something is wrong: ${error.message}`);
            }
        });
    };

    const onUpdateSignal = async e => {
        e.preventDefault();

        const docRef = doc(db, 'harpy', 'harpy');
        await updateDoc(docRef, {
            "signal": signal,
        }).then(() => {
            toast.success("Signal Updated!");
        }).catch((error) => {
            if (error.code === "not-found") {
                toast.error("User not found");
            } else {
                toast.error(`Something is wrong: ${error.message}`);
            }
        });
    };

    const onUpdateWhatsApp = async e => {
        e.preventDefault();

        const docRef = doc(db, 'harpy', 'harpy');
        await updateDoc(docRef, {
            "whatsApp": whatsApp,
        }).then(() => {
            toast.success("WhatsApp Updated!");
        }).catch((error) => {
            if (error.code === "not-found") {
                toast.error("User not found");
            } else {
                toast.error(`Something is wrong: ${error.message}`);
            }
        });
    };

    const onUpdateAllBankTransferDetails = async e => {
        e.preventDefault();

        const docRef = doc(db, 'harpy', 'harpy');
        await updateDoc(docRef, {
            "allBankTransferDetails": allBankTransferDetails,
        }).then(() => {
            toast.success("Bank Transfer Detail Updated!");
        }).catch((error) => {
            if (error.code === "not-found") {
                toast.error("User not found");
            } else {
                toast.error(`Something is wrong: ${error.message}`);
            }
        });
    };

    if (!user) return <div className="modal fade" id="adminModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="adminModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-body">

                </div>
            </div>
        </div>
    </div>

    return (
        <div className="modal fade" id="adminModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="adminModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                <div className="modal-content" id="modalContent">
                    <div className="modal-header">
                        <h5 className="modal-title" id="adminModalLabel">Admin</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <p>
                                    <b>BTC:</b> {user.btcAddr}
                                </p>
                            </div>

                            <form className="col-12 mb-3" onSubmit={onUpdateBtcAddr}>
                                <div className="mb-3">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="btcAddr"
                                            required
                                            placeholder="BTC address"
                                            onChange={(e) => setBtcAddr(e.target.value)}
                                        />
                                        <label htmlFor="btcAddr">BTC address</label>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-lg btn_secondary w-100">
                                    Update
                                </button>
                            </form>

                            <hr />

                            <div className="col-12">
                                <p>
                                    <b>USDT:</b> {user.usdtAddr}
                                    <br />
                                    <b>USDT Network:</b> {user.usdtNetwork}
                                </p>
                            </div>

                            <form className="col-12 mb-3" onSubmit={onUpdateUsdtAddr}>
                                <div className="mb-3">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="usdtAddr"
                                            required
                                            placeholder="USDT Address"
                                            onChange={(e) => setUsdtAddr(e.target.value)}
                                        />
                                        <label htmlFor="usdtAddr">USDT Address</label>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="usdtNetwork"
                                            required
                                            placeholder="USDT Network"
                                            onChange={(e) => setUsdtNetwork(e.target.value)}
                                        />
                                        <label htmlFor="usdtNetwork">USDT Network</label>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-lg btn_secondary w-100">
                                    Update
                                </button>
                            </form>

                            <hr />

                            <div className="col-12">
                                <p>
                                    <b>Signal:</b> {user.signal}
                                </p>
                            </div>

                            <form className="col-12 mb-3" onSubmit={onUpdateSignal}>
                                <div className="mb-3">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="signal"
                                            required
                                            placeholder="Signal (e.g: +10000000000)"
                                            onChange={(e) => setSignal(e.target.value)}
                                        />
                                        <label htmlFor="signal">Signal (e.g: +10000000000)</label>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-lg btn_secondary w-100">
                                    Update
                                </button>
                            </form>

                            <hr />

                            <div className="col-12">
                                <p>
                                    <b>whatsApp:</b> {user.whatsApp}
                                </p>
                            </div>

                            <form className="col-12 mb-3" onSubmit={onUpdateWhatsApp}>
                                <div className="mb-3">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="whatsApp"
                                            required
                                            placeholder="Whatsapp (e.g: +10000000000)"
                                            onChange={(e) => setWhatsApp(e.target.value)}
                                        />
                                        <label htmlFor="whatsApp">whatsApp (e.g: +10000000000)</label>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-lg btn_secondary w-100">
                                    Update
                                </button>
                            </form>

                            <hr />

                            <form className="col-12 mb-3" onSubmit={onUpdateAllBankTransferDetails}>
                                <div className="mb-3">
                                    <ReactQuill
                                        theme="snow"
                                        type="text"
                                        value={allBankTransferDetails}
                                        onChange={setAllBankTransferDetails}
                                        placeholder={allBankTransferDetails}
                                        id="allBankTransferDetails"
                                        className="form-control"
                                    />
                                </div>

                                <button type="submit" className="btn btn-lg btn_secondary w-100">
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}