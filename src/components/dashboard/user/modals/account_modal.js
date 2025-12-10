import { useState } from 'react';
import { useAuth } from '@/firebase/fire_auth_context';
import { toast } from 'react-toastify';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase/fire_config';
import Loader from '@/components/loader/loader';

export default function AccountModal({ user }) {
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
            onClearModal()
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

    const onClearModal = () => {
        setLoading(false); setFirstName(""); setLastName("");
        setPhoneNumber("");
    };

    return (
        <>
            <div className="modal fade" id="accountModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="accountModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="accountModalLabel">Quick Profile</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="m-2">
                                        <form onSubmit={onProfileUpdate}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3">
                                                        <input
                                                            type="text"
                                                            required
                                                            className="form-control"
                                                            id="firstName"
                                                            placeholder={user.firstName}
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
                                                            className="form-control"
                                                            id="lastName"
                                                            placeholder={user.lastName}
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
                                                    className="form-control"
                                                    id="phoneNumber"
                                                    placeholder={user.phoneNumber}
                                                    onChange={(event) => setPhoneNumber(event.target.value)}
                                                />
                                                <label htmlFor="phoneNumber">Phone Number</label>
                                            </div>

                                            <div className="w-100 mt-4 d-flex justify-content-around">
                                                <button type="submit" className="w-100 btn btn-lg btn_primary text-dark">
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
        </>
    )
}