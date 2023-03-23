import Link from 'next/link'
import { Call, DirectInbox, Location } from 'iconsax-react'

export default function Footer() {
    return (
        <footer>
            <div className="container-fluid p-md-5 bg_grey white">
                <div className="row justify-content-center">
                    <div className="col-sm-10">
                        <div className="row justify-content-center">
                            <div className="col-sm-6">
                                <div className="my-3">

                                    <div className="display-6">
                                        SignUp To Our Newsletter!
                                    </div>
                                    <small className="white">
                                        Subscribe and get latest news & events
                                    </small>
                                </div>
                            </div>
                            <div className="col-sm-6 text-center">
                                <div className="my-2 d-flex">
                                    <input type="email" className="form-control border_none rounded m-2" id="emailAddr" placeholder="name@example.com" />

                                    <Link href="#" className="btn btn-lg m-2 border_none rounded btn_secondary">
                                        SEND
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-md-5 bg_black white">
                <div className="row justify-content-center">
                    <div className="col-sm-7">
                        <div className="my-3">
                            <div className="display-5 text-white">
                                Harpy Crypto Investments Provides Various Plans.
                            </div>
                            <small className="white_50">
                                If you need a crypto investment platform that handles all your investments, providing you with high and safe ROI, Harpy Crypto is your bet!
                            </small>
                        </div>
                    </div>

                    <div className="col-sm-4 text-center">
                        <div className="my-3">
                            <Link href="/auth/signup" className="btn btn-lg btn_primary">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5 px-3 bg_primary">
                <div className="row">
                    <div className="col-sm-4 white">
                        <Link href="/">
                            <img
                                src="/logo_2.png"
                                alt="logo"
                                width={80}
                                height={80}
                                className="rounded"
                            />
                        </Link>
                        <div>
                            Harpy Crypto is a leading investment company specializing in crypto investments.
                            <ul className="list-unstyled">
                                <li>
                                    <Location /> George St, Chicago  60618, USA
                                </li>
                                <li>
                                    <DirectInbox /> info@harpycryto.com
                                </li>
                                <li>
                                    <Call /> +1-415-209-5796
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <ul className="list-unstyled">
                            <li className="nav-item py-2 px-0">
                                <Link className="nav-link" href="/">Home</Link>
                            </li>
                            <li className="nav-item py-2 px-0">
                                <Link className="nav-link" href="/about">About</Link>
                            </li>
                            <li className="nav-item py-2 px-0">
                                <Link className="nav-link" href="/privacy">Privacy policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <ul className="list-unstyled">
                            <li className="nav-item py-2 px-0">
                                <Link className="nav-link" href="/team">Our Team</Link>
                            </li>
                            <li className="nav-item py-2 px-0">
                                <Link className="nav-link" href="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item py-2 px-0">
                                <Link className="nav-link" href="/terms">Terms & conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg_black primary p-3 text-center">© Copyright {new Date().getFullYear()}, Harpy Cryto Investments | All Rights Reserved.</div>
        </footer>
    )
}
