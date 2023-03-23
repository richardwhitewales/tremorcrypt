import styles from '@/components/dashboard/Dashboard.module.css'
import Link from 'next/link'
import DashboardNavbar from '@/components/dashboard/navbar'
import DashboardTransaction from '@/components/dashboard/transaction'
import DashboardMarket from '@/components/dashboard/market'

export default function Dashboard() {
    return (
        <div className={styles.bg}>
            <DashboardNavbar />
            <div className={styles.divider} />
            <DashboardTransaction />
            <DashboardMarket />
        </div>
    )
}
