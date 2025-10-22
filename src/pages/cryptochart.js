import Head from 'next/head'
import { Roboto } from 'next/font/google'
import { getWSSchema, getWPSchema, getLBSchema } from '@/components/schema';
import Navbar from '@/components/navigations/navbar'
import Footer from '@/components/navigations/footer'
import { useEffect } from 'react';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })

export default function CryptoChartPage() {
    // page default data
    const pageName = "Harpy Crypto - Crypto Chart";
    const pageDesc = "Harpy Crypto is a leading investment company specializing in crypto investments. Our investment plans offer attractive returns on Bitcoin investments with different options to choose from. Invest in Bitcoin with Harpy Crypto today and reap the rewards.";
    const baseURL = "https://harpycrypto.com/buycrypto";

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
                "name": "Crypto Chart",
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

    useEffect(() => {
        const container = document.getElementById('tradingview-container');
        if (container) {
            container.innerHTML = `
                <div class="tradingview-widget-container" style="width: 100%; height: 540px;">
						<iframe allowtransparency="true" frameborder="0" src="https://www.tradingview-widget.com/embed-widget/crypto-mkt-screener/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A540%2C%22defaultColumn%22%3A%22overview%22%2C%22screener_type%22%3A%22crypto_mkt%22%2C%22displayCurrency%22%3A%22USD%22%2C%22colorTheme%22%3A%22dark%22%2C%22largeChartUrl%22%3A%22http%3A%2F%2Flocalhost%2Fnewbroker%2Fwidget%22%2C%22market%22%3A%22crypto%22%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22harpycryto.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22cryptomktscreener%22%2C%22page-uri%22%3A%22harpycryto.com%2Fmarkets%3Fmarket%3Dcrypto%22%7D" title="crypto mkt-screener TradingView widget" lang="en" style="user-select: none; box-sizing: border-box; display: block; height: 100%; width: 100%;"></iframe>
						<script type="text/javascript" charset="utf-8" async="" src="https://www.smartsuppchat.com/loader.js?"></script>
					<style>
                    .tradingview-widget-copyright {
                        font-size: 13px !important;
                        line-height: 32px !important;
                        text-align: center !important;
                        vertical-align: middle !important;
                        /* @mixin sf-pro-display-font; */
                        font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif !important;
                        color: #B2B5BE !important;
                    }

                    .tradingview-widget-copyright .blue-text {
                        color: #2962FF !important;
                    }

                    .tradingview-widget-copyright a {
                        text-decoration: none !important;
                        color: #B2B5BE !important;
                    }

                    .tradingview-widget-copyright a:visited {
                        color: #B2B5BE !important;
                    }

                    .tradingview-widget-copyright a:hover .blue-text {
                        color: #1E53E5 !important;
                    }

                    .tradingview-widget-copyright a:active .blue-text {
                        color: #1848CC !important;
                    }

                    .tradingview-widget-copyright a:visited .blue-text {
                        color: #2962FF !important;
                    }
                    </style>
                </div>
            `;
        }
    }, []);

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content={pageDesc} />
                <meta name="keywords" content="Harpy Crypto, harpycrypto, investment company, crypto investments, Bitcoin investments, investment plans, attractive returns, selected plan, cryptocurrency, digital currency, crypto finance" />
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
                        <div className="col-sm-8">
                            <h1 className="mb-5 fw-bold text-center">
                                Crypto Chart
                            </h1>

                            <div id="tradingview-container" />
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}
