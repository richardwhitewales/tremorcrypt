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
                        <h6>Monthly for 1 weekly</h6>
                        <h3 className="black my-3 fw-bold">$500</h3>

                        <hr />
                        <ul className="text-start">
                            <li className="my-2"><small><b>10%</b> ROI</small></li>
                            <li className="my-2"><small>✓ Minimum $500.00</small></li>
                            <li className="my-2"><small>✓ Maximum $2,999.00</small></li>
                            <li className="my-2"><small>✓ Deposit bonuses: All offers</small></li>
                            <li className="my-2"><small>✓ Loyalty bonuses: All offers</small></li>
                        </ul>

                        <Link href="auth/signup" className="btn btn-lg mt-5 w-100 btn-dark btn_black">Get Started</Link>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="m-2 px-3 pt-5 pb-3 bg_white shadow border_primary rounded text-center text-muted position-relative">
                        <h4 className="secondary">Basic</h4>
                        <h6>Monthly for 1 month</h6>
                        <h3 className="black my-3 fw-bold">$3,000</h3>

                        <hr />
                        <ul className="text-start">
                            <li className="my-2"><small><b>15%</b> ROI</small></li>
                            <li className="my-2"><small>✓ Minimum $3,000.00</small></li>
                            <li className="my-2"><small>✓ Maximum $8,999.00</small></li>
                            <li className="my-2"><small>✓ Deposit bonuses: All offers</small></li>
                            <li className="my-2"><small>✓ Loyalty bonuses: All offers</small></li>
                        </ul>

                        <Link href="auth/signup" className="btn btn-lg mt-5 w-100 btn-dark btn_black">Get Started</Link>

                        <small className="alert alert-success p-1 rounded-1 position-absolute top-0 end-0">Client Choice</small>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="m-2 px-3 pt-5 pb-3 bg_white shadow rounded text-center text-muted">
                        <h4 className="secondary">Standard</h4>
                        <h6>Monthly for 1 month</h6>
                        <h3 className="black my-3 fw-bold">$9,000</h3>

                        <hr />
                        <ul className="text-start">
                            <li className="my-2"><small><b>20%</b> ROI</small></li>
                            <li className="my-2"><small>✓ Minimum $9,000.00</small></li>
                            <li className="my-2"><small>✓ Maximum $15,999.00</small></li>
                            <li className="my-2"><small>✓ Deposit bonuses: All offers</small></li>
                            <li className="my-2"><small>✓ Loyalty bonuses: All offers</small></li>
                        </ul>

                        <Link href="auth/signup" className="btn btn-lg mt-5 w-100 btn-dark btn_black">Get Started</Link>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="m-2 px-3 pt-5 pb-3 bg_white shadow rounded text-center text-muted">
                        <h4 className="secondary">Core</h4>
                        <h6>Monthly for 1 month</h6>
                        <h3 className="black my-3 fw-bold">$16,000</h3>

                        <hr />
                        <ul className="text-start">
                            <li className="my-2"><small><b>24.99%</b> ROI</small></li>
                            <li className="my-2"><small>✓ Minimum $16,000.00</small></li>
                            <li className="my-2"><small>✓ Maximum $24,999.00</small></li>
                            <li className="my-2"><small>✓ Deposit bonuses: All offers</small></li>
                            <li className="my-2"><small>✓ Loyalty bonuses: All offers</small></li>
                        </ul>

                        <Link href="auth/signup" className="btn btn-lg mt-5 w-100 btn-dark btn_black">Get Started</Link>
                    </div>
                </div>

                <div className="col-12 mt-5 text-center">
                    <Link className="p-2 text-decoration-none text-muted" target="_blank" href="mailto:info@harpycryto.com">
                        View more account type. <ArrowRight2 color="#c44a54" size={20} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
