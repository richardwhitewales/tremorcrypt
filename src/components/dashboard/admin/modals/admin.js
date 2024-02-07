import { useState } from 'react';
import { db } from '@/firebase/fire_config';
import { toast } from "react-toastify";
import Loader from '@/components/loader/loader';
import { doc, updateDoc } from 'firebase/firestore';
import { Bitcoin } from 'iconsax-react';

export default function AdminModal({ user }) {
    const [loading, setLoading] = useState(false);
    const [btcAddr, setBtcAddr] = useState("");
    const [telegram, setTelegram] = useState("");
    const [signal, setSignal] = useState("");

    const onUpdateAddr = async e => {
        e.preventDefault();
        setLoading(true);

        const docRef = doc(db, 'harpy', 'harpy');
        await updateDoc(docRef, {
            "btcAddr": btcAddr,
        }).then(() => {
            toast.success("Address Updated!");
            setLoading(false);
        }).catch((error) => {
            if (error.code === "not-found") {
                toast.error("User not found");
            } else {
                toast.error(`Something is wrong: ${error.message}`);
                setLoading(false);
            }
        });
    };

    const onUpdateTelegram = async e => {
        e.preventDefault();
        setLoading(true);

        const docRef = doc(db, 'harpy', 'harpy');
        await updateDoc(docRef, {
            "telegram": telegram,
        }).then(() => {
            toast.success("Telegram Updated!");
            setLoading(false);
        }).catch((error) => {
            if (error.code === "not-found") {
                toast.error("User not found");
            } else {
                toast.error(`Something is wrong: ${error.message}`);
                setLoading(false);
            }
        });
    };

    const onUpdateSignal = async e => {
        e.preventDefault();
        setLoading(true);

        const docRef = doc(db, 'harpy', 'harpy');
        await updateDoc(docRef, {
            "signal": signal,
        }).then(() => {
            toast.success("Signal Updated!");
            setLoading(false);
        }).catch((error) => {
            if (error.code === "not-found") {
                toast.error("User not found");
            } else {
                toast.error(`Something is wrong: ${error.message}`);
                setLoading(false);
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
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content" id="modalContent">
                    <div className="modal-header">
                        <h5 className="modal-title" id="adminModalLabel">Admin</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <p>
                                    <b><Bitcoin className="primary" /> BTC</b> {user.btcAddr}
                                </p>
                            </div>

                            <form className="col-12 mb-3" onSubmit={onUpdateAddr}>
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
                                    {loading ? <Loader /> : "Update"}
                                </button>
                            </form>

                            <hr />

                            <div className="col-12">
                                <p>
                                    <b>Telegram</b> {user.telegram}
                                </p>
                            </div>

                            <form className="col-12 mb-3" onSubmit={onUpdateTelegram}>
                                <div className="mb-3">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="telegram"
                                            required
                                            placeholder="Telegram (e.g: +10000000000)"
                                            onChange={(e) => setTelegram(e.target.value)}
                                        />
                                        <label htmlFor="telegram">Telegram (e.g: +10000000000)</label>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-lg btn_secondary w-100">
                                    {loading ? <Loader /> : "Update"}
                                </button>
                            </form>

                            <hr />

                            <div className="col-12">
                                <p>
                                    <b>Signal</b> {user.signal}
                                </p>
                            </div>

                            <form className="col-12" onSubmit={onUpdateSignal}>
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
                                    {loading ? <Loader /> : "Update"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}