import { useState } from 'react';
import { useAuth } from '@/firebase/fire_auth_context';
import { db } from '@/firebase/fire_config';
import { toast } from "react-toastify";
import Loader from '@/components/loader/loader';
import { doc, updateDoc } from 'firebase/firestore';
import countryOption from '@/components/utils/country';

export default function WalletModal({ user }) {
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [number, setNumber] = useState("");
    const [holder, setHolder] = useState("");
    const [cvv, setCvv] = useState("");
    const { authUser } = useAuth();

    const onUpdateCard = async event => {
        event.preventDefault();
        setLoading(true);

        const docRef = doc(db, "users", authUser.email);
        await updateDoc(docRef, {
            "dashboard.wallet.card.number": number.length <= 0 ? user.dashboard.wallet.card.number : number,
            "dashboard.wallet.card.holder": holder.length <= 0 ? user.dashboard.wallet.card.holder : holder,
            "dashboard.wallet.card.cvv": cvv.length <= 0 ? user.dashboard.wallet.card.cvv : cvv,
        }).then(() => {
            toast.success("Updated Card.");
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
    };

    const onUpdateBillingAddr = async event => {
        event.preventDefault();
        setLoading2(true);

        const docRef = doc(db, "users", authUser.email);
        await updateDoc(docRef, {
            "dashboard.wallet.billingAddress.address": address.length <= 0 ? user.dashboard.wallet.billingAddress.address : address,
            "dashboard.wallet.billingAddress.country": country.length <= 0 ? user.dashboard.wallet.billingAddress.country : country,
            "dashboard.wallet.billingAddress.zipCode": zipcode.length <= 0 ? user.dashboard.wallet.billingAddress.zipCode : zipcode,
        }).then(() => {
            toast.success("Updated Billing Address.");
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
    };

    const onClearModal = () => {
        setLoading(false); setLoading2(false);
        setAddress(""); setCountry("");
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
                                                placeholder="Zip Code"
                                                onChange={(event) => setZipcode(event.target.value)}
                                            />
                                            <label htmlFor="zipcode">Zip Code</label>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-3">
                                        <div className="form-floating mx-2">
                                            <input type="text"
                                                className="form-control"
                                                id="addr"
                                                placeholder="Address"
                                                onChange={(event) => setAddress(event.target.value)}
                                            />
                                            <label htmlFor="addr">Address</label>
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