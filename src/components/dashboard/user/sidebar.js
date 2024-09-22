import styles from '@/components/dashboard/Dashboard.module.css'
import { useAuth } from '@/firebase/fire_auth_context';
import { DirectboxSend, DirectInbox, DollarSquare, Folder2, Home2, Logout, UserOctagon } from 'iconsax-react'
import Link from 'next/link'
import { useRouter } from "next/router";

export default function DashboardNavbar() {
    const router = useRouter();
    const { logOut } = useAuth();

    return (
        <ul className={styles.sidebar}>
            <li className="mb-5">
                <Link
                    className={router.pathname == "/dashboard/user" ? styles.sidebar_path : styles.sidebar_none_path}
                    href="/dashboard/user"
                >
                    <Home2 className="me-2" variant="Bulk" size={18} /> Dashboard
                </Link>
            </li>

            <li className="mb-5">
                <Link
                    className={router.pathname == "/dashboard/user/assets" ? styles.sidebar_path : styles.sidebar_none_path}
                    href="/dashboard/user/assets"
                >
                    <DollarSquare className="me-2" variant="Bulk" size={18} /> Assets
                </Link>
            </li>

            <li className="mb-5">
                <Link
                    className={router.pathname == "/dashboard/user/transactions" ? styles.sidebar_path : styles.sidebar_none_path}
                    href="/dashboard/user/transactions"
                >
                    <Folder2 className="me-2" variant="Bulk" size={18} /> Transactions
                </Link>
            </li>

            <li className="mb-5">
                <Link
                    className={styles.sidebar_none_path}
                    href="#" data-bs-toggle="modal" data-bs-target="#plansModal"
                >
                    <DirectInbox className="me-2" variant="Bulk" size={18} /> Deposit
                </Link>
            </li>

            <li className="mb-5">
                <Link
                    className={styles.sidebar_none_path}
                    href="#" data-bs-toggle="modal" data-bs-target="#withdrawModal"
                >
                    <DirectboxSend className="me-2" variant="Bulk" size={18} /> Withdrawal
                </Link>
            </li>

            <li className="mb-5">
                <Link
                    className={styles.sidebar_none_path}
                    href="#" data-bs-toggle="modal" data-bs-target="#accountModal"
                >
                    <UserOctagon className="me-2" variant="Bulk" size={18} /> Account
                </Link>
            </li>

            <li className="mb-5">
                <Link
                    className={styles.sidebar_none_path}
                    href="#" onClick={logOut}
                >
                    <Logout className="me-2 text-danger" variant="Bulk" size={18} /> Log Out
                </Link>
            </li>
        </ul>
    )
}
