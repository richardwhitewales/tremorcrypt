import Link from 'next/link'
import { useRouter } from "next/router";
import { ArrowRight2, Cloud, Coffee, Logout, MagicStar, Tree } from 'iconsax-react';
import styles from '@/components/navigations/Navigations.module.css'
import { useAuth } from '@/firebase/fire_auth_context';
import { useEffect } from 'react';
import Marquee from '../marquee';

export default function Navbar() {
    const router = useRouter();
    const { loading, authUser, logOut } = useAuth();

    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;

    }, [])

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
            'google_translate_element');
    }

    const dashboard = () => {
        if (!loading && authUser) {
            return <>
                {authUser.email === "harpycryto@gmail.com" || authUser.email === "richardwhitewales@gmail.com" ?
                    <Link className="btn btn-sm btn_secondary mx-2" href="/dashboard/admin">
                        Account Dashboard <ArrowRight2 size={20} />
                    </Link>
                    :
                    <Link className="btn btn-sm btn_secondary mx-2" href="/dashboard/user">
                        Account Dashboard <ArrowRight2 size={20} />
                    </Link>
                }
                <button className="btn btn-sm mx-2" role="button" onClick={logOut}>
                    Sign Out <Logout size={20} />
                </button>
            </>
        } else {
            return <Link className="btn btn-sm btn_secondary mx-2" href="/auth/signin">
                Account Dashboard <ArrowRight2 size={20} />
            </Link>
        }
    }

    return (
        <>
            <div id="google_translate_element" />
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
                                    Services
                                </Link>

                                <div className={`dropdown-menu ${styles.dropdown_menu}`} style={{ width: "auto" }}>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link className={styles.dropdown_item} href="/buycrypto">
                                                Buy Crypto
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className={styles.dropdown_item} href="/copytrading">
                                                Copy Trading
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link mx-2 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Trading Tools
                                </Link>

                                <div className={`dropdown-menu ${styles.dropdown_menu}`} style={{ width: "auto" }}>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link className={styles.dropdown_item} href="/forexchart">
                                                Forex Chart
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className={styles.dropdown_item} href="/indexchart">
                                                Index Chart
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className={styles.dropdown_item} href="/cryptochart">
                                                Crypto Chart
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link mx-2 ${router.asPath == "/licenses" && "secondary"}`} href="/licenses">Licenses</Link>
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
                                                        <ul className="list-unstyled text-muted">
                                                            <li className="mx-4 mr-0"><small>✓ Monthly for 1 weekly</small></li>
                                                            <li className="mx-4 mr-0"><small>✓ 10% ROI</small></li>
                                                            {/* <li className="mx-4 mr-0"><small>✓ Minimum $500.00</small></li> */}
                                                            {/* <li className="mx-4 mr-0"><small>✓ Maximum $4,999.00</small></li> */}
                                                            <li className="mx-4 mr-0"><small>✓ Deposit bonuses: All offers</small></li>
                                                            <li className="mx-4 mr-0 fw-bold"><small>✓ Loyalty bonuses: All offers</small></li>
                                                        </ul>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className={styles.dropdown_item} href="/auth/signup">
                                                        <Coffee color="#12b772" /> Standard
                                                        <ul className="list-unstyled text-muted">
                                                            <li className="mx-4 mr-0"><small>✓ Monthly for 1 month</small></li>
                                                            <li className="mx-4 mr-0"><small>✓ 20% ROI</small></li>
                                                            {/* <li className="mx-4 mr-0"><small>✓ Minimum $15,000.00</small></li> */}
                                                            {/* <li className="mx-4 mr-0"><small>✓ Maximum $24,999.00</small></li> */}
                                                            <li className="mx-4 mr-0"><small>✓ Deposit bonuses: All offers</small></li>
                                                            <li className="mx-4 mr-0 fw-bold"><small>✓ Loyalty bonuses: All offers</small></li>
                                                        </ul>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-sm-6">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <Link className={styles.dropdown_item} href="/auth/signup">
                                                        <Cloud color="#12b772" /> Basic
                                                        <ul className="list-unstyled text-muted">
                                                            <li className="mx-4 mr-0"><small>✓ Monthly for 1 month</small></li>
                                                            <li className="mx-4 mr-0"><small>✓ 15% ROI</small></li>
                                                            {/* <li className="mx-4 mr-0"><small>✓ Minimum $5,000.00</small></li> */}
                                                            {/* <li className="mx-4 mr-0"><small>✓ Maximum $14,999.00</small></li> */}
                                                            <li className="mx-4 mr-0"><small>✓ Deposit bonuses: All offers</small></li>
                                                            <li className="mx-4 mr-0 fw-bold"><small>✓ Loyalty bonuses: All offers</small></li>
                                                        </ul>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link className={styles.dropdown_item} href="/auth/signup">
                                                        <ul className="list-unstyled text-muted">
                                                            <MagicStar color="#12b772" /> Core
                                                            <li className="mx-4 mr-0"><small>✓ Monthly for 1 month</small></li>
                                                            <li className="mx-4 mr-0"><small>✓ 24.99% ROI</small></li>
                                                            {/* <li className="mx-4 mr-0"><small>✓ Minimum $25,000.00</small></li> */}
                                                            {/* <li className="mx-4 mr-0"><small>✓ Maximum $34,999.00</small></li> */}
                                                            <li className="mx-4 mr-0"><small>✓ Deposit bonuses: All offers</small></li>
                                                            <li className="mx-4 mr-0 fw-bold"><small>✓ Loyalty bonuses: All offers</small></li>
                                                        </ul>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-12">
                                            <Link className=" p-2 text-decoration-none text-muted" target="_blank" href="mailto:info@tremorcrypt.com">
                                                View more investments plans. <ArrowRight2 color="#12b772" size={20} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link mx-2 ${router.asPath == "/how_it_works" && "secondary"}`} href="/how_it_works">How It Works</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link mx-2 ${router.asPath == "/contact" && "secondary"}`} href="/contact">Contact Us</Link>
                            </li>
                        </ul>

                        <div className="d-flex">
                            {dashboard()}
                        </div>
                    </div>
                </div>
            </nav >
            <Marquee />
        </>
    )
}
