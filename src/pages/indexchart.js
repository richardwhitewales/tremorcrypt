import Head from 'next/head'
import { Roboto } from 'next/font/google'
import { getWSSchema, getWPSchema, getLBSchema } from '@/components/schema';
import Navbar from '@/components/navigations/navbar'
import Footer from '@/components/navigations/footer'
import { useEffect } from 'react';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })

export default function IndicesChartPage() {
    // page default data
    const pageName = "Harpy Crypto - Indices Chart";
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
                "name": "Indices Chart",
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
                  <div class="tradingview-widget-container" style="width: 100%; height: 600px;">
            <iframe scrolling="no" allowtransparency="true" frameborder="0"
                src="https://www.tradingview-widget.com/embed-widget/market-overview/?locale=en#%7B%22colorTheme%22%3A%22dark%22%2C%22dateRange%22%3A%2212M%22%2C%22showChart%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22height%22%3A600%2C%22largeChartUrl%22%3A%22http%3A%2F%2Fwww.harpycryto.com%2Fwidget%22%2C%22isTransparent%22%3Afalse%2C%22showSymbolLogo%22%3Atrue%2C%22showFloatingTooltip%22%3Afalse%2C%22plotLineColorGrowing%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22plotLineColorFalling%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22gridLineColor%22%3A%22rgba(240%2C%20243%2C%20250%2C%200)%22%2C%22scaleFontColor%22%3A%22rgba(106%2C%20109%2C%20120%2C%201)%22%2C%22belowLineFillColorGrowing%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorFalling%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorGrowingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22belowLineFillColorFallingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22symbolActiveColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22tabs%22%3A%5B%7B%22title%22%3A%22Indices%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22d%22%3A%22S%26P%20500%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22d%22%3A%22US%20100%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3ADJI%22%2C%22d%22%3A%22Dow%2030%22%7D%2C%7B%22s%22%3A%22INDEX%3ANKY%22%2C%22d%22%3A%22Nikkei%20225%22%7D%2C%7B%22s%22%3A%22INDEX%3ADEU40%22%2C%22d%22%3A%22DAX%20Index%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3AUKXGBP%22%2C%22d%22%3A%22UK%20100%22%7D%2C%7B%22s%22%3A%22NASDAQ%3ATSLA%22%7D%2C%7B%22s%22%3A%22NASDAQ%3AAAPL%22%2C%22d%22%3A%22Apple%22%7D%2C%7B%22s%22%3A%22NASDAQ%3AAMZN%22%2C%22d%22%3A%22Amazon%22%7D%2C%7B%22s%22%3A%22OANDA%3ASPX500USD%22%2C%22d%22%3A%22SPX%22%7D%2C%7B%22s%22%3A%22OANDA%3AUS30USD%22%2C%22d%22%3A%22US%2030%22%7D%5D%2C%22originalTitle%22%3A%22Indices%22%7D%2C%7B%22title%22%3A%22Futures%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22CME_MINI%3AES1!%22%2C%22d%22%3A%22S%26P%20500%22%7D%2C%7B%22s%22%3A%22CME%3A6E1!%22%2C%22d%22%3A%22Euro%22%7D%2C%7B%22s%22%3A%22COMEX%3AGC1!%22%2C%22d%22%3A%22Gold%22%7D%2C%7B%22s%22%3A%22NYMEX%3ACL1!%22%2C%22d%22%3A%22Crude%20Oil%22%7D%2C%7B%22s%22%3A%22NYMEX%3ANG1!%22%2C%22d%22%3A%22Natural%20Gas%22%7D%2C%7B%22s%22%3A%22CBOT%3AZC1!%22%2C%22d%22%3A%22Corn%22%7D%2C%7B%22s%22%3A%22CME_MINI%3AES1!%22%2C%22d%22%3A%22Es%22%7D%2C%7B%22s%22%3A%22NSE%3ABANKNIFTY1!%22%2C%22d%22%3A%22Banknifty%22%7D%5D%2C%22originalTitle%22%3A%22Futures%22%7D%2C%7B%22title%22%3A%22Bonds%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22CME%3AGE1!%22%2C%22d%22%3A%22Eurodollar%22%7D%2C%7B%22s%22%3A%22CBOT%3AZB1!%22%2C%22d%22%3A%22T-Bond%22%7D%2C%7B%22s%22%3A%22CBOT%3AUB1!%22%2C%22d%22%3A%22Ultra%20T-Bond%22%7D%2C%7B%22s%22%3A%22EUREX%3AFGBL1!%22%2C%22d%22%3A%22Euro%20Bund%22%7D%2C%7B%22s%22%3A%22EUREX%3AFBTP1!%22%2C%22d%22%3A%22Euro%20BTP%22%7D%2C%7B%22s%22%3A%22EUREX%3AFGBM1!%22%2C%22d%22%3A%22Euro%20BOBL%22%7D%2C%7B%22s%22%3A%22TVC%3AUS10Y%22%2C%22d%22%3A%22US%2010%22%7D%5D%2C%22originalTitle%22%3A%22Bonds%22%7D%2C%7B%22title%22%3A%22Forex%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22FX%3AEURUSD%22%2C%22d%22%3A%22EUR%2FUSD%22%7D%2C%7B%22s%22%3A%22FX%3AGBPUSD%22%2C%22d%22%3A%22GBP%2FUSD%22%7D%2C%7B%22s%22%3A%22FX%3AUSDJPY%22%2C%22d%22%3A%22USD%2FJPY%22%7D%2C%7B%22s%22%3A%22FX%3AUSDCHF%22%2C%22d%22%3A%22USD%2FCHF%22%7D%2C%7B%22s%22%3A%22FX%3AAUDUSD%22%2C%22d%22%3A%22AUD%2FUSD%22%7D%2C%7B%22s%22%3A%22FX%3AUSDCAD%22%2C%22d%22%3A%22USD%2FCAD%22%7D%5D%2C%22originalTitle%22%3A%22Forex%22%7D%5D%2C%22utm_source%22%3A%22harpycryto.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22market-overview%22%2C%22page-uri%22%3A%22harpycryto.com%2Fmarkets%3Fmarket%3Dindex%22%7D"
                title="market overview TradingView widget" lang="en"
                style="user-select: none; box-sizing: border-box; display: block; height: 100%; width: 100%;">
            </iframe>
            <style>
                .tradingview-widget-copyright {
                    font-size: 13px !important;
                    line-height: 32px !important;
                    text-align: center !important;
                    vertical-align: middle !important;
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
                .tradingview-widget-copyright a:hover .blue-text {
                    color: #1E53E5 !important;
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
                                Indices Chart
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
