import styles from '@/components/dashboard/Dashboard.module.css'
import { useAuth } from '@/firebase/fire_auth_context';
import { useState } from 'react';
import { toast } from "react-toastify";
import { db } from '@/firebase/fire_config';
import Loader from '@/components/loader/loader';
import { doc, updateDoc } from 'firebase/firestore';

export default function DashboardQuick({user}) {
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const { authUser } = useAuth();

    const onProfileUpdate = async event => {
        event.preventDefault();
        setLoading(true);

        const docRef = doc(db, "users_tremorcrypt", authUser.email);
        await updateDoc(docRef, {
            "firstName": firstName,
            "lastName": lastName,
            "phoneNumber": phoneNumber,
        }).then(() => {
            toast.success("Profile Updated.");
            setLoading(false);
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

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className={`my-3 p-2 ${styles.card}`}>
                        <div className="row">
                            <div className="col-12">
                                <h5>Quick payments</h5>
                                <hr />
                            </div>
                            <div className="col-12 text-center">
                                <div className="m-2">
                                    <p className="mb-5">
                                        Quickly make deposit or withdrawal to or from your Tremorcrypt account with ease!
                                        This is design to provide quick hand exprience.
                                    </p>

                                    <div className="d-flex justify-content-around mb-3">
                                        <button
                                            type="button"
                                            className={`btn btn-lg btn-light bg-white ${styles.qiuck_btn}`}
                                            data-bs-toggle="modal" data-bs-target="#plansModal">
                                            <span>Deposit</span>
                                        </button>
                                        <button
                                            type="button"
                                            className={`btn btn-lg btn_primary black ${styles.qiuck_btn}`}
                                            data-bs-toggle="modal" data-bs-target="#withdrawModal">
                                            <span>Withdraw</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className={`my-3 p-2 ${styles.card}`}>
                        <div className="row">
                            <div className="col-12">
                                <h5>Quick profile</h5>
                                <hr />
                            </div>

                            <div className="col-12">
                                <div className="m-2">
                                    <form onSubmit={onProfileUpdate}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="text"
                                                        required
                                                        className="form-control bg_black_15 text-white border-dark"
                                                        id="firstName"
                                                        placeholder="Jon"
                                                        onChange={(event) => setFirstName(event.target.value)}
                                                    />
                                                    <label htmlFor="firstName">First Name</label>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="text"
                                                        required
                                                        className="form-control bg_black_15 text-white border-dark"
                                                        id="lastName"
                                                        placeholder="Doe"
                                                        onChange={(event) => setLastName(event.target.value)}
                                                    />
                                                    <label htmlFor="lastName">Last Name</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                required
                                                className="form-control bg_black_15 text-white border-dark"
                                                id="phoneNumber"
                                                placeholder="Jon"
                                                onChange={(event) => setPhoneNumber(event.target.value)}
                                            />
                                            <label htmlFor="phoneNumber">Phone Number</label>
                                        </div>

                                        <div className="w-100 mt-4 d-flex justify-content-around">
                                            <button type="submit" className="w-100 btn btn-lg btn-light bg-white">
                                                {loading ? <Loader /> : "Save"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
