import { Crimson_Pro } from 'next/font/google'

const crimson = Crimson_Pro({ subsets: ['latin'] })

export default function Info5() {
    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-12 my-5 text-center">
                    <h1 className={`${crimson.className} display-4`}>What Our Customers Have To Say</h1>
                </div>

                <div className="col-md-4">
                    <div className="m-2 px-3 pt-5 pb-3 bg_white shadow rounded text-center text-muted">
                        <img src="/cus1.png" alt="customer" width={100} height={100} style={{borderRadius: "50%", objectFit:"cover"}} />
                        <h4 className="black my-3 fw-bold">Sarah T.</h4>

                        <hr />
                        <p>
                            I have been using this app for several months, and I am impressed with its ease
                            of use and functionality. The monitored auto-investment feature has helped me to
                            achieve better returns on my investments, and the get payment easily feature
                            makes it simple to access my earnings. Highly recommend!
                        </p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="m-2 px-3 pt-5 pb-3 bg_primary_15 shadow border_primary rounded text-center text-muted position-relative">
                        <img src="/cus2.png" alt="customer" width={100} height={100} style={{borderRadius: "50%", objectFit:"cover"}} />
                        <h4 className="black my-3 fw-bold">John P.</h4>

                        <hr />
                        <p>
                            As a first-time investor, I was intimidated by the process, but this
                            app made it easy for me to get started. The user-friendly interface
                            and helpful tools, such as investment targets, have given me confidence
                            in my decisions. Plus, the customer support team has been responsive
                            and helpful whenever I&apos;ve had questions.
                        </p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="m-2 px-3 pt-5 pb-3 bg_white shadow rounded text-center text-muted">
                        <img src="/cus3.png" alt="customer" width={100} height={100} style={{borderRadius: "50%", objectFit:"cover"}} />
                        <h4 className="black my-3 fw-bold">Lisa M.</h4>

                        <hr />
                        <p>
                            I&apos;ve been using this app for a while now and have found it to be an excellent
                            investment tool. The market research and plan tailoring features have helped
                            me to make informed decisions and achieve my financial goals. I appreciate
                            the app&apos;s commitment to security and transparency, and I feel confident in
                            recommending it to others.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
