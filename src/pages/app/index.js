import Head from 'next/head'
import { Roboto } from 'next/font/google'
import App from '@/components/app/app';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })

export default function AppPage() {
    // page default data
    const pageName = "Tremorcrypt - Admin";
    const pageDesc = "Tremorcrypt is a leading investment company specializing in crypto investments. Our investment plans offer attractive returns on Bitcoin investments with different options to choose from. Invest in Bitcoin with Tremorcrypt today and reap the rewards.";
    const baseURL = "https://tremorcrypt.com/app";

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
            </Head>

            <main className={`position-relative ${roboto.className}`}>
                <App />
            </main>
        </>
    )
}
