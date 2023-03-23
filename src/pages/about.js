import Head from 'next/head'
import { Roboto } from 'next/font/google'
import { getWSSchema, getWPSchema, getLBSchema } from '@/components/schema';
import Navbar from '@/components/navigations/navbar'
import Footer from '@/components/navigations/footer'
import { Tree } from 'iconsax-react';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })

export default function AboutPage() {
    // page default data
    const pageName = "Harpy Cryto - About Us";
    const pageDesc = "Harpy Crypto is a leading investment company specializing in crypto investments. Our investment plans offer attractive returns on Bitcoin investments with different options to choose from. Invest in Bitcoin with Harpy Crypto today and reap the rewards.";
    const baseURL = "https://harpycryto.com/about";

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
                "name": "About",
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
                <meta name="keywords" content="Harpy Crypto, Harpycrypto, investment company, crypto investments, Bitcoin investments, investment plans, attractive returns, selected plan, cryptocurrency, digital currency, crypto finance" />
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
                        <div className="col-sm-8">
                            <h1 className="mb-5">
                                <Tree size={36} color="#12b772" /> About Us
                            </h1>

                            <p>
                                Welcome to Harpy Crypto, a leading investment company specializing in cryptocurrency investments.
                                Our team of experienced investment professionals has a proven track record of delivering strong
                                returns to our clients through our tailored investment plans.
                            </p>

                            <p>
                                At Harpy Crypto, we believe in the power of cryptocurrency and its potential to revolutionize the
                                financial industry. That is why we offer a range of investment options for our clients, including
                                Bitcoin investments, with attractive returns and the flexibility to choose the investment plan that
                                best fits their needs.
                            </p>

                            <p>
                                Our investment team is dedicated to staying ahead of the curve when it comes to market trends
                                and analysis, ensuring that we are always making informed investment decisions on behalf of our
                                clients. We take pride in our ability to provide personalized investment strategies to meet each
                                client is unique needs and investment goals.
                            </p>

                            <p>
                                Our commitment to excellent customer service sets us apart from other investment companies. We
                                understand that investing can be daunting, which is why we provide ongoing support to our clients,
                                with a team of dedicated customer support specialists available to answer any questions or concerns that may arise.
                            </p>

                            <p>
                                At Harpy Crypto, we prioritize security and confidentiality, implementing the latest encryption
                                and security measures to ensure that our client are personal and financial information is protected
                                at all times.
                            </p>

                            <p>
                                We invite you to explore our website and learn more about our investment services and approach.
                                Contact us today to begin your journey towards a profitable cryptocurrency investment portfolio
                                with Harpy Crypto.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}
