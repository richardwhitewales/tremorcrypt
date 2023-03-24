import Link from 'next/link'
import { useRouter } from "next/router";
import { ArrowRight2, Cloud, Coffee, MagicStar, Tree } from 'iconsax-react';
import styles from '@/components/navigations/Navigations.module.css'
import { useAuth } from '@/firebase/fire_auth_context';

export default function Navbar() {
    const router = useRouter();
    const { loading, authUser } = useAuth();

    return (
        <nav className="navbar navbar-expand-md navbar-light bg_white">
            <div className="container">
                <Link className="navbar-brand" href="/">
                    <img
                        src="/favicon.png"
                        alt="logo"
                        width={70}
                        height={70}
                    />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0 px-md-5">
                        <li className="nav-item">
                            <Link className={`nav-link mx-2 ${router.asPath == "/" && "secondary"}`} href="/">Home</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link mx-2 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Investments
                            </Link>

                            <div className={`dropdown-menu ${styles.dropdown_menu}`}>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link className={styles.dropdown_item} href="/auth/signup">
                                                    <Tree color="#12b772" /> Starter
                                                    <div>
                                                        <ul className="list-unstyled text-muted">
                                                            <li className="mx-4 mr-0"><small>- 1 month maturity duration</small></li>
                                                            <li className="mx-4 mr-0"><small>- 25% ROI</small></li>
                                                            <li className="mx-4 mr-0"><small>- Bonus of 0.1% + $100</small></li>
                                                            <li className="mx-4 mr-0"><small>- Daily trading</small></li>
                                                            <li className="mx-4 mr-0"><small>- Daily profit update & access</small></li>
                                                            <li className="mx-4 mr-0 fw-bold"><small>- Deposit $5,000</small></li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className={styles.dropdown_item} href="/auth/signup">
                                                    <Coffee color="#12b772" /> Standard
                                                    <div>
                                                        <ul className="list-unstyled text-muted">
                                                            <li className="mx-4 mr-0"><small>- 3 months maturity duration</small></li>
                                                            <li className="mx-4 mr-0"><small>- 50% ROI</small></li>
                                                            <li className="mx-4 mr-0"><small>- Bonus of 0.25% + $200</small></li>
                                                            <li className="mx-4 mr-0"><small>- Daily trading</small></li>
                                                            <li className="mx-4 mr-0"><small>- Daily profit update & access</small></li>
                                                            <li className="mx-4 mr-0 fw-bold"><small>- Deposit $12,000</small></li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-sm-6">
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link className={`${styles.dropdown_item} border rounded shadow-sm position-relative`} href="/auth/signup">
                                                    <Cloud color="#12b772" /> Basic
                                                    <div>
                                                        <ul className="list-unstyled text-muted">
                                                            <li className="mx-4 mr-0"><small>- 2 months maturity duration</small></li>
                                                            <li className="mx-4 mr-0"><small>- 40% ROI</small></li>
                                                            <li className="mx-4 mr-0"><small>- Bonus of 0.2% + $150</small></li>
                                                            <li className="mx-4 mr-0"><small>- Daily trading</small></li>
                                                            <li className="mx-4 mr-0"><small>- Daily profit update & access</small></li>
                                                            <li className="mx-4 mr-0 fw-bold"><small>- Deposit $8,000</small></li>
                                                        </ul>
                                                    </div>

                                                    <small className="alert alert-danger p-1 rounded-1 position-absolute top-0 end-0">Most Purchased</small>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link className={styles.dropdown_item} href="/auth/signup">
                                                    <MagicStar color="#12b772" /> Advanced
                                                    <div>
                                                        <ul className="list-unstyled text-muted">
                                                            <li className="mx-4 mr-0"><small>- 4 months maturity duration</small></li>
                                                            <li className="mx-4 mr-0"><small>- 60% ROI</small></li>
                                                            <li className="mx-4 mr-0"><small>- Bonus of 0.35% + $250</small></li>
                                                            <li className="mx-4 mr-0"><small>- Daily trading</small></li>
                                                            <li className="mx-4 mr-0"><small>- Daily profit update & access</small></li>
                                                            <li className="mx-4 mr-0 fw-bold"><small>- Deposit $20,000</small></li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-12">
                                        <Link className=" p-2 text-decoration-none text-muted" target="_blank" href="mailto:info@harpycryto.com">
                                            Contact us for custom investment plan. <ArrowRight2 color="#12b772" size={20} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item">
                            <Link className={`nav-link mx-2 ${router.asPath == "/team" && "secondary"}`} href="/team">Our Team</Link>
                        </li>

                        <li className="nav-item">
                            <Link className={`nav-link mx-2 ${router.asPath == "/about" && "secondary"}`} href="/about">About Us</Link>
                        </li>

                        <li className="nav-item">
                            <Link className={`nav-link mx-2 ${router.asPath == "/how_it_works" && "secondary"}`} href="/how_it_works">How It Works</Link>
                        </li>

                        <li className="nav-item">
                            <Link className={`nav-link mx-2 ${router.asPath == "/contact" && "secondary"}`} href="/contact">Contact Us</Link>
                        </li>
                    </ul>

                    <div className="d-flex">
                        {!loading && authUser
                            ? <Link className="btn btn-sm btn_secondary mx-2" href="/dashboard">
                                Account Dashboard <ArrowRight2 size={20} />
                            </Link>
                            : <Link className="btn btn-sm btn_secondary mx-2" href="/auth/signin">
                                Account Dashboard <ArrowRight2 size={20} />
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}
