import Head from 'next/head'
import { Roboto } from 'next/font/google'
import { getWSSchema, getWPSchema, getLBSchema } from '@/components/schema';
import Navbar from '@/components/navigations/navbar'
import Footer from '@/components/navigations/footer'
import { Note } from 'iconsax-react';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })

export default function TermsPage() {
    // page default data
    const pageName = "Tremorcrypt - Terms Of Use";
    const pageDesc = "Tremorcrypt is a leading investment company specializing in crypto investments. Our investment plans offer attractive returns on Bitcoin investments with different options to choose from. Invest in Bitcoin with Tremorcrypt today and reap the rewards.";
    const baseURL = "https://tremorcrypt.com/terms";

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
                "name": "Terms",
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
        "+447733308730",
        "info@tremorcrypt.com",
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
                <meta name="keywords" content="Tremorcrypt, tremorcrypt, investment company, crypto investments, Bitcoin investments, investment plans, attractive returns, selected plan, cryptocurrency, digital currency, crypto finance" />
                <meta name="theme-color" content="#FFFFFF" />
                <link rel="icon" type="image/png" href="/favicon.png?v=1" />
                <meta name="author" content="Tremorcrypt" />
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
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-sm-8">
                            <h1 className="mb-5">
                                <Note size={36} color="#12b772" /> Terms Of Use
                            </h1>

                            <p>
                                By using this app, you agree to the following terms and conditions:
                            </p>

                            <p>
                                <h5>Use of the App</h5>
                                The app is provided for informational and professional financial purposes only.
                                It is not intended to be a substitute for educational use.
                                You are responsible for your own investment decisions.
                            </p>

                            <p>
                                <h5>Registration</h5>
                                In order to use the app, you must register for an account. You agree to provide
                                accurate and complete information during the registration process.
                            </p>

                            <p>
                                <h5>Security</h5>
                                You are responsible for maintaining the confidentiality of your account information
                                and password. You agree to immediately notify us of any unauthorized use of your account.
                            </p>

                            <p>
                                <h5>Investment Risks</h5>
                                Investing in cryptocurrencies carries risks, including the risk of losing all
                                of your invested capital. You acknowledge and accept these risks.
                            </p>

                            <p>
                                <h5>User Conduct</h5>
                                You agree to use the app only for lawful purposes and in compliance with all
                                applicable laws and regulations. You agree not to use the app in a manner that
                                could damage, disable, overburden, or impair any server or network used by the app.
                            </p>

                            <p>
                                <h5>Intellectual Property</h5>
                                The app and its content are protected by copyright and other intellectual property
                                laws. You agree not to copy, modify, distribute, or create derivative works of the
                                app or its content.
                            </p>

                            <p>
                                <h5>Disclaimer of Warranties</h5>
                                The app is provided &quot;as is&quot; without any warranties or representations, express or implied.
                                We do not guarantee the accuracy, completeness, or timeliness of any information provided by the app.
                            </p>

                            <p>
                                <h5>Limitation of Liability</h5>
                                We will not be liable for any damages arising out of or in connection
                                with your use of the app, including but not limited to damages for lost
                                profits, lost data, or business interruption.
                            </p>

                            <p>
                                <h5>Indemnification</h5>
                                You agree to indemnify and hold us harmless from any claims, damages,
                                or expenses arising out of your use of the app.
                            </p>

                            <p>
                                <h5>Modification of Terms</h5>
                                We reserve the right to modify these terms at any time. Your continued
                                use of the app after any such modifications constitutes your acceptance of the new terms.
                            </p>

                            <p>
                                <h5>Termination</h5>
                                We reserve the right to terminate your account and access
                                to the app at any time, without notice or liability.
                            </p>

                            <p>
                                <h5>Governing Law</h5>
                                These terms and conditions are governed by and construed in accordance with the laws
                                of the jurisdiction in which we operate.
                            </p>

                            <p>
                                <h5>Entire Agreement</h5>
                                These terms and conditions constitute the entire agreement between you and
                                us regarding your use of the app.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}
