import styles from '@/components/dashboard/Dashboard.module.css'
import { useState, useEffect } from 'react';
import Loader from '@/components/loader/loader';
import toCurrency from '@/components/utils/toCurrency'
import { Bitcoin, Ethereum, Litecoin, Xrp } from 'iconsax-react'

export default function DashboardMarket() {
    const [btc, setBTC] = useState(null);
    const [ltc, setLTC] = useState(null);
    const [xrp, setXRP] = useState(null);
    const [eth, setETH] = useState(null);

    const urlBtc = 'https://bitcoinaverage-global-bitcoin-index-v1.p.rapidapi.com/indices/global/ticker/BTCUSD';
    const urlEth = 'https://bitcoinaverage-global-bitcoin-index-v1.p.rapidapi.com/indices/global/ticker/ETHUSD';
    const urlLtc = 'https://bitcoinaverage-global-bitcoin-index-v1.p.rapidapi.com/indices/global/ticker/LTCUSD';
    const urlXrp = 'https://bitcoinaverage-global-bitcoin-index-v1.p.rapidapi.com/indices/global/ticker/XRPUSD';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '388ed44c88msh4f3fcabbe8a0277p13efe0jsnb86a7bf6dab5',
            'X-RapidAPI-Host': 'bitcoinaverage-global-bitcoin-index-v1.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch(urlBtc, options)
            .then(res => res.json())
            .then(json => setBTC(json))
        fetch(urlEth, options)
            .then(res => res.json())
            .then(json => setETH(json))
        fetch(urlLtc, options)
            .then(res => res.json())
            .then(json => setLTC(json))
        fetch(urlXrp, options)
            .then(res => res.json())
            .then(json => setXRP(json))
    }, []);

    if (!btc || !eth || !ltc || !xrp) {
        return <Loader />
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={`my-3 p-2 ${styles.card}`}>
                        <div className="row">
                            <div className="col-12">
                                <h4>Top Markets</h4>
                            </div>
                            <div className="col-12">
                                <div className="col-12 table-responsive">
                                    <table className="table text-white table-borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="fw-normal text-muted">Asset</th>
                                                <th scope="col" className="fw-normal text-muted">High</th>
                                                <th scope="col" className="fw-normal text-muted">Low</th>
                                                <th scope="col" className="fw-normal text-muted">Last</th>
                                                <th scope="col" className="fw-normal text-muted">Bid</th>
                                                <th scope="col" className="fw-normal text-muted">Volume</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row"><Bitcoin variant="Bold" size={44} className="primary" /></th>
                                                <td>{toCurrency(btc.high)}</td>
                                                <td>{toCurrency(btc.low)}</td>
                                                <td>{toCurrency(btc.last)}</td>
                                                <td>{toCurrency(btc.bid)}</td>
                                                <td>% {btc.volume_percent.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><Ethereum variant="Bold" size={44} className="primary" /></th>
                                                <td>{toCurrency(eth.high)}</td>
                                                <td>{toCurrency(eth.low)}</td>
                                                <td>{toCurrency(eth.last)}</td>
                                                <td>{toCurrency(eth.bid)}</td>
                                                <td>% {eth.volume_percent.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><Litecoin variant="Bold" size={44} className="primary" /></th>
                                                <td>{toCurrency(ltc.high)}</td>
                                                <td>{toCurrency(ltc.low)}</td>
                                                <td>{toCurrency(ltc.last)}</td>
                                                <td>{toCurrency(ltc.bid)}</td>
                                                <td>% {ltc.volume_percent.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><Xrp variant="Bold" size={44} className="primary" /></th>
                                                <td>{toCurrency(xrp.high)}</td>
                                                <td>{toCurrency(xrp.low)}</td>
                                                <td>{toCurrency(xrp.last)}</td>
                                                <td>{toCurrency(xrp.bid)}</td>
                                                <td>% {xrp.volume_percent.toFixed(2)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
