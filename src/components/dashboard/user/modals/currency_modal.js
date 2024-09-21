import { useEffect, useState } from 'react';
import { useAuth } from '@/firebase/fire_auth_context';
import { toast } from 'react-toastify';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase/fire_config';
import Loader from '@/components/loader/loader';
import { currencies } from '@/components/utils/toCurrency';
import Cookies from 'js-cookie';

export default function CurrencyModal({ user }) {
    const [loading, setLoading] = useState(false);
    const [currency, setCurrency] = useState("");
    const { authUser } = useAuth();

    useEffect(() => {
        if (typeof window !== "undefined" && !user.currency) {
            const myModal = document.getElementById("currencyModal");

            if (myModal) {
                import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
                    const bsModal = new bootstrap.Modal(myModal);
                    bsModal.show();
                });
            }
        }
    }, []);

    const onUpdate = async event => {
        event.preventDefault();
        setLoading(true);

        if (currency === "") {
            toast.error("Select Main Currency")
            onClearModal()
        } else {
            const docRef = doc(db, "users", authUser.email);
            await updateDoc(docRef, {
                "currency": currency,
            }).then(async () => {
                try {
                    const res = await fetch(`https://v6.exchangerate-api.com/v6/731ceed2819539a3be14f7d8/latest/${user.currency}`, { method: 'GET' });

                    if (!res.ok) {
                        throw new Error(`Error: ${res.statusText}`);
                    }

                    const data = await res.json();
                    Cookies.set("HarpyRate", data["conversion_rates"]["USD"], { expires: 1 });
                    toast.success("Currency Updated.");
                    onClearModal()
                    setLoading(false);
                    location.reload();
                } catch (error) {
                    toast.error(`Failed to fetch exchange rate: ${error.message}`);
                }

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
    }

    const onClearModal = () => {
        setLoading(false); setCurrency("");
    };

    return (
        <>
            <div className="modal fade" id="currencyModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="currencyModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="currencyModalLabel">Select Currency</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="m-2">
                                        <form onSubmit={onUpdate}>
                                            <div className="col-md-12">
                                                <div className="form-floating mb-3">
                                                    <select
                                                        className="form-select form-control"
                                                        id="currency"
                                                        defaultValue={user.currency}
                                                        onChange={(e) => setCurrency(e.target.value)}
                                                    >
                                                        <option defaultValue="">Select</option>
                                                        {Object.entries(currencies).map(([code, name]) => (
                                                            <option key={code} value={code}>
                                                                {name} ({code})
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <label htmlFor="currency">Currency</label>
                                                </div>
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