import { Crimson_Pro } from 'next/font/google'
import { ChartCircle, Gift, Note, SearchNormal } from 'iconsax-react'

const crimson = Crimson_Pro({ subsets: ['latin'] })

export default function Info1() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 my-5 text-center">
                    <h1 className={`${crimson.className} display-4`}>Our Resposibility</h1>
                </div>

                <div className="col-md-3">
                    <div className="m-2 p-2 rounded bg_primary_15 border_primary shadow">
                        <SearchNormal size={36} color="#12b772" />

                        <h4 className="my-3">Research</h4>

                        <span className="text-muted">
                            Conducting thorough market research is crucial for identifying
                            potential opportunities and risks, and it is our responsibility
                            as investors to stay informed and up-to-date on market trends and events.
                        </span>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="m-2 p-2 rounded">
                        <Note size={36} color="#12b772" />

                        <h4 className="my-3">Tailoring</h4>

                        <span className="text-muted">
                            Tailoring investment plans to align with our investment goals, risk
                            tolerance, and time horizon is essential for achieving our financial
                            objectives and maximizing returns.
                        </span>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="m-2 p-2 rounded">
                        <ChartCircle size={36} color="#12b772" />

                        <h4 className="my-3">Targets</h4>

                        <span className="text-muted">
                            Setting specific investment targets helps us track our progress, stay focused
                            on our objectives, and make informed decisions about when to buy, sell, or hold assets.
                        </span>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="m-2 p-2 rounded bg_primary_15 border_primary shadow">
                        <Gift size={36} color="#12b772" />

                        <h4 className="my-3">Bonuses</h4>

                        <span className="text-muted">
                            Careful consideration of bonuses allocation based on performance, contribution,
                            and long-term value creation is critical for ensuring fair and equitable
                            rewards and incentivizing continued success.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
