import styles from '@/components/dashboard/Dashboard.module.css'
import DashboardNavbar from '@/components/dashboard/navbar'
import DashboardTransaction from '@/components/dashboard/transaction'
import DashboardMarket from '@/components/dashboard/market'
import DashboardQuick from '@/components/dashboard/quick'
import DashboardGraph from '@/components/dashboard/graph'
import WithdrawModal from '@/components/dashboard/modals/withdraw_modal'
import PlansModal from '@/components/dashboard/modals/plans_modal'
import PaymentsModal from '@/components/dashboard/modals/payments_modal'
import WalletModal from '@/components/dashboard/modals/wallet_modal'
import StatisticsModal from '@/components/dashboard/modals/statistics_modal'

export default function Dashboard() {
    return (
        <div className={styles.bg}>
            <DashboardNavbar />
            <div className={styles.divider} />
            <DashboardTransaction />
            <DashboardQuick />
            <DashboardMarket />
            <DashboardGraph />

            <StatisticsModal />
            <WalletModal user={{}} />
            <PaymentsModal user={{}} />
            <WithdrawModal user={{}} />
            <PlansModal user={{}} />
        </div>
    )
}
