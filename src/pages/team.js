import Head from 'next/head'
import { Roboto } from 'next/font/google'
import { getWSSchema, getWPSchema, getLBSchema } from '@/components/schema';
import Navbar from '@/components/navigations/navbar'
import Footer from '@/components/navigations/footer'
import { People } from 'iconsax-react';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })

export default function TeamPage() {
    // page default data
    const pageName = "Harpy Crypto - Our Team";
    const pageDesc = "Harpy Crypto is a leading investment company specializing in crypto investments. Our investment plans offer attractive returns on Bitcoin investments with different options to choose from. Invest in Bitcoin with Harpy Crypto today and reap the rewards.";
    const baseURL = "https://harpycrypto.com/team";

    // web site schema
    const wSSchema = getWSSchema(baseURL);

    // web page schema
    const wPSchema = getWPSchema(
        pageName,
        pageDesc,
        baseURL,
        [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Team",
                "item": baseURL
            }
        ]
    );

    // local business schema
    const lBSchema = getLBSchema(
        pageName,
        {
            streetAddress: "George St, Chicago  60618, USA",
            addressLocality: "George St",
            addressRegion: "Chicago",
            postalCode: " 60618",
            addressCountry: "USA"
        },
        "+1-415-209-5796",
        "info@harpycrypto.com",
        baseURL,
        `${baseURL}/logo.png`,
        "Cash, Credit Card, Transfer",
        "NGN, USD, EURO, BTC",
        "Mo-Fr 09:00-17:00",
        {
            latitude: "41.8323026",
            longitude: "-88.3062687"
        }
    );

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content={pageDesc} />
                <meta name="keywords" content="Harpy Crypto, Harpycrypto, investment company, crypto investments, Bitcoin investments, investment plans, attractive returns, selected plan, cryptocurrency, digital currency, crypto finance" />
                <meta name="theme-color" content="#FFFFFF" />
                <link rel="icon" type="image/png" href="/favicon.png?v=1" />
                <meta name="author" content="Harpy Crypto" />
                <title>{pageName}</title>

                <meta property="og:title" content={pageName} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/favicon.png?v=1" />
                <meta property="og:image:width" content="1277" />
                <meta property="og:image:height" content="473" />
                <meta property="og:url" content={baseURL} />
                <meta property="og:description" content={pageDesc} />
                <meta property="og:site_name" content={pageName} />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wSSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wPSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lBSchema) }} />
            </Head>

            <main className={roboto.className}>
                <Navbar />
                <div className="container my-5 ">
                    <div className="row justify-content-center">
                        <div className="col-sm-10">
                            <h1 className="mb-5">
                                <People size={36} color="#12b772" /> Our Team
                            </h1>

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="m-2 mb-5 px-2 pt-5 pb-3 bg_white shadow rounded text-center text-muted">
                                        <img src="/team1.png" alt="customer" width={150} height={150} style={{ borderRadius: "50%", objectFit: "cover" }} />
                                        <h4 className="black my-3 fw-bold">John Smith.</h4>
                                        <h6>Chief Investment Officer</h6>

                                        <hr />
                                        <p>
                                            Responsible for overseeing all investment activities at Harpy Crypto,
                                            including market analysis, investment strategy, and portfolio management.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="m-2 mb-5 px-2 pt-5 pb-3 bg_white shadow rounded text-center text-muted">
                                        <img src="/team2.png" alt="customer" width={150} height={150} style={{ borderRadius: "50%", objectFit: "cover" }} />
                                        <h4 className="black my-3 fw-bold">Sarah Lee.</h4>
                                        <h6>Senior Cryptocurrency Analyst</h6>

                                        <hr />
                                        <p>
                                            Conducts in-depth research and analysis of various cryptocurrencies and
                                            their potential for investment. Provides insights and recommendations to the investment team.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="m-2 mb-5 px-2 pt-5 pb-3 bg_white shadow rounded text-center text-muted">
                                        <img src="/team3.png" alt="customer" width={150} height={150} style={{ borderRadius: "50%", objectFit: "cover" }} />
                                        <h4 className="black my-3 fw-bold">Michael Chen.</h4>
                                        <h6>Investment Associate</h6>

                                        <hr />
                                        <p>
                                            Assists in the management of investment portfolios, including monitoring
                                            performance and making investment decisions based on market analysis.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="m-2 mb-5 px-2 pt-5 pb-3 bg_white shadow rounded text-center text-muted">
                                        <img src="/team4.png" alt="customer" width={150} height={150} style={{ borderRadius: "50%", objectFit: "cover" }} />
                                        <h4 className="black my-3 fw-bold">Emily Wong.</h4>
                                        <h6>Customer Support Specialist</h6>

                                        <hr />
                                        <p>
                                            Provides support to Harpy Crypto customers, addressing inquiries and concerns related
                                            to their investments and accounts. Assists in maintaining positive customer relationships
                                            and promoting customer satisfaction.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="m-2 mb-5 px-2 pt-5 pb-3 bg_white shadow rounded text-center text-muted">
                                        <img src="/team5.png" alt="customer" width={150} height={150} style={{ borderRadius: "50%", objectFit: "cover" }} />
                                        <h4 className="black my-3 fw-bold">David Rodriguez.</h4>
                                        <h6>Compliance Officer</h6>

                                        <hr />
                                        <p>
                                            Ensures that Harpy Crypto is operating in compliance with all legal and regulatory
                                            requirements related to investment management and cryptocurrency. Develops and implements
                                            compliance policies and procedures.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="m-2 mb-5 px-2 pt-5 pb-3 bg_white shadow rounded text-center text-muted">
                                        <img src="/team6.png" alt="customer" width={150} height={150} style={{ borderRadius: "50%", objectFit: "cover" }} />
                                        <h4 className="black my-3 fw-bold">Samantha Kim.</h4>
                                        <h6>Marketing Manager</h6>

                                        <hr />
                                        <p>
                                            Oversees the development and execution of marketing campaigns and initiatives to promote
                                            Harpy Crypto and its investment services. Works closely with the investment and customer
                                            support teams to ensure consistency in messaging and branding.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}
