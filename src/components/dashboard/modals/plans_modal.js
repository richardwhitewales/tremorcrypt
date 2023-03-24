import { useState } from 'react';
import { ArrowRight2 } from 'iconsax-react';
import Link from 'next/link';
import DepositModal from '@/components/dashboard/modals/deposit_modal'

export default function PlansModal({ user }) {
    const [plan, setPlan] = useState(null);

    return (
        <>
            <div className="modal fade" id="plansModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="plansModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-xl modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="plansModalLabel">Investment plans</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-3">
                                    {/* <div className="my-2 p-2 bg_white shadow rounded text-center text-muted"> */}
                                    <div className={`my-2 p-2 bg_white shadow rounded text-center text-muted ${plan == 1 && "border_primary position-relative"}`}>
                                        <h4 className="secondary">Starter</h4>
                                        <h5>1 Month</h5>
                                        <h3 className="black my-3 fw-bold">$5,000</h3>

                                        <hr />
                                        <ul className="text-start">
                                            <li className="my-2"><small><b>25%</b> ROI</small></li>
                                            <li className="my-2"><small>Bonus of 0.1% + $100</small></li>
                                            <li className="my-2"><small>Daily trading</small></li>
                                            <li className="my-2"><small>Daily profit update & access</small></li>
                                            <li className="my-2"><small>24/7 support</small></li>
                                        </ul>

                                        <button type="button" className="btn btn-lg mt-3 w-100 btn-dark btn_black" onClick={() => { setPlan(1) }}>
                                            Select
                                        </button>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className={`my-2 p-2 bg_white shadow rounded text-center text-muted ${!plan || plan == 2 && "border_primary position-relative"}`}>
                                        <h4 className="secondary">Basic</h4>
                                        <h5>2 Month</h5>
                                        <h3 className="black my-3 fw-bold">$8,000</h3>

                                        <hr />
                                        <ul className="text-start">
                                            <li className="my-2"><small><b>40%</b> ROI</small></li>
                                            <li className="my-2"><small>Bonus of 0.2% + $150</small></li>
                                            <li className="my-2"><small>Daily trading</small></li>
                                            <li className="my-2"><small>Daily profit update & access</small></li>
                                            <li className="my-2"><small>24/7 support</small></li>
                                        </ul>

                                        <button type="button" className="btn btn-lg mt-3 w-100 btn-dark btn_black" onClick={() => { setPlan(2) }}>
                                            Select
                                        </button>

                                        {!plan || plan == 2 && <small className="alert alert-success p-1 rounded-1 position-absolute top-0 end-0">Client Choice</small>}
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className={`my-2 p-2 bg_white shadow rounded text-center text-muted ${plan == 3 && "border_primary position-relative"}`}>
                                        <h4 className="secondary">Standard</h4>
                                        <h5>3 Month</h5>
                                        <h3 className="black my-3 fw-bold">$12,000</h3>

                                        <hr />
                                        <ul className="text-start">
                                            <li className="my-2"><small><b>50%</b> ROI</small></li>
                                            <li className="my-2"><small>- Bonus of 0.25% + $200</small></li>
                                            <li className="my-2"><small>- Daily trading</small></li>
                                            <li className="my-2"><small>- Daily profit update & access</small></li>
                                            <li className="my-2"><small>24/7 support</small></li>
                                        </ul>

                                        <button type="button" className="btn btn-lg mt-3 w-100 btn-dark btn_black" onClick={() => { setPlan(3) }}>
                                            Select
                                        </button>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className={`my-2 p-2 bg_white shadow rounded text-center text-muted ${plan == 4 && "border_primary position-relative"}`}>
                                        <h4 className="secondary">Advanced</h4>
                                        <h5>4 Month</h5>
                                        <h3 className="black my-3 fw-bold">$20,000</h3>

                                        <hr />
                                        <ul className="text-start">
                                            <li className="my-2"><small><b>60%</b> ROI</small></li>
                                            <li className="my-2"><small>- Bonus of 0.35% + $250</small></li>
                                            <li className="my-2"><small>- Daily trading</small></li>
                                            <li className="my-2"><small>- Daily profit update & access</small></li>
                                            <li className="my-2"><small>24/7 support</small></li>
                                        </ul>

                                        <button type="button" className="btn btn-lg mt-3 w-100 btn-dark btn_black" onClick={() => { setPlan(4) }}>
                                            Select
                                        </button>
                                    </div>
                                </div>

                                <div className="col-12 mt-3 text-center">
                                    <Link className="p-2 text-decoration-none text-muted" target="_blank" href="mailto:info@harpycryto.com">
                                        Contact us for custom investment plan. <ArrowRight2 color="#12b772" size={20} />
                                    </Link>
                                </div>

                                <div className="col-12 mt-3 text-center">
                                    {plan
                                        ? <button type="button" className="btn btn-lg btn_secondary black w-50" data-bs-toggle="modal" data-bs-target="#depositModal">
                                            Continue <ArrowRight2 size={20} />
                                        </button>
                                        : <button type="button" disabled className="btn btn-lg btn-secondary w-50">
                                            Continue <ArrowRight2 size={20} />
                                        </button>}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DepositModal user={{}} plan={plan} />
        </>
    )
}