import styles from '@/components/dashboard/Dashboard.module.css'
import toCurrency from '@/components/utils/toCurrency'
import { Bitcoin, Ethereum, Litecoin, Xrp } from 'iconsax-react'

export default function DashboardQuick() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className={`my-3 p-2 ${styles.card}`}>
                        <div className="row">
                            <div className="col-12">
                                <h5>Quick payments</h5>
                                <hr />
                            </div>
                            <div className="col-12">
                                <div className="">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className={`my-3 p-2 ${styles.card}`}>
                        <div className="row">
                            <div className="col-12">
                                <h5>Quick update</h5>
                                <hr />
                            </div>
                            <div className="col-12">
                                <div className="">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
