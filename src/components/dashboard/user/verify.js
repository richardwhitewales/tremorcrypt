import styles from '@/components/dashboard/Dashboard.module.css'
import Loader from '@/components/loader/loader';
import { toCurrency } from '@/components/utils/toCurrency';
import { Ticket2, Verify } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function DashboardBalance({ user }) {
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
    
    if (!user) return <Loader />

    function verificationBox() {
        if (user.accountStatus === "ACTIVE") {
            return (
                <div className="col-md-6">
                    <div className={`my-3 p-2 ${styles.card}`} style={{ background: "#16F19610", border: "3px solid #16F196" }}>
                        <div className="row">
                            <div className="col-8">
                                <h4>Identity Verification approved you can now <span className="primary">Deposit, Withdrawal</span> and more</h4>
                                <br />
                                <Link disabled className="btn btn-sm btn_primary text-dark" href="#">
                                    <Verify size={20} variant="Bulk" className="me-2" /> Verify
                                </Link>
                            </div>

                            <div className="col-2">
                                <Image src="https://bin.bnbstatic.com/static/images/mainuc/dashboard/408x408_purple.gif" width={118} height={118} />
                            </div>
                        </div>
                    </div>

                </div>
            )
        } else {
            return <div className="col-md-6">
                <div className={`my-3 p-2 ${styles.card}`} style={{ background: "#c44a5410", border: "3px solid #c44a54" }}>
                    <div className="row">
                        <div className="col-8">
                            <h4>Verify Your Identity to Get access to <span style={{ color: "#c44a54" }}>Deposit, Withdrawal</span> and more</h4>
                            <br />
                            <Link className="btn btn-sm text-white" style={{ background: "#c44a54" }} href="/dashboard/user/upload_id">
                                <Verify size={20} variant="Bulk" className="me-2" /> Verify
                            </Link>
                        </div>

                        <div className="col-2">
                            <Image src="https://bin.bnbstatic.com/static/images/mainuc/dashboard/408x408_purple.gif" width={118} height={118} />
                        </div>
                    </div>
                </div>
            </div>
        }
    }

    return (
        <div className="container">
            <div className="row">
                {verificationBox()}

                <div className="col-md-3">
                    <Link href="#" className={`text-decoration-none text-white my-3 p-2 ${styles.card}`} data-bs-toggle="modal" data-bs-target="#plansModal">
                        <h4>Deposit <span className="primary">{toCurrency("10", 2, user.currency)}</span></h4>

                        <div className="mt-3">
                            <Ticket2 variant="Bulk" className="primary me-2" />
                            {toCurrency("10", 2, user.currency)}
                        </div>

                        <div className="mt-5" />
                    </Link>
                </div>

                <div className="col-md-3">
                    <Link href="#" className={`text-decoration-none text-white my-3 p-2 ${styles.card}`} data-bs-toggle="modal" data-bs-target="#withdrawModal">
                        <h4>Withdraw <span className="primary">{toCurrency("10", 2, user.currency)}</span></h4>

                        <div className="mt-3">
                            <Ticket2 variant="Bulk" className="primary me-2" />
                            {toCurrency("10", 2, user.currency)}
                        </div>

                        <div className="mt-5" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
