import styles from '@/components/dashboard/Dashboard.module.css'
import { HambergerMenu, UserOctagon } from 'iconsax-react'
import Link from 'next/link'

export default function Dashboard() {
    return (
        <div className={styles.bg}>
            <nav className="navbar navbar-expand-md fixed-top p-2">
                <Link className="navbar-brand" href="/">
                    <img src="/logo_2.png" width={80} alt="logo" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <HambergerMenu size="32" color="#12b772" />
                </button>

                <div className={`collapse navbar-collapse ${styles.nav}`} id="navbarCollapse">
                    <ul className="navbar-nav w-100 text-start">
                        <li>
                            <Link href="#">Wallet</Link>
                        </li>
                        <li>
                            <Link href="#">Payments</Link>
                        </li>
                        <li>
                            <Link href="#">Statistics</Link>
                        </li>
                    </ul>
                    <div>
                        <Link href="#">
                            <UserOctagon size={32} /> Profile
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
