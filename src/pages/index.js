import Head from 'next/head'
import { Roboto } from 'next/font/google'
import { getWSSchema, getWPSchema, getLBSchema } from '@/components/schema';
import Navbar from '@/components/navigations/navbar'
import Footer from '@/components/navigations/footer'
import Hero from '@/components/home/hero'
import Info1 from '@/components/home/info1'
import Info2 from '@/components/home/info2'
import Info3 from '@/components/home/info3'
import Info4 from '@/components/home/info4'
import Info5 from '@/components/home/info5'

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })

export default function HomePage() {
  // page default data
  const pageName = "Harpy Crypto Investments";
  const pageDesc = "Harpy Crypto is a leading investment company specializing in crypto investments. Our investment plans offer attractive returns on Bitcoin investments with different options to choose from. Invest in Bitcoin with Harpy Crypto today and reap the rewards.";
  const baseURL = "https://harpycryto.com";

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
        "name": "Home",
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
        <Hero />
        <Info1 />
        <Info2 />
        <Info3 />
        <Info4 />
        <Info5 />
        <Footer />
      </main>
    </>
  )
}
