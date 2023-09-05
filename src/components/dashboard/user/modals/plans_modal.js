import { useState } from 'react';
import { ArrowRight2 } from 'iconsax-react';
import DepositModal from '@/components/dashboard/user/modals/deposit_modal'

export default function PlansModal({ user }) {
    const [plan, setPlan] = useState(null);

    return (
        <>
            <div className="modal fade" id="plansModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="plansModalLabel" aria-hidden="true">
                <div className="modal-dialog  modal-xl modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="plansModalLabel">Investment Plans</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { setPlan(null) }}></button>
                        </div>
                        <div className="modal-body">
                            <div className="row justify-content-center">
                                <div className="col-md-3">
                                    <div className={`my-2 p-2 bg_white shadow rounded text-center text-muted ${plan === "STARTER" && "border_primary position-relative"}`}>
                                        <h4 className="secondary">Starter</h4>
                                        <h6>Monthly for 1 weekly</h6>
                                        <h3 className="black my-3 fw-bold">$1000</h3>

                                        <hr />
                                        <ul className="text-start">
                                            <li className="my-2"><small><b>10%</b> ROI</small></li>
                                            <li className="my-2"><small>✓ Minimum $1,000.00</small></li>
                                            <li className="my-2"><small>✓ Maximum $4,999.00</small></li>
                                            <li className="my-2"><small>✓ Deposit bonuses: All offers</small></li>
                                            <li className="my-2"><small>✓ Loyalty bonuses: All offers</small></li>
                                        </ul>

                                        <button type="button" className="btn btn-lg mt-3 w-100 btn-dark btn_black" onClick={() => { setPlan("STARTER") }}>
                                            Select
                                        </button>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className={`my-2 p-2 bg_white shadow rounded text-center text-muted ${plan === "BASIC" && "border_primary position-relative"}`}>
                                        <h4 className="secondary">Basic</h4>
                                        <h6>Monthly for 1 month</h6>
                                        <h3 className="black my-3 fw-bold">$5,000</h3>

                                        <hr />
                                        <ul className="text-start">
                                            <li className="my-2"><small><b>15%</b> ROI</small></li>
                                            <li className="my-2"><small>✓ Minimum $5,000.00</small></li>
                                            <li className="my-2"><small>✓ Maximum $14,999.00</small></li>
                                            <li className="my-2"><small>✓ Deposit bonuses: All offers</small></li>
                                            <li className="my-2"><small>✓ Loyalty bonuses: All offers</small></li>
                                        </ul>

                                        <button type="button" className="btn btn-lg mt-3 w-100 btn-dark btn_black" onClick={() => { setPlan("BASIC") }}>
                                            Select
                                        </button>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className={`my-2 p-2 bg_white shadow rounded text-center text-muted ${plan === "STANDARD" && "border_primary position-relative"}`}>
                                        <h4 className="secondary">Standard</h4>
                                        <h6>Monthly for 1 month</h6>
                                        <h3 className="black my-3 fw-bold">$15,000</h3>

                                        <hr />
                                        <ul className="text-start">
                                            <li className="my-2"><small><b>20%</b> ROI</small></li>
                                            <li className="my-2"><small>✓ Minimum $15,000.00</small></li>
                                            <li className="my-2"><small>✓ Maximum $24,999.00</small></li>
                                            <li className="my-2"><small>✓ Deposit bonuses: All offers</small></li>
                                            <li className="my-2"><small>✓ Loyalty bonuses: All offers</small></li>
                                        </ul>

                                        <button type="button" className="btn btn-lg mt-3 w-100 btn-dark btn_black" onClick={() => { setPlan("STANDARD") }}>
                                            Select
                                        </button>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className={`my-2 p-2 bg_white shadow rounded text-center text-muted ${plan === "CORE" && "border_primary position-relative"}`}>
                                        <h4 className="secondary">Core</h4>
                                        <h6>Monthly for 1 month</h6>
                                        <h3 className="black my-3 fw-bold">$25,000</h3>

                                        <hr />
                                        <ul className="text-start">
                                            <li className="my-2"><small><b>24.99%</b> ROI</small></li>
                                            <li className="my-2"><small>✓ Minimum $25,000.00</small></li>
                                            <li className="my-2"><small>✓ Maximum $34,999.00</small></li>
                                            <li className="my-2"><small>✓ Deposit bonuses: All offers</small></li>
                                            <li className="my-2"><small>✓ Loyalty bonuses: All offers</small></li>
                                        </ul>

                                        <button type="button" className="btn btn-lg mt-3 w-100 btn-dark btn_black" onClick={() => { setPlan("CORE") }}>
                                            Select
                                        </button>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className={`my-2 p-2 bg_white shadow rounded text-center text-muted ${plan === "ADVANCED" && "border_primary position-relative"}`}>
                                        <h4 className="secondary">Advanced</h4>
                                        <h6>Monthly for 1 month</h6>
                                        <h3 className="black my-3 fw-bold">$35,000</h3>

                                        <hr />
                                        <ul className="text-start">
                                            <li className="my-2"><small><b>30%</b> ROI</small></li>
                                            <li className="my-2"><small>✓ Minimum $35,000.00</small></li>
                                            <li className="my-2"><small>✓ Maximum $49,999.00</small></li>
                                            <li className="my-2"><small>✓ Deposit bonuses: All offers</small></li>
                                            <li className="my-2"><small>✓ Loyalty bonuses: All offers</small></li>
                                        </ul>

                                        <button type="button" className="btn btn-lg mt-3 w-100 btn-dark btn_black" onClick={() => { setPlan("ADVANCED") }}>
                                            Select
                                        </button>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className={`my-2 p-2 bg_white shadow rounded text-center text-muted ${plan === "PREMIUM" && "border_primary position-relative"}`}>
                                        <h4 className="secondary">Premium</h4>
                                        <h6>Monthly for 1 year</h6>
                                        <h3 className="black my-3 fw-bold">$50,000</h3>

                                        <hr />
                                        <ul className="text-start">
                                            <li className="my-2"><small><b>30%</b> ROI</small></li>
                                            <li className="my-2"><small>✓ Minimum $50,000.00</small></li>
                                            <li className="my-2"><small>✓ Maximum Unlimited</small></li>
                                            <li className="my-2"><small>✓ Deposit bonuses: All offers</small></li>
                                            <li className="my-2"><small>✓ Loyalty bonuses: All offers</small></li>
                                        </ul>

                                        <button type="button" className="btn btn-lg mt-3 w-100 btn-dark btn_black" onClick={() => { setPlan("PREMIUM") }}>
                                            Select
                                        </button>
                                    </div>
                                </div>

                                <div className="col-12 mt-3 text-center">
                                    {plan
                                        ? <button type="button" className="btn btn-lg btn_secondary black w-50" data-bs-toggle="modal" data-bs-target="#depositModal">
                                            Continue <ArrowRight2 size={20} />
                                        </button>
                                        : <button type="button" disabled className="btn btn-lg btn-secondary w-50">
                                            Continue <ArrowRight2 size={20} />
                                        </button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DepositModal user={user} plan={plan} />
        </>
    )
}