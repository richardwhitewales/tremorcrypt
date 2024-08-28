import { useState } from 'react';
import { db } from '@/firebase/fire_config';
import { toast } from "react-toastify";
import { doc, updateDoc } from 'firebase/firestore';

export default function AdminModal({ user }) {
    const [btcAddr, setBtcAddr] = useState("");
    const [signal, setSignal] = useState("");
    const [whatsApp, setWhatsApp] = useState("");
    const [paypal, setPayPal] = useState("");
    const [wuFirstName, setWuFirstName] = useState("");
    const [wuLastName, setWuLastName] = useState("");
    const [wuCountry, setWuCountry] = useState("");
    const [mgFirstName, setMgFirstName] = useState("");
    const [mgLastName, setMgLastName] = useState("");
    const [mgCountry, setMgCountry] = useState("");
    const [wmtFirstName, setWmtFirstName] = useState("");
    const [wmtLastName, setWmtLastName] = useState("");
    const [wmtCountry, setWmtCountry] = useState("");

    const onUpdateAddr = async e => {
        e.preventDefault();

        const docRef = doc(db, 'harpy', 'harpy');
        await updateDoc(docRef, {
            "btcAddr": btcAddr,
        }).then(() => {
            toast.success("Address Updated!");
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

    const onUpdatePP = async e => {
        e.preventDefault();

        const docRef = doc(db, 'harpy', 'harpy');
        await updateDoc(docRef, {
            "paypal": paypal,
        }).then(() => {
            toast.success("PayPal Updated!");
        }).catch((error) => {
            if (error.code === "not-found") {
                toast.error("User not found");
            } else {
                toast.error(`Something is wrong: ${error.message}`);
            }
        });
    };

    const onUpdateWU = async e => {
        e.preventDefault();

        const docRef = doc(db, 'harpy', 'harpy');
        await updateDoc(docRef, {
            "western.firstName": wuFirstName,
            "western.lastName": wuLastName,
            "western.country": wuCountry,
        }).then(() => {
            toast.success("Western Union Updated!");
        }).catch((error) => {
            if (error.code === "not-found") {
                toast.error("User not found");
            } else {
                toast.error(`Something is wrong: ${error.message}`);
            }
        });
    };

    const onUpdateMG = async e => {
        e.preventDefault();

        const docRef = doc(db, 'harpy', 'harpy');
        await updateDoc(docRef, {
            "moneyGram.firstName": mgFirstName,
            "moneyGram.lastName": mgLastName,
            "moneyGram.country": mgCountry,
        }).then(() => {
            toast.success("Money Gram Updated!");
        }).catch((error) => {
            if (error.code === "not-found") {
                toast.error("User not found");
            } else {
                toast.error(`Something is wrong: ${error.message}`);
            }
        });
    };

    const onUpdateWMT = async e => {
        e.preventDefault();

        const docRef = doc(db, 'harpy', 'harpy');
        await updateDoc(docRef, {
            "wish.firstName": wmtFirstName,
            "wish.lastName": wmtLastName,
            "wish.country": wmtCountry,
        }).then(() => {
            toast.success("Wish Money Transfer Updated!");
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

                            <div className="col-12">
                                <p>
                                    <b>PayPal:</b> {user.paypal}
                                </p>
                            </div>

                            <form className="col-12 mb-3" onSubmit={onUpdatePP}>
                                <div className="mb-3">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="paypal"
                                            required
                                            placeholder="PayPal Link"
                                            onChange={(e) => setPayPal(e.target.value)}
                                        />
                                        <label htmlFor="paypal">PayPal Link</label>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-lg btn_secondary w-100">
                                    Update
                                </button>
                            </form>

                            <hr />

                            <div className="col-12">
                                <div>
                                    <b>Western Union:</b>
                                    <p>{user.western.firstName}</p>
                                    <p>{user.western.lastName}</p>
                                    <p>{user.western.country}</p>
                                </div>
                            </div>

                            <form className="col-12 mb-3" onSubmit={onUpdateWU}>
                                <div className="mb-3">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="wuFirstName"
                                            required
                                            placeholder="First Name"
                                            onChange={(e) => setWuFirstName(e.target.value)}
                                        />
                                        <label htmlFor="wuFirstName">First Name</label>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="wuLastName"
                                            required
                                            placeholder="Last Name"
                                            onChange={(e) => setWuLastName(e.target.value)}
                                        />
                                        <label htmlFor="wuLastName">Last Name</label>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="wuCountry"
                                            required
                                            placeholder="Country"
                                            onChange={(e) => setWuCountry(e.target.value)}
                                        />
                                        <label htmlFor="wuCountry">Country</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-lg btn_secondary w-100">
                                    Update
                                </button>
                            </form>

                            <hr />

                            <div className="col-12">
                                <div>
                                    <b>Money Gram:</b>
                                    <p>{user.moneyGram.firstName}</p>
                                    <p>{user.moneyGram.lastName}</p>
                                    <p>{user.moneyGram.country}</p>
                                </div>
                            </div>

                            <form className="col-12 mb-3" onSubmit={onUpdateMG}>
                                <div className="mb-3">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="mgFirstName"
                                            required
                                            placeholder="First Name"
                                            onChange={(e) => setMgFirstName(e.target.value)}
                                        />
                                        <label htmlFor="mgFirstName">First Name</label>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="mgLastName"
                                            required
                                            placeholder="Last Name"
                                            onChange={(e) => setMgLastName(e.target.value)}
                                        />
                                        <label htmlFor="mgLastName">Last Name</label>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="mgCountry"
                                            required
                                            placeholder="Country"
                                            onChange={(e) => setMgCountry(e.target.value)}
                                        />
                                        <label htmlFor="mgCountry">Country</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-lg btn_secondary w-100">
                                    Update
                                </button>
                            </form>

                            <hr />

                            <div className="col-12">
                                <div>
                                    <b>Wish Money Transfer:</b>
                                    <p>{user.wish.firstName}</p>
                                    <p>{user.wish.lastName}</p>
                                    <p>{user.wish.country}</p>
                                </div>
                            </div>

                            <form className="col-12 mb-3" onSubmit={onUpdateWMT}>
                                <div className="mb-3">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="wmtFirstName"
                                            required
                                            placeholder="First Name"
                                            onChange={(e) => setWmtFirstName(e.target.value)}
                                        />
                                        <label htmlFor="wmtFirstName">First Name</label>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="wmtLastName"
                                            required
                                            placeholder="Last Name"
                                            onChange={(e) => setWmtLastName(e.target.value)}
                                        />
                                        <label htmlFor="wmtLastName">Last Name</label>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="wmtCountry"
                                            required
                                            placeholder="Country"
                                            onChange={(e) => setWmtCountry(e.target.value)}
                                        />
                                        <label htmlFor="wmtCountry">Country</label>
                                    </div>
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