import Link from 'next/link'
import { Crimson_Pro } from 'next/font/google'
import { ArrowRight2 } from 'iconsax-react'

const crimson = Crimson_Pro({ subsets: ['latin'] })

export default function Info4() {
    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-12 my-5 text-center">
                    <h1 className={`${crimson.className} display-4`}>Our Investment Plans</h1>
                </div>

                <div className="col-md-3">
                    <div className="m-2 px-3 pt-5 pb-3 bg_white shadow rounded text-center text-muted">
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

                        <Link href="auth/signup" className="btn btn-lg mt-5 w-100 btn-dark btn_black">Get Started</Link>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="m-2 px-3 pt-5 pb-3 bg_white shadow border_primary rounded text-center text-muted position-relative">
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

                        <Link href="auth/signup" className="btn btn-lg mt-5 w-100 btn-dark btn_black">Get Started</Link>

                        <small className="alert alert-success p-1 rounded-1 position-absolute top-0 end-0">Client Choice</small>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="m-2 px-3 pt-5 pb-3 bg_white shadow rounded text-center text-muted">
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

                        <Link href="auth/signup" className="btn btn-lg mt-5 w-100 btn-dark btn_black">Get Started</Link>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="m-2 px-3 pt-5 pb-3 bg_white shadow rounded text-center text-muted">
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

                        <Link href="auth/signup" className="btn btn-lg mt-5 w-100 btn-dark btn_black">Get Started</Link>
                    </div>
                </div>

                <div className="col-12 mt-5 text-center">
                    <Link className="p-2 text-decoration-none text-muted" target="_blank" href="mailto:info@harpycrypto.com">
                        Contact us for custom investment plan. <ArrowRight2 color="#12b772" size={20} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
