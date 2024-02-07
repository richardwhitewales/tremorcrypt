import styles from '@/components/dashboard/Dashboard.module.css'
import { HambergerMenu, Logout } from 'iconsax-react'
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
            <div id="google_translate_element" />
            <nav className="navbar navbar-expand-md bg_black p-2">
                <Link className="navbar-brand" href="/dashboard/user">
                    <img src="/logo_trans.png" width={80} alt="logo" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <HambergerMenu size="32" color="#ffffff" />
                </button>

                <div className={`collapse navbar-collapse ${styles.nav}`} id="navbarCollapse">
                    <ul className="navbar-nav w-100 text-start">
                        {
                            router.asPath !== "/dashboard/user/upload_id"
                                ? <>
                                    <li>
                                        <Link href="#" role="button" data-bs-toggle="modal" data-bs-target="#walletModal">
                                            Wallet
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#" role="button" data-bs-toggle="modal" data-bs-target="#paymentsModal">
                                            Payments
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" role="button" data-bs-toggle="modal" data-bs-target="#statisticsModal">
                                            Statistics
                                        </Link>
                                    </li>
                                </>
                                : <li>
                                    <Link href="/dashboard/user">Dashboard</Link>
                                </li>
                        }
                        <li>
                            <Link href="/dashboard/user/upload_id">Upload ID</Link>
                        </li>
                    </ul>
                    <div>
                        <Link href="#" role="button" onClick={logOut}>
                            <Logout size={32} /> Logout
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
