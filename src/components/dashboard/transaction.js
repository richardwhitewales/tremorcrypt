import styles from '@/components/dashboard/Dashboard.module.css'
import toCurrency from '@/components/utils/toCurrency'

export default function DashboardTransaction({ user }) {
    const getInvestmentPercentage = () => {
        const plan = user.dashboard.investmentPlan;
        const profit = user.dashboard.profit;
        let percentage = "0%";

        if (plan != 0) {
            if (plan == 1) percentage = `${((profit / 5000) * 100).toFixed(1)}%`;
            if (plan == 2) percentage = `${((profit / 8000) * 100).toFixed(1)}%`;
            if (plan == 3) percentage = `${((profit / 12000) * 100).toFixed(1)}%`;
            if (plan == 4) percentage = `${((profit / 20000) * 100).toFixed(1)}%`;
        }

        return percentage;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={`my-3 p-2 ${styles.card}`}>
                        <div className="d-flex py-3 justify-content-around">
                            <div className="text-center">
                                <small className="primary">Total Balance</small>
                                <h4>{toCurrency(user.dashboard.balance)}</h4>
                            </div>
                            <div className="text-center">
                                <small className="text-info">Total Withdraw</small>
                                <h4>{toCurrency(user.dashboard.withdraw)}</h4>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex py-3 justify-content-around">
                            <div className="text-center">
                                <small className="primary">Total Deposit</small>
                                <h4>{toCurrency(user.dashboard.deposit)}</h4>
                            </div>
                            <div className="text-center">
                                <small className="text-warning">Transactions</small>
                                <h4>{toCurrency(user.dashboard.total)}</h4>
                            </div>
                        </div>

                        <div className={styles.profit_circle}>
                            <h1 style={{ fontSize: "26px" }}>{getInvestmentPercentage()}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
