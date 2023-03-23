import styles from '@/components/dashboard/Dashboard.module.css'
import DashboardNavbar from '@/components/dashboard/navbar'
import DashboardTransaction from '@/components/dashboard/transaction'
import DashboardMarket from '@/components/dashboard/market'
import DashboardQuick from '@/components/dashboard/quick'
import DashboardGraph from '@/components/dashboard/graph'

export default function Dashboard() {
    return (
        <div className={styles.bg}>
            <DashboardNavbar />
            <div className={styles.divider} />
            <DashboardTransaction />
            <DashboardQuick />
            <DashboardMarket />
            <DashboardGraph/>
        </div>
    )
}
