import styles from '@/components/dashboard/Dashboard.module.css'

export default function DashboardTransaction() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={`my-3 p-2 ${styles.card}`}>
                        <div className="d-flex py-3 justify-content-around">
                            <div className="text-center">
                                <small className="primary">Total Balance</small>
                                <h4>$2,237.89</h4>
                            </div>
                            <div className="text-center">
                                <small className="text-info">Total Profit</small>
                                <h4>$789.09</h4>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex py-3 justify-content-around">
                            <div className="text-center">
                                <small className="primary">Total Deposit</small>
                                <h4>$8,098.67</h4>
                            </div>
                            <div className="text-center">
                                <small className="text-warning">Transactions</small>
                                <h4>$67,782.92</h4>
                            </div>
                        </div>

                        <div className={styles.profit_circle}>
                            <h1>100%</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
