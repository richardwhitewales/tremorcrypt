import Head from 'next/head'
import { Roboto } from 'next/font/google'
import { getWSSchema, getWPSchema, getLBSchema } from '@/components/schema';
import Navbar from '@/components/navigations/navbar'
import Footer from '@/components/navigations/footer'
import { Box, Call, DirectInbox, Location } from 'iconsax-react';
import Link from 'next/link';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })

export default function ContactPage() {
    // page default data
    const pageName = "Harpy Cryto - Contact Us";
    const pageDesc = "Harpy Cryto is a leading investment company specializing in crypto investments. Our investment plans offer attractive returns on Bitcoin investments with different options to choose from. Invest in Bitcoin with Harpy Cryto today and reap the rewards.";
    const baseURL = "https://harpycryto.com/contact";

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
                "name": "Contact",
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
        "+1-310-715-8987",
        "info@harpycryto.com",
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
                <meta name="keywords" content="Harpy Cryto, harpycryto, investment company, crypto investments, Bitcoin investments, investment plans, attractive returns, selected plan, cryptocurrency, digital currency, crypto finance" />
                <meta name="theme-color" content="#FFFFFF" />
                <link rel="icon" type="image/png" href="/favicon.png?v=1" />
                <meta name="author" content="Harpy Cryto" />
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
                                <Box size={36} color="#12b772" /> Contact Us
                            </h1>

                            <div className="row">
                                <div className="col-sm-6 mt-4">
                                    <div className="m-2">
                                        <div className="d-flex justify-content-start">
                                            <Location />
                                            <div className="d-flex flex-column mx-2">
                                                <h5>OFFICE ADDRESS:</h5>
                                                <p>
                                                    George St, Chicago  60618, USA
                                                </p>
                                            </div>
                                        </div>

                                        <div className="d-flex my-5 justify-content-start">
                                            <Call />

                                            <div className="d-flex flex-column mx-2">
                                                <h5>PHONE:</h5>
                                                <p>
                                                    +1-310-715-8987
                                                </p>
                                            </div>
                                        </div>

                                        <div className="d-flex my-5 justify-content-start">
                                            <DirectInbox />

                                            <div className="d-flex flex-column mx-2">
                                                <h5>EMAIL:</h5>
                                                <p>info@harpycryto.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 mt-4">
                                    <div className="m-2 text-center">
                                        <img src="/contact.png" className="rounded" alt="about" width="100%" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-4">
                            <div className="m-2">
                                <div className="mb-3">
                                    <input type="text" className="form-control p-3" id="fullName" placeholder="John Doe" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control p-3" id="emailAddr" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control p-3" id="message" rows="4"></textarea>
                                </div>

                                <Link href="#" className="w-100 btn btn-lg btn-dark">Submit</Link>
                            </div>
                        </div>

                        <div className="col-sm-8">
                            <div className="m-2 text-center">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190256.09899308067!2d-87.87204749336057!3d41.833647849129385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1679570578057!5m2!1sen!2sus" width="100%" height="350" className="rounded border_primary" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}
