import styles from '@/components/dashboard/Dashboard.module.css'
import { DirectInbox, DollarSquare, HambergerMenu, Link1, Logout, UserCirlceAdd } from 'iconsax-react'
import Link from 'next/link'
import { useAuth } from '@/firebase/fire_auth_context';
import { useRouter } from "next/router";
import { useEffect } from 'react';

export default function DashboardNavbar() {
    const { logOut } = useAuth();
    const router = useRouter();

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

    return (
        <>
            {/* <div id="google_translate_element" /> */}
            <nav className="navbar navbar-expand-md navbar-dark py-0 px-4" style={{ background: "#222222" }}>
                <Link className="navbar-brand" href="/dashboard/user">
                    <img src="/logo_2_trans.png" width={50} alt="logo" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <HambergerMenu size="32" color="#ffffff" />
                </button>

                <div className={`collapse navbar-collapse ${styles.nav}`} id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        {
                            router.asPath !== "/dashboard/user/upload_id"
                                ? <>
                                    <li>
                                        <Link className="text-white text-start" href="#" role="button" data-bs-toggle="modal" data-bs-target="#walletModal">
                                            Wallet
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="text-white" href="#" role="button" data-bs-toggle="modal" data-bs-target="#paymentsModal">
                                            Payments
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-white" href="#" role="button" data-bs-toggle="modal" data-bs-target="#statisticsModal">
                                            Statistics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            target="_blank"
                                            className="primary" href="https://www.cranemountbank.com/account"
                                        >
                                            <Link1 className="me-2" />
                                            Bank Account
                                        </Link>
                                    </li>
                                </>
                                : <li>
                                    <Link className="text-white" href="/dashboard/user">Dashboard</Link>
                                </li>
                        }
                        <li>
                            <Link className="text-white" href="/dashboard/user/upload_id">Upload ID</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav">
                        <li className="m-0">
                            <Link role="button" className="text-white" href="#">
                                <UserCirlceAdd size={32} color="#16F196" />
                            </Link>
                        </li>

                        <li className="m-0">
                            <Link role="button" className="btn btn-sm btn_primary text-dark" href="#" data-bs-toggle="modal" data-bs-target="#plansModal">
                                <DirectInbox size={20} variant="Bulk" className="me-2" /> Deposit
                            </Link>
                        </li>

                        <li className="m-0">
                            <Link role="button" className="btn btn-sm btn_white text-dark" href="#" data-bs-toggle="modal" data-bs-target="#currenciesModal">
                                <DollarSquare size={20} variant="Bulk" className="me-2" /> Currency
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
