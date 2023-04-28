import Image from 'next/image';
import { useState } from 'react';

export default function OtherPaymentMethodModal() {
    const [isSuccess, setIsSuccess] = useState(false);

    const onPayment = async event => {
        event.preventDefault();
        setIsSuccess(true)
    };

    const onClearModal = () => setIsSuccess(false);

    return (
        <div className="modal fade" id="otherPaymentMethodModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="otherPaymentMethodModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="otherPaymentMethodModalLabel">Other Payment Method</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClearModal}></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-12">
                                <form onSubmit={onPayment}>
                                    <div className="alert alert-light border_primary shadow">
                                        If you are making a bank transfer, please note that depending on your location,
                                        transaction might take up to 5 business days to confirm. If you encounter any
                                        issue while funding your account, please contact payment@harpycryto.com for assistance.
                                    </div>

                                    {isSuccess && (
                                        <div id="otherSuccess" className="alert d-flex flex-column text-center">
                                            <a href="https://wa.me/+15152593292?text=Hi,%20I%27m%20Interested%20in%20investing" className="text-decoration-none primary" target="_blank" rel="noreferrer">
                                                <Image
                                                    src="/whatsapp.png"
                                                    alt="Whatsapp"
                                                    width={80}
                                                    height={80}
                                                    priority={true}
                                                />
                                                Contact us via WhatsApp
                                            </a>
                                        </div>
                                    )}

                                    <div className="col-12">
                                        <div className="form-floating mx-2">
                                            <input type="text" className="form-control" id="otherAmount" required placeholder="Amount (usd)" />
                                            <label htmlFor="otherAmount">Amount (USD)</label>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-3">
                                        <div className="form-floating mx-2">
                                            <select className="form-select" required id="otherPaymentMethod">
                                                <option selected>Bank Transfer</option>
                                                <option value="1">Western Union</option>
                                                <option value="2">Perfect Money</option>
                                            </select>
                                            <label htmlFor="otherPaymentMethod">Payment Method</label>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <button type="submit" className="btn btn-lg btn_secondary white w-100">
                                            Submit
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