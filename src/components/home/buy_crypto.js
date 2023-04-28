import Link from 'next/link'
import { Crimson_Pro } from '@next/font/google'

const crimson = Crimson_Pro({ subsets: ['latin'] })

export default function BuyCrypto() {
    return (
        <div className="container">
            <div className="row pb-5">
                <div className="col-12 my-5 text-center">
                    <h1 className={`${crimson.className} display-4`}>You can buy crypto from</h1>
                </div>

                <div className="col-md-3">
                    <div className="m-2 bg_white shadow rounded">
                        <Link href="https://www.binance.com/" target="_blank">
                            <img src="/binance.png" alt="image" width="100%" height={150} style={{ objectFit: "cover" }} className="rounded" />
                        </Link>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="m-2 bg_white shadow rounded">
                        <Link href="https://www.coinmama.com/" target="_blank">
                            <img src="/coinmama.png" alt="image" width="100%" height={150} style={{ objectFit: "cover" }} className="rounded" />
                        </Link>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="m-2 bg_white shadow rounded">
                        <Link href="https://www.moonpay.com/" target="_blank">
                            <img src="/moonpay.png" alt="image" width="100%" height={150} style={{ objectFit: "cover" }} className="rounded" />
                        </Link>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="m-2 bg_white shadow rounded">
                        <Link href="https://www.paxful.com/" target="_blank">
                            <img src="/paxful.png" alt="image" width="100%" height={150} style={{ objectFit: "cover" }} className="rounded" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
