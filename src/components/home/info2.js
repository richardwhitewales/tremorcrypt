import Link from 'next/link'
import styles from '@/components/home/Home.module.css'
import { Crimson_Pro } from 'next/font/google'
import { Bitcoin, Ethereum, Litecoin, Tether } from 'iconsax-react'

const crimson = Crimson_Pro({ subsets: ['latin'] })

export default function Info2() {
    return (
        <div className={styles.bg}>
            <div className="container mt-5">
                <div className="row mb-5 align-items-center rounded-4 bg_grey">
                    <div className="col-6 col-md-3">
                        <div className="m-2 py-5 px-2">
                            <h3 className="p-0 m-0 text-muted">
                                <Bitcoin size={36} /> Bitcoin
                            </h3>
                        </div>
                    </div>

                    <div className="col-6 col-md-3">
                        <div className="m-2 py-5 px-2">
                            <h3 className="p-0 m-0 text-muted">
                                <Ethereum size={36} /> Ethereum
                            </h3>
                        </div>
                    </div>

                    <div className="col-6 col-md-3">
                        <div className="m-2 py-5 px-2">
                            <h3 className="p-0 m-0 text-muted">
                                <Tether size={36} /> Tether
                            </h3>
                        </div>
                    </div>

                    <div className="col-6 col-md-3">
                        <div className="m-2 py-5 px-2">
                            <h3 className="p-0 m-0 text-muted">
                                <Litecoin size={36} /> Litecoin
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col-12 my-5 text-center">
                        <h1 className={`${crimson.className} display-4`}>What Can I Also Do?</h1>
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col-md-6 text-center">
                        <img
                            src="/img1.png"
                            alt="img1"
                            className={styles.img}
                        />
                    </div>

                    <div className="col-md-6">
                        <div className="m-1">
                            <h1 className={`${crimson.className} display-6`}>Exchange your crypto or tokens in a minutes.</h1>

                            <div className="mt-5">
                                <p>
                                    Providing you with the most seamless process you can imagine for exchanging your
                                    crypto or tokens on Quillaruda.
                                </p>

                                <p>
                                    Prioritizing the experience you are going through when you exchange your crypto
                                    is the most important part for us, making it more seamless in every step is a must,
                                    so that we always bring our product as simple and straightforward as possible.
                                </p>

                                <Link href="/auth/signup" className="btn btn-dark my-5">Try it out</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="m-2">
                            <h1 className={`${crimson.className} display-6`}>Tons of features just in one single App.</h1>

                            <div className="mt-5">
                                <p>
                                    Many features that will help your things.
                                </p>

                                <ul className="list-unstyled">
                                    <li><b>✓</b> Widget, personalize your own app with your preference.</li>
                                    <li><b>✓</b> Up-to-date, we make sure that it keep updating.</li>
                                    <li><b>✓</b> 400+ Exchange, cover the most popular crypto and more.</li>
                                </ul>

                                <p>
                                    That&apos;s only few of our core features that we have in the App, to
                                    discover more click the button down below.
                                </p>

                                <Link href="/auth/signup" className="btn btn-dark my-5">Explore more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img
                            src="/img2.png"
                            alt="img1"
                            className={styles.img}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
