import styles from '@/components/dashboard/Dashboard.module.css'
import { toCurrency } from '@/components/utils/toCurrency'
import { useState, useEffect } from 'react';
import Loader from '@/components/loader/loader';

export default function DashboardTransaction({ user }) {
    const [btc, setBTC] = useState(null);

    const urlBtc = 'https://bitcoinaverage-global-bitcoin-index-v1.p.rapidapi.com/indices/global/ticker/BTCUSD';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '388ed44c88msh4f3fcabbe8a0277p13efe0jsnb86a7bf6dab5',
            'X-RapidAPI-Host': 'bitcoinaverage-global-bitcoin-index-v1.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch(urlBtc, options).then(res => res.json()).then(json => setBTC(json))
    }, []);

    if (!btc) return <Loader />

    const getInvestmentPercentage = () => {
        const plan = user.dashboard.accountType;
        const profit = user.dashboard.deposit.profit;
        let percentage = "0%";

        if (plan.toLowerCase() === "starter") percentage = `${((profit / 500) * 100).toFixed(1)}%`;
        if (plan.toLowerCase() === "basic") percentage = `${((profit / 3000) * 100).toFixed(1)}%`;
        if (plan.toLowerCase() === "standard") percentage = `${((profit / 9000) * 100).toFixed(1)}%`;
        if (plan.toLowerCase() === "core") percentage = `${((profit / 16000) * 100).toFixed(1)}%`;
        if (plan.toLowerCase() === "advanced") percentage = `${((profit / 25000) * 100).toFixed(1)}%`;
        if (plan.toLowerCase() === "premium") percentage = `${((profit / 37000) * 100).toFixed(1)}%`;

        return percentage;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={`my-3 p-2 ${styles.card}`}>
                        <div className="d-flex py-3 justify-content-around">
                            <div className="text-center">
                                <small className="secondary">Total Balance</small>
                                <h4>{toCurrency(user.dashboard.balance)}</h4>
                            </div>
                            <div className="text-center">
                                <small className="text-info">Total Invested</small>
                                <h4>{toCurrency(user.dashboard.deposit.balance ? user.dashboard.deposit.balance : "0")}</h4>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex py-3 justify-content-around">
                            <div className="text-center">
                                <small className="secondary">Total Balance (BTC)</small>
                                <h4>{parseFloat(user.dashboard.balance / btc.high).toFixed(6)}</h4>
                            </div>
                            <div className={`text-center ${user.accountStatus === "ACTIVE" ? "text-success" : user.accountStatus === "UPGRADE" ? "text-warning" : "text-danger"}`}>
                                <small>Status</small>
                                <h4>
                                    {
                                        user.accountStatus === "ACTIVE" ? "Verified"
                                            : user.accountStatus === "UPGRADE"
                                                ? "Upgrade" : "Unverified"
                                    }
                                </h4>
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
