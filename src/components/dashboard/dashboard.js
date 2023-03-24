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
import { useAuth } from '@/firebase/fire_auth_context';
import NeedAuth from '@/components/restrictions/need_auth';
import Loader from '@/components/loader/loader';
import { db } from '@/firebase/fire_config';
import { doc, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const { authUser } = useAuth();

    useEffect(() => {
        if (authUser) {
            const userRef = doc(db, "users", authUser.email);

            const unsubscribe = onSnapshot(userRef, (snapshot) => {
                if (snapshot.exists()) {
                    setUser(snapshot.data());
                } else {
                    toast.error("User data not found");
                }
            });

            return () => { unsubscribe(); };
        }
    }, [authUser]);

    if (!authUser) return <NeedAuth fullHeight={true} />

    if (!user) return <Loader fullHeight={true} />

    return (
        <div className={styles.bg}>
            <DashboardNavbar />
            <div className={styles.divider} />
            <DashboardTransaction />
            <DashboardQuick />
            <DashboardMarket />
            <DashboardGraph />

            <StatisticsModal />
            <WalletModal user={user} />
            <PaymentsModal user={user} />
            <WithdrawModal user={user} />
            <PlansModal user={user} />
        </div>
    )
}
