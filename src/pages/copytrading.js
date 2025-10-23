import Head from 'next/head'
import { Roboto } from 'next/font/google'
import { getWSSchema, getWPSchema, getLBSchema } from '@/components/schema';
import Navbar from '@/components/navigations/navbar'
import Footer from '@/components/navigations/footer'

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })

export default function CopyTradingPage() {
    // page default data
    const pageName = "Harpy Crypto - Copy Trading";
    const pageDesc = "Harpy Crypto is a leading investment company specializing in crypto investments. Our investment plans offer attractive returns on Bitcoin investments with different options to choose from. Invest in Bitcoin with Harpy Crypto today and reap the rewards.";
    const baseURL = "https://harpycrypto.com/copytrading";

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
                "name": "Copy Trading",
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
                                Copy Trading
                            </h1>

                            <p className='my-5 text-muted'>
                                Its all in the name! Copy trading allows you to directly copy the positions taken by another trader. You decide the amount you wish to invest and simply copy everything they do automatically in real-time – when that trader makes a trade, your account will make that same trade as well. You do not need to have any input on the trades, and you get the identical returns on each trade as your chosen trader. But by copying another trader, you could potentially make money based on their skills. In fact, no advanced knowledge of the financial market is required to take part.
                            </p>

                            <p className='my-5 text-muted'>
                                Copy Trading is both a product and a service. We cater to both the traders and investors looking to capitalize in the cryptocurrency trading. Being able to copy trades from several expert traders and also allow investors to follow ones trades is a great service in and of itself.
                            </p>

                            <p className='my-5 text-muted'>
                                We have been trading markets for many years and recently started trading crypto currencies with much success. We originally wanted to put together a portfolio of coins and manage everyones funds in one account but we soon realized that account segregation and being in control of your funds is the only way to go, especially if we wanted to bring in outside investors. So, after looking around and finding out that there was no way for anyone to copy someone elses trades (unlike any other market), we decided to start working on this project.
                            </p>

                            <p className='my-5 text-muted'>
                                There have been many challenges and obstacles to overcome but when something is worth pursuing you do it even if its hard. While the service is still being refined and improved on the daily bases we are actively connecting traders and investors for the mutual benefit in crypto currency trading/investing
                            </p>

                            <p className='my-5 text-muted'>
                                The history of copy trading goes back to 2005 when traders used to copy specific algorithms that were developed through automated trading. Brokers recognised the potential of having systems where any linked to that trader could automatically copy their trading account. There was no need to constantly monitor email signals or trading ‘chat rooms. We think they were onto something. Out of this were born services that allowed traders to connect their personal trading accounts to their platform. Traders no longer had to submit their specific strategies. The popularity of copy trading has since exploded.
                                1 in 3 say a traditional stock market approach is over-complex and this can be simplified by automatically following traders. 1 in 4 investors said they were considering Copy trading last year
                            </p>

                            <p className='my-5 text-muted'>
                                Here is how the copier works: You, as an investor, simply select an expert or experts that you want to copy trades from. Once you are signed up, this is the only action needed on your part. Once youve taken care of the above, you are all set. There are no codes that you need to run or signals for you to manually input. Our software will handle the trade copying automatically on your behalf. We monitor your experts trading activity and as soon as there is a trade, we calculate all the necessary parameters and execute the trade. The only thing you have to make sure of is that you have enough funds available in your trading account. When the expert exits a position, you too will exit it. Automatically.
                            </p>

                            <h4 className='fw-bold'>WHO ARE THE EXPERTS</h4>
                            <p className='mt-3 mb-5 text-muted'>
                                We carefully select expert applicants. We get to know them as a trader and examine their trading performance over a period of time. We also tend to look for expert who already have a following to further confirm their competence (social proof). You can also read about every expert on their individual performance pages.
                            </p>

                            <h4 className='fw-bold'>HOW DOES THIS WORK</h4>
                            <p className='mt-3 mb-5 text-muted'>
                                Here is how the copier works: You, as an investor, simply select an expert or experts that you want to copy trades from. Once you are signed up, this is the only action needed on your part.
                            </p>

                            <p className='my-5 text-muted'>
                                Once youve taken care of the above, you are all set. There are no codes that you need to run or signals for you to manually input. Our software will handle the trade copying automatically on your behalf. We monitor your experts trading activity and as soon as there is a trade, we calculate all the necessary parameters and execute the trade.
                            </p>

                            <p className='my-5 text-muted'>
                                The copier works based on trade percent amount. So, for example, if your expert takes a position in XYZ coin for a total of 10% of his account value and you are 100% allocated to that expert, then the copier will also execute a trade in your account in the amount of 10% of your account value.
                            </p>

                            <p className='my-5 text-muted'>
                                The only thing you have to make sure of is that you have enough available base currency that your expert trades with, in your trading account. How much is enough? First, you must meet the exchanges minimum order amount (lets say about $10 per trade to be safe). That means that if your expert executes a 5% order, you must have at least $300 in your account total value (at 100% expert allocation as an example). This also means that you need to have at least 10% or higher in available base currency to avoid missed trades.
                            </p>

                            <p className='my-5 text-muted'>
                                When the expert exits a position, you too will exit it. Automatically. You can also change allocation at any time.
                                In a need for transparency and to protect Traders, the broker acts as an escrow in receiving commission percentage
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}
