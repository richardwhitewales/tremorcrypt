import styles from '@/components/dashboard/Dashboard.module.css'
import { HambergerMenu, Logout } from 'iconsax-react'
import Link from 'next/link'
import { useAuth } from '@/firebase/fire_auth_context';

export default function AdminDashboardNavbar() {
    const { logOut } = useAuth();

    return (
        <nav className="navbar navbar-expand-md bg_black p-2">
            <Link className="navbar-brand" href="/dashboard/admin">
                <img src="/logo_trans.png" width={80} alt="logo" />
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <HambergerMenu size="32" color="#ffffff" />
            </button>

            <div className={`collapse navbar-collapse ${styles.nav}`} id="navbarCollapse">
                <ul className="navbar-nav w-100 text-start">
                    <li>
                        <Link href="#" role="button" data-bs-toggle="modal" data-bs-target="#uploadedIDModal">
                            Uploaded IDs
                        </Link>
                    </li>
                    <li>
                        <Link href="#" role="button" data-bs-toggle="modal" data-bs-target="#adminModal">
                            Admin
                        </Link>
                    </li>
                </ul>
                <div>
                    <Link href="#" role="button" onClick={logOut}>
                        <Logout size={32} /> Logout
                    </Link>
                </div>
            </div>
        </nav>
    )
}
