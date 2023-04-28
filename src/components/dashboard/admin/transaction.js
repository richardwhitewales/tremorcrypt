import styles from '@/components/dashboard/Dashboard.module.css'
import { toCurrency } from '@/components/utils/toCurrency'
import { useState, useEffect } from 'react';
import Loader from '@/components/loader/loader';
import { db } from '@/firebase/fire_config';
import { getDocs, collection } from 'firebase/firestore';

export default function AdminDashboardTransaction() {
    const [btc, setBTC] = useState(null);
    const [totalBalance, setTotalBalance] = useState(0);
    const [fundRate, setFundRate] = useState(0);

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

    useEffect(() => {
        const getUsersData = async () => {
            const usersSnapshot = await getDocs(collection(db, 'users'));
            let allDeposit = [];
            let allWithdraw = [];
            let dTotal = 0;
            let wTotal = 0;

            usersSnapshot.forEach((doc) => {
                const dashboard = doc.data().dashboard;
                const deposit = parseInt(dashboard.deposit.balance);
                const withdraw = parseInt(dashboard.withdraw.balance);
                allDeposit.push(deposit);
                allWithdraw.push(withdraw);
            });

            dTotal = allDeposit.reduce((acc, curr) => acc + curr, 0);
            wTotal = allWithdraw.reduce((acc, curr) => acc + curr, 0);

            setFundRate((dTotal / 3) / (wTotal / 3))
            setTotalBalance(dTotal + wTotal);
        };
        getUsersData();
    }, []);

    if (!btc) return <Loader />

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={`my-3 p-2 ${styles.card}`}>
                        <div className="d-flex py-3 justify-content-around">
                            <div className="text-center">
                                <small className="secondary">Transactions</small>
                                <h5>{toCurrency(totalBalance)}</h5>
                            </div>
                            <div className="text-center">
                                <small className="text-info">Fund Rate</small>
                                <h5>{fundRate.toFixed(2)}%</h5>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex py-3 justify-content-around">
                            <div className="text-center">
                                <small className="secondary">Last (BTC)</small>
                                <h5>{toCurrency(btc.high)}</h5>
                            </div>
                            <div className="text-success">
                                <small>Status</small>
                                <h4>Verified</h4>
                            </div>
                        </div>

                        <div className={styles.profit_circle}>
                            <h1 style={{ fontSize: "20px" }}>Harpy</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
