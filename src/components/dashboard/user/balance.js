import styles from '@/components/dashboard/Dashboard.module.css'
import Loader from '@/components/loader/loader';
import { toCurrency } from '@/components/utils/toCurrency';
import { DirectboxSend, DirectInbox, Folder2 } from 'iconsax-react';
import Link from 'next/link';

export default function DashboardBalance({ user }) {
    if (!user) return <Loader />

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={`my-3 p-2 ${styles.card}`}>
                        <div className="row">
                            <div className="col-12">
                                <h4>Estimated Balance</h4>
                            </div>

                            <div className="col-12 mt-3">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h5 className="fw-bold">{toCurrency(user.dashboard.balance)}</h5>
                                        <h6 className="primary">≈ {toCurrency(user.dashboard.balance)}</h6>
                                        <p>Today&lsquo;s PnL <span className="text-white-50">+ $0.00(0.00%)</span></p>
                                    </div>

                                    <div>
                                        <Link role="button" className="btn btn-sm bg-white-50 text-white me-2" href="#" data-bs-toggle="modal" data-bs-target="#plansModal">
                                            <DirectInbox size={20} variant="Bulk" className="me-2" /> Deposit
                                        </Link>

                                        <Link role="button" className="btn btn-sm bg-white-50 text-white me-2" href="#" data-bs-toggle="modal" data-bs-target="#withdrawModal">
                                            <DirectboxSend size={20} variant="Bulk" className="me-2" /> Withdrawal
                                        </Link>

                                        <Link role="button" className="btn btn-sm bg-white-50 text-white" href="/dashboard/user/transactions">
                                            <Folder2 size={20} variant="Bulk" className="me-2" /> History
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
