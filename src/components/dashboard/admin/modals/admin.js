import { useState } from 'react';
import { db } from '@/firebase/fire_config';
import { toast } from "react-toastify";
import Loader from '@/components/loader/loader';
import { doc, updateDoc } from 'firebase/firestore';
import { Bitcoin } from 'iconsax-react';

export default function AdminModal({ user }) {
    const [loading, setLoading] = useState(false);
    const [btcAddr, setBtcAddr] = useState("");

    const onUpdateAddr = async event => {
        event.preventDefault();
        setLoading(true);

        const docRef = doc(db, 'harpy', 'harpy');
        await updateDoc(docRef, {
            "btcAddr": btcAddr,
        }).then(() => {
            toast.success("Addresses Updated!");
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
                            <div className="col-sm-6">
                                <p>
                                    <b><Bitcoin className="primary" /> BTC</b> {user.btcAddr}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <div className="row">
                                    <div className="col-12">
                                        <form onSubmit={onUpdateAddr}>
                                            <div className="d-flex mb-3">
                                                <div className="col-sm-6">
                                                    <div className="form-floating mx-1">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="btcAddr"
                                                            required
                                                            placeholder="BTC address"
                                                            onChange={(event) => setBtcAddr(event.target.value)}
                                                        />
                                                        <label htmlFor="btcAddr">BTC address</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <button type="submit" className="btn btn-lg btn_secondary">
                                                {loading ? <Loader /> : "Update Addresses"}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}