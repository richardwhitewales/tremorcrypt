import { Crimson_Pro } from 'next/font/google'
import { Clipboard, DollarSquare, PresentionChart } from 'iconsax-react'

const crimson = Crimson_Pro({ subsets: ['latin'] })

export default function Info3() {
    return (
        <div className="bg_primary_15">
            <div className="container">
                <div className="row py-5">
                    <div className="col-12 my-5 text-center">
                        <h1 className={`${crimson.className} display-4`}>Why Choose Us?</h1>
                    </div>

                    <div className="col-md-4">
                        <div className="m-2 p-5 bg_white_50 rounded text-center text-muted">
                            <Clipboard size={100} variant="Bold" />
                            <h3 className="black my-3">Easy Manage</h3>
                            <p>
                                With intuitive navigation, user-friendly interfaces, and streamlined
                                functionality, our app empowers investors to manage their portfolios
                                with ease and efficiency, saving time and reducing the potential for errors or mistakes.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="m-2 p-5 bg_white_50 rounded border_primary text-center text-muted">
                            <DollarSquare size={100} variant="Bold" />
                            <h3 className="black my-3">Get Payment Easily</h3>
                            <p>
                                With a few simple clicks,this feature eliminates the need for complicated paperwork or
                                time-consuming manual processes, providing investors with a hassle-free
                                way to access their earnings quickly and easily.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="m-2 p-5 bg_white_50 rounded text-center text-muted">
                            <PresentionChart size={100} variant="Bold" />
                            <h3 className="black my-3">Monitored Auto-Investment</h3>
                            <p>
                                Designed to automate the investment process and provide investors with peace of mind knowing
                                that their portfolios are being managed with care. Ensuring minimizing risk.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
