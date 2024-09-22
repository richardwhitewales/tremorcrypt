import styles from '@/components/dashboard/Dashboard.module.css'
import DashboardNavbar from '@/components/dashboard/user/navbar'
import DashboardSidebar from '@/components/dashboard/user/sidebar'
import DashboardTransactions from '@/components/dashboard/user/transactions'
import DashboardVerify from '@/components/dashboard/user/verify'
import DashboardBalance from '@/components/dashboard/user/balance'
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
import { useMediaQuery } from "@chakra-ui/react";
import { CloseSquare, HambergerMenu, Trash } from 'iconsax-react'
import { toCurrency } from '@/components/utils/toCurrency'
import AccountModal from './modals/account_modal'
import CurrencyModal from './modals/currency_modal'

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const { authUser } = useAuth();
    const [showMenu, setShowMenu] = useState(false);
    const [isMobile] = useMediaQuery("(max-width: 1024px)");

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

            <div className={isMobile ? (showMenu && "d-flex") : "d-flex"}>
                {isMobile ? (showMenu && <DashboardSidebar />) : <DashboardSidebar />}

                <div className={isMobile ? (showMenu && "px-5") : "px-5"}>
                    <h5 className="text-white mt-3">Welcome, <span className="primary mt-3">{user.firstName} {user.lastName}</span></h5>

                    {isMobile && (
                        <div>
                            {showMenu ?
                                <CloseSquare size={32} className="text-danger pe-active" variant="Bold" onClick={() => setShowMenu(false)} /> :
                                <div className="d-flex w-100 justify-content-between mt-4 ps-2">
                                    <div className="d-flex justify-content-start pe-active">
                                        <HambergerMenu size={28} className="me-2 text-white" onClick={() => setShowMenu(true)} />
                                        <h5 className="text-white">Menu</h5>
                                    </div>

                                    <h5 className="me-3 primary">Transactions</h5>
                                </div>
                            }
                        </div>
                    )}

                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className={`my-3 p-2 ${styles.card}`}>
                                    <div className="row">
                                        <div className="col-12">
                                            <h4>History for <span className="primary">{user.firstName} {user.lastName}</span></h4>
                                        </div>

                                        <div className="col-12 mt-3">
                                            {user.dashboard.transfers ?
                                                <div className="table-responsive">
                                                    <table className="table text-white table-borderless">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col" className="fw-normal">Date / Time</th>
                                                                <th scope="col" className="fw-normal">Credit / Debit</th>
                                                                <th scope="col" className="fw-normal">Amount</th>
                                                                <th scope="col" className="fw-normal">Available Balance</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {user.dashboard.transfers.sort((a, b) => b.createdOn.seconds - a.createdOn.seconds).map((transfer, index) => (
                                                                <tr key={index}>
                                                                    <td>{transfer.createdOn.toDate().toLocaleString()}</td>
                                                                    <td>
                                                                        {transfer.type === "debit" ?
                                                                            <span className="alert alert-danger rounded-pill px-4 py-0">
                                                                                Debit
                                                                            </span>
                                                                            :
                                                                            <span className="alert alert-success rounded-pill px-4 py-0">
                                                                                Credit
                                                                            </span>
                                                                        }
                                                                    </td>
                                                                    <td>{toCurrency(transfer.amount, 2, user.currency)}</td>
                                                                    <td>{toCurrency(transfer.balance, 2, user.currency)}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div> : <Trash size={50} />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <StatisticsModal />
                    <WalletModal />
                    <PaymentsModal />
                    <WithdrawModal user={user} />
                    <OtherPaymentMethodModal />
                    <PlansModal user={user} />
                    <AccountModal user={user} />
                    <CurrencyModal user={user} />
                </div>
            </div>
        </div>
    )
}
