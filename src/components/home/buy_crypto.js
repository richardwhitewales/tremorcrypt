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

                <div className="col-md-3">
                    <div className="m-2 bg_white shadow rounded">
                        <Link href="https://www.coinbase.com/" target="_blank">
                            <img src="/coinbase.png" alt="image" width="100%" height={150} style={{ objectFit: "cover" }} className="rounded" />
                        </Link>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="m-2 bg_white shadow rounded">
                        <Link href="https://blockfi.com/" target="_blank">
                            <img src="/blockfi.png" alt="image" width="100%" height={150} style={{ objectFit: "cover" }} className="rounded" />
                        </Link>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="m-2 bg_white shadow rounded">
                        <Link href="https://zengo.com/" target="_blank">
                            <img src="/zengo.png" alt="image" width="100%" height={150} style={{ objectFit: "cover" }} className="rounded" />
                        </Link>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="m-2 bg_white shadow rounded">
                        <Link href="https://uphold.com/" target="_blank">
                            <img src="/uphold.png" alt="image" width="100%" height={150} style={{ objectFit: "cover" }} className="rounded" />
                        </Link>
                    </div>
                </div>

                <div className="col-12 mt-2 text-center">
                    <h3>Others</h3>
                </div>

                <div className="col-md-2">
                    <div className="m-2">
                        <Link href="https://www.etoro.com/" className="text-danger" target="_blank">
                            Etoro
                        </Link>
                    </div>
                </div>

                <div className="col-md-2">
                    <div className="m-2">
                        <Link href="https://www.pionex.com/" className="text-danger" target="_blank">
                            Pionex
                        </Link>
                    </div>
                </div>

                <div className="col-md-2">
                    <div className="m-2">
                        <Link href="https://www.bitstamp.net/" className="text-danger" target="_blank">
                            Bitstamp
                        </Link>
                    </div>
                </div>

                <div className="col-md-2">
                    <div className="m-2">
                        <Link href="https://swapzone.io/" className="text-danger" target="_blank">
                            Swapzone
                        </Link>
                    </div>
                </div>

                <div className="col-md-2">
                    <div className="m-2">
                        <Link href="https://www.coinsmart.com/" className="text-danger" target="_blank">
                            Coinsmart
                        </Link>
                    </div>
                </div>

                <div className="col-md-2">
                    <div className="m-2">
                        <Link href="https://www.bitcoin.com/" className="text-danger" target="_blank">
                            Bitcoin.com
                        </Link>
                    </div>
                </div>

                <div className="col-md-2">
                    <div className="m-2">
                        <Link href="https://bitcoin.org/" className="text-danger" target="_blank">
                            Bitcoin.org
                        </Link>
                    </div>
                </div>

                <div className="col-md-2">
                    <div className="m-2">
                        <Link href="https://www.gemini.com/" className="text-danger" target="_blank">
                            Gemini
                        </Link>
                    </div>
                </div>

                <div className="col-md-2">
                    <div className="m-2">
                        <Link href="https://www.sofi.com/" className="text-danger" target="_blank">
                            SoFi
                        </Link>
                    </div>
                </div>

                <div className="col-md-2">
                    <div className="m-2">
                        <Link href="https://www.bisq.network/" className="text-danger" target="_blank">
                            Bisq
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
