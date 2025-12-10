import Head from 'next/head'
import { Roboto } from 'next/font/google'
import { getWSSchema, getWPSchema, getLBSchema } from '@/components/schema';
import Navbar from '@/components/navigations/navbar'
import Footer from '@/components/navigations/footer'
import { ShieldSecurity } from 'iconsax-react';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })

export default function PrivacyPage() {
    // page default data
    const pageName = "Tremorcrypt - Privacy Policy";
    const pageDesc = "Tremorcrypt is a leading investment company specializing in crypto investments. Our investment plans offer attractive returns on Bitcoin investments with different options to choose from. Invest in Bitcoin with Tremorcrypt today and reap the rewards.";
    const baseURL = "https://tremorcrypt.com/privacy";

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
                "name": "Privacy",
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
                                <ShieldSecurity size={36} color="#12b772" /> Privacy Policy
                            </h1>

                            <p>
                                Thank you for using our investment app. We value your privacy and are
                                committed to protecting your personal information. This Privacy Policy
                                outlines how we collect, use, and disclose your personal information,
                                and your rights and choices regarding your personal information.
                            </p>

                            <p>
                                <h5>Information We Collect</h5>
                                We collect the following types of personal information:
                                <br />

                                <ul>
                                    <li>Contact information, such as your name, email address, and phone number</li>
                                    <li>Financial information, such as your bank account or credit card information</li>
                                    <li>Investment information, such as your investment goals, preferences, and transaction history</li>
                                    <li>Device information, such as your device type, operating system, and browser type</li>
                                </ul>
                            </p>

                            <p>
                                <h5>How We Use Your Information</h5>
                                We use your personal information to provide and improve our services, including:
                                <br />

                                <ul>
                                    <li>Managing and processing your investments</li>
                                    <li>Communicating with you about your investments and account</li>
                                    <li>Providing customer support</li>
                                    <li>Conducting market research and analysis</li>
                                    <li>Complying with legal and regulatory requirements</li>
                                </ul>
                            </p>

                            <p>
                                We may also use your personal information for marketing purposes, such as sending you
                                promotional offers or newsletters. You can opt-out of receiving marketing communications
                                by following the unsubscribe instructions in the communication or contacting us at the
                                email address provided below.
                            </p>

                            <p>
                                <h5>Information Sharing and Disclosure</h5>
                                We may share your personal information with third-party service providers who assist
                                us in providing our services, such as payment processors, custodians, or analytics
                                providers. We require our service providers to use your personal information only for
                                the purpose of providing services to us and to comply with applicable laws and regulations.
                                <br />
                                We may also disclose your personal information if required by law or if we believe in
                                good faith that such disclosure is necessary to protect our rights or property, protect
                                your safety or the safety of others, investigate fraud, or respond to a government request.
                            </p>

                            <p>
                                <h5>Data Retention</h5>
                                We retain your personal information for as long as necessary to provide our services and as
                                required by law. We may also retain certain information for legitimate business purposes,
                                such as record-keeping or dispute resolution.
                            </p>

                            <p>
                                <h5>Your Rights and Choices</h5>
                                You have certain rights and choices regarding your personal information, including:
                                <br />

                                <ul>
                                    <li>Accessing and correcting your personal information</li>
                                    <li>Deleting your personal information</li>
                                    <li>Objecting to the processing of your personal information</li>
                                    <li>Restricting the processing of your personal information</li>
                                    <li>Withdrawing your consent to the processing of your personal information</li>
                                    <li>Requesting the transfer of your personal information</li>
                                </ul>

                                <br />
                                To exercise your rights and choices, please contact us at the email address provided below.
                            </p>

                            <p>
                                <h5>Security</h5>
                                We use reasonable administrative, technical, and physical safeguards to protect your personal
                                information from unauthorized access, use, or disclosure. However, no method of transmission
                                over the internet or method of electronic storage is 100% secure, and we cannot guarantee the
                                absolute security of your personal information.
                            </p>

                            <p>
                                <h5>Updates to this Privacy Policy</h5>
                                We may update this Privacy Policy from time to time. We will notify you of any material
                                changes by posting the updated Privacy Policy on our website or app and providing notice
                                through the app or by email.
                            </p>

                            <p>
                                <h5>Contact Us</h5>
                                If you have any questions or concerns about this Privacy Policy or our privacy practices,
                                please contact us at info@tremorcrypt.com
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}
