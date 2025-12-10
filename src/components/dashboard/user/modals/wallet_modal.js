import { useState } from 'react';
import { useAuth } from '@/firebase/fire_auth_context';
import { db } from '@/firebase/fire_config';
import { toast } from "react-toastify";
import Loader from '@/components/loader/loader';
import { doc, updateDoc } from 'firebase/firestore';
import countryOption from '@/components/utils/country';

export default function WalletModal() {
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [accountType, setAccountType] = useState("");
    const [country, setCountry] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [number, setNumber] = useState("");
    const [holder, setHolder] = useState("");
    const [cvv, setCvv] = useState("");
    const { authUser } = useAuth();

    const onUpdateCard = async event => {
        event.preventDefault();
        setLoading(true);

        const docRef = doc(db, "users_tremorcrypt", authUser.email);
        await updateDoc(docRef, {
            "dashboard.card.holder": holder,
            "dashboard.card.number": number,
            "dashboard.card.cvv": cvv,
        }).then(() => {
            toast.success("Updated Card.");
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
    };

    const onUpdateBillingAddr = async event => {
        event.preventDefault();
        setLoading2(true);

        const docRef = doc(db, "users_tremorcrypt", authUser.email);
        await updateDoc(docRef, {
            "country": country,
            "zipCode": zipcode,
            "accountType": accountType,
        }).then(() => {
            toast.success("Updated Billing Address.");
            setLoading2(false);
            onClearModal();
        }).catch((error) => {
            if (error.code === "not-found") {
                toast.error("User not found");
                setLoading2(false);
            } else {
                toast.error(`Something is wrong: ${error.message}`);
                setLoading2(false);
            }
        });
    };

    const onClearModal = () => {
        setLoading(false); setLoading2(false);
        setAccountType(""); setCountry("");
        setZipcode(""); setNumber("");
        setHolder(""); setCvv("");
    };

    return (
        <div className="modal fade" id="walletModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="walletModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="walletModalLabel">Wallet</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClearModal}></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-sm-6">
                                <form onSubmit={onUpdateCard}>
                                    <div className="col-12">
                                        <div className="form-floating mx-2">
                                            <input type="text"
                                                className="form-control"
                                                id="number"
                                                required
                                                placeholder="Card Number"
                                                onChange={(event) => setNumber(event.target.value)}
                                            />
                                            <label htmlFor="number">Card Number</label>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-3">
                                        <div className="form-floating mx-2">
                                            <input type="text"
                                                className="form-control"
                                                id="holder"
                                                required
                                                placeholder="Card Holder Name"
                                                onChange={(event) => setHolder(event.target.value)}
                                            />
                                            <label htmlFor="holder">Card Holder Name</label>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-3">
                                        <div className="form-floating mx-2">
                                            <input type="text"
                                                className="form-control"
                                                id="cvv"
                                                required
                                                placeholder="CVV"
                                                onChange={(event) => setCvv(event.target.value)}
                                            />
                                            <label htmlFor="cvv">CVV</label>
                                        </div>
                                    </div>

                                    <div className="modal-footer mt-3">
                                        <button type="submit" className="btn btn-lg btn-dark ">
                                            {loading ? <Loader /> : "Save Card"}
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="col-sm-6">
                                <form onSubmit={onUpdateBillingAddr}>
                                    <div className="col-12">
                                        <div className="form-floating mx-1">
                                            <select
                                                className="form-select"
                                                id="country"
                                                required
                                                onChange={(event) => setCountry(event.target.value)}
                                            >
                                                <option selected>AFGHANISTAN</option>
                                                {countryOption.map((countryOption) => (countryOption))}
                                            </select>
                                            <label htmlFor="country">Country</label>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-3">
                                        <div className="form-floating mx-2">
                                            <input type="text"
                                                className="form-control"
                                                id="zipcode"
                                                required
                                                placeholder="Zip Code"
                                                onChange={(event) => setZipcode(event.target.value)}
                                            />
                                            <label htmlFor="zipcode">Zip Code</label>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-3">
                                        <div className="form-floating mx-2">
                                            <select
                                                className="form-select"
                                                id="accountType"
                                                required
                                                onChange={(event) => setAccountType(event.target.value)}
                                            >
                                                <option selected>STARTER</option>
                                                <option value="BASIC">BASIC</option>
                                                <option value="STANDARD">STANDARD</option>
                                                <option value="CORE">CORE</option>
                                                <option value="ADVANCED">ADVANCED</option>
                                                <option value="PREMIUM">PREMIUM</option>
                                            </select>
                                            <label htmlFor="accountType">Account Type</label>
                                        </div>
                                    </div>

                                    <div className="modal-footer mt-3">
                                        <button type="submit" className="btn btn-lg btn-dark ">
                                            {loading2 ? <Loader /> : "Save Address"}
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