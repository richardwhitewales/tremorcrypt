import styles from '@/components/dashboard/Dashboard.module.css'
import DashboardNavbar from '@/components/dashboard/user/navbar'
import DashboardTransaction from '@/components/dashboard/user/transaction'
import DashboardMarket from '@/components/dashboard/user/market'
import DashboardQuick from '@/components/dashboard/user/quick'
import DashboardGraph from '@/components/dashboard/user/graph'
import WithdrawModal from '@/components/dashboard/user/modals/withdraw_modal'
import PlansModal from '@/components/dashboard/user/modals/plans_modal'
import PaymentsModal from '@/components/dashboard/user/modals/payments_modal'
import WalletModal from '@/components/dashboard/user/modals/wallet_modal'
import StatisticsModal from '@/components/dashboard/user/modals/statistics_modal'
import { useAuth } from '@/firebase/fire_auth_context';
import NeedAuth from '@/components/restrictions/need_auth';
import Loader from '@/components/loader/loader';
import { db } from '@/firebase/fire_config';
import { doc, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import OtherPaymentMethodModal from '@/components/dashboard/user/modals/other_payment_modal'

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

    if (!user) return <Loader fullHeight={true} bg="bg_black" />

    return (
        <div className={styles.bg}>
            <DashboardNavbar />
            <div className={styles.divider} />
            <DashboardTransaction user={user} />
            <DashboardQuick user={user} />
            <DashboardMarket />
            <DashboardGraph />

            <StatisticsModal />
            <WalletModal />
            <PaymentsModal />
            <WithdrawModal user={user} />
            <OtherPaymentMethodModal />
            <PlansModal user={user} />
        </div>
    )
}
