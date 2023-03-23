import styles from '@/components/home/Home.module.css'
import Link from 'next/link'
import { Crimson_Pro } from 'next/font/google'

const crimson = Crimson_Pro({ subsets: ['latin'] })

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className="row align-items-center">
                <div className="col-md-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className={`${crimson.className} display-3 fw-bold black`}>
                                    Invest in your future<span className="primary">...</span>
                                </h1>
                                <p className="display-6 text-muted">
                                    with the leading investment company for attractive Bitcoin returns.
                                </p>
                                <Link href="/auth/signup" className="btn mt-4 mb-5 btn_secondary">
                                    Start investing now!
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-8 text-end">
                    <img src="/hero.png" alt="hero" />
                </div>
            </div>
        </div>
    )
}
