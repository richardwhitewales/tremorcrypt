import Head from 'next/head'
import { Roboto } from 'next/font/google'
import { getWSSchema, getWPSchema, getLBSchema } from '@/components/schema';
import Navbar from '@/components/navigations/navbar'
import Footer from '@/components/navigations/footer'
import { Document } from 'iconsax-react';
import Link from 'next/link';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })

export default function LicensesPage() {
    // page default data
    const pageName = "Tremorcrypt - Licenses";
    const pageDesc = "Tremorcrypt is a leading investment company specializing in crypto investments. Our investment plans offer attractive returns on Bitcoin investments with different options to choose from. Invest in Bitcoin with Tremorcrypt today and reap the rewards.";
    const baseURL = "https://tremorcrypt.com/licenses";

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
                "name": "Licenses",
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
                        <div className="col-sm-8 text-center">
                            <h1 className="mb-5 fw-bold">
                                <Document size={36} color="#12b772" /> Licenses & Registrations
                            </h1>

                            <h4>
                                In order to ensure the provision of their portfolio of services in full compliance with all applicable global and local regulations and standards, the Stock Strategic Options companies hold licenses and registrations in numerous jurisdictions worldwide, and are constantly bringing their operations in line with newly adopted legislative changes.
                            </h4>

                            <p className='my-5'>Assets audited by</p>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/1.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States</p>
                                <h4 className='fw-bold mb-3'>U.S. Financial Crimes Enforcement Network</h4>
                                <h5 className='text-muted mb-3'>Money Service Business Registration</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>31000201469839</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://www.fincen.gov" target="_blank">https://www.fincen.gov</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/2.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, Alabama</p>
                                <h4 className='fw-bold mb-3'>State Banking Department</h4>
                                <h5 className='text-muted mb-3'>Consumer Credit License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>MC 22385</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://www.banking.alabama.gov" target="_blank">https://www.banking.alabama.gov</Link> </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/3.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, Alabama</p>
                                <h4 className='fw-bold mb-3'>Alabama Securities Commission</h4>
                                <h5 className='text-muted mb-3'>Money Transmitter License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'># 769</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://www.asc.alabama.gov" target="_blank">https://www.asc.alabama.gov</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/4.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, Arizona</p>
                                <h4 className='fw-bold mb-3'>Department of Insurance and Financial Institutions</h4>
                                <h5 className='text-muted mb-3'>Money Transmitter License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>MT-1034818</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://difi.az.gov" target="_blank">https://difi.az.gov</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/4.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, Arizona</p>
                                <h4 className='fw-bold mb-3'>Department of Insurance and Financial Institutions</h4>
                                <h5 className='text-muted mb-3'>Consumer Lender License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>CL-1017838</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://difi.az.gov" target="_blank">https://difi.az.gov</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/5.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, Arkansas</p>
                                <h4 className='fw-bold mb-3'>Arkansas Securities Department</h4>
                                <h5 className='text-muted mb-3'>Money Transmitter License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>125678</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="http://securities.arkansas.gov" target="_blank">http://securities.arkansas.gov</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/6.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, California</p>
                                <h4 className='fw-bold mb-3'>Department of Financial Protection and Innovation</h4>
                                <h5 className='text-muted mb-3'>Financing Law License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>60DBQ-119812</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://dfpi.ca.gov" target="_blank">https://dfpi.ca.gov</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/7.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, District of Columbia</p>
                                <h4 className='fw-bold mb-3'>Department of Insurance, Securities and Banking</h4>
                                <h5 className='text-muted mb-3'>Money Lender License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>ML 1898544</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://disb.dc.gov" target="_blank">https://disb.dc.gov</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/8.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, Delaware</p>
                                <h4 className='fw-bold mb-3'>Office of the State Bank Commissioner</h4>
                                <h5 className='text-muted mb-3'>Lender License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>035538</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://banking.delaware.gov" target="_blank">https://banking.delaware.gov</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/9.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, Georgia</p>
                                <h4 className='fw-bold mb-3'>Department of Banking and Finance</h4>
                                <h5 className='text-muted mb-3'>Seller of Payment Instruments License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>1799753</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://dbf.georgia.gov" target="_blank">https://dbf.georgia.gov</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/10.svg" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, Idaho</p>
                                <h4 className='fw-bold mb-3'>Department of Finance</h4>
                                <h5 className='text-muted mb-3'>Regulated Lender License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>RRL-11385</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://www.finance.idaho.gov" target="_blank">https://www.finance.idaho.gov</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/11.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, Illinois</p>
                                <h4 className='fw-bold mb-3'>Department of Financial and Professional Regulation</h4>
                                <h5 className='text-muted mb-3'>Consumer Installment Loan License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>CI.0014461-H</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://idfpr.com" target="_blank">https://idfpr.com</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/12.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, Iowa</p>
                                <h4 className='fw-bold mb-3'>Iowa Division of Banking</h4>
                                <h5 className='text-muted mb-3'>Money Service License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>2022-0009</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="http://www.idob.state.ia.us" target="_blank">http://www.idob.state.ia.us</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/13.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, Kansas</p>
                                <h4 className='fw-bold mb-3'>Office of the State Bank Commissioner</h4>
                                <h5 className='text-muted mb-3'>Supervised Loan License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>SL.0026405</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://osbckansas.org" target="_blank">https://osbckansas.org</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/14.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, Maryland</p>
                                <h4 className='fw-bold mb-3'>Commissioner of Financial Regulation</h4>
                                <h5 className='text-muted mb-3'>Installment Loan License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>03-1898745</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://www.maryland.gov" target="_blank">https://www.maryland.gov</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/14.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, Maryland</p>
                                <h4 className='fw-bold mb-3'>Commissioner of Financial Regulation</h4>
                                <h5 className='text-muted mb-3'>Money Transmitter License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>1898755</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://www.maryland.gov" target="_blank">https://www.maryland.gov</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/15.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, Minnesota</p>
                                <h4 className='fw-bold mb-3'>Department of Commerce</h4>
                                <h5 className='text-muted mb-3'>Regulated Loan Company License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>MN-RL-1996754</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://mn.gov/commerce/" target="_blank">https://mn.gov/commerce/</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/15.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, Minnesota</p>
                                <h4 className='fw-bold mb-3'>Department of Commerce</h4>
                                <h5 className='text-muted mb-3'>Money Transmitter License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>MN-MT-1848786</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://mn.gov/commerce/" target="_blank">https://mn.gov/commerce/</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/16.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, Mississippi</p>
                                <h4 className='fw-bold mb-3'>Department of Banking and Consumer Finance</h4>
                                <h5 className='text-muted mb-3'>Money Transmitter License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>1898643</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://dbcf.ms.gov" target="_blank">https://dbcf.ms.gov</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/17.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, Montana</p>
                                <h4 className='fw-bold mb-3'>Division of Finance</h4>
                                <h5 className='text-muted mb-3'>Sale of Checks & Money Transmitter License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>MO-23-8913</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://finance.mo.gov" target="_blank">https://finance.mo.gov</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/18.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, District of Columbia</p>
                                <h4 className='fw-bold mb-3'>Department of Insurance, Securities and Banking</h4>
                                <h5 className='text-muted mb-3'>Consumer Loan License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>1877754</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://banking.mt.gov" target="_blank">https://banking.mt.gov</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/19.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, New Hampshire</p>
                                <h4 className='fw-bold mb-3'>Banking Department</h4>
                                <h5 className='text-muted mb-3'>Small Loan Lender License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>23521-SM</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://www.nh.gov/banking" target="_blank">https://www.nh.gov/banking</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/19.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, New Hampshire</p>
                                <h4 className='fw-bold mb-3'>Banking Department</h4>
                                <h5 className='text-muted mb-3'>Money Transmitter License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>24189-MT</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://www.nh.gov/banking" target="_blank">https://www.nh.gov/banking</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/20.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, North Dakota</p>
                                <h4 className='fw-bold mb-3'>Department of Financial Institutions</h4>
                                <h5 className='text-muted mb-3'>Money Broker License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>MB104829</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://www.nh.gov/banking" target="_blank">https://www.nh.gov/banking</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/20.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, North Dakota</p>
                                <h4 className='fw-bold mb-3'>Department of Financial Institutions</h4>
                                <h5 className='text-muted mb-3'>Money Transmitter License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>MT104944</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://www.nh.gov/banking" target="_blank">https://www.nh.gov/banking</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/20.svg" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, Oregon</p>
                                <h4 className='fw-bold mb-3'>Division of Financial Regulation</h4>
                                <h5 className='text-muted mb-3'>Consumer Finance License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>1998556</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://dfr.oregon.gov" target="_blank">https://dfr.oregon.gov</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/20.svg" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, Oregon
</p>
                                <h4 className='fw-bold mb-3'>Division of Financial Regulation</h4>
                                <h5 className='text-muted mb-3'>Money Transmitter License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>1878845</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://dfr.oregon.gov" target="_blank">https://dfr.oregon.gov</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/21.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, Pennsylvania</p>
                                <h4 className='fw-bold mb-3'>Department of Banking and Securities</h4>
                                <h5 className='text-muted mb-3'>Money Transmitter License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>94060</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://dobs.pa.gov" target="_blank">https://dobs.pa.gov</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/22.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, South Dakota</p>
                                <h4 className='fw-bold mb-3'>Division of Banking</h4>
                                <h5 className='text-muted mb-3'>Money Transmitter License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>1878745.MT</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://dlr.sd.gov/banking/" target="_blank">https://dlr.sd.gov/banking/</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/23.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, Utah</p>
                                <h4 className='fw-bold mb-3'>Department of Financial Institutions</h4>
                                <h5 className='text-muted mb-3'>Consumer Credit Notification</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'></p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://dfi.utah.gov" target="_blank">https://dfi.utah.gov</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/24.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, West Virginia</p>
                                <h4 className='fw-bold mb-3'>West Virginia Division of Financial Institutions</h4>
                                <h5 className='text-muted mb-3'>Money Transmitter License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>WVMT-1899654</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://dfi.wv.gov/consumers/complaints/Pages/default.aspx" target="_blank">https://dfi.wv.gov/consumers/complaints/Pages/default.aspx</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/25.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>United States, Wyoming</p>
                                <h4 className='fw-bold mb-3'>Department of Audit</h4>
                                <h5 className='text-muted mb-3'>Consumer Lender License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>CL-4229</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="http://audit.wyo.gov" target="_blank">http://audit.wyo.gov</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/26.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>Canada</p>
                                <h4 className='fw-bold mb-3'>Financial Transactions and Reports Analysis Centre of Canada</h4>
                                <h5 className='text-muted mb-3'>Money Service Business Registration</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>M20280268</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://www.fintrac-canafe.gc.ca" target="_blank">https://www.fintrac-canafe.gc.ca</Link>
                            </div>
                        </div>

                         <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/26.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>Canada</p>
                                <h4 className='fw-bold mb-3'>Financial Transactions and Reports Analysis Centre of Canada</h4>
                                <h5 className='text-muted mb-3'>Money Service Business Registration</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>M21199887</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://www.fintrac-canafe.gc.ca" target="_blank">https://www.fintrac-canafe.gc.ca</Link>
                            </div>
                        </div>

                         <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/27.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>Switzerland</p>
                                <h4 className='fw-bold mb-3'>SO-FIT</h4>
                                <h5 className='text-muted mb-3'>Affiliated Member of the Recognized Self-Regulatory Organization “SO-FIT” - Geneva</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'></p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://so-fit.ch" target="_blank">https://so-fit.ch</Link>
                            </div>
                        </div>

                         <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/28.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>Australia</p>
                                <h4 className='fw-bold mb-3'>Australian Securities and Investment Commission</h4>
                                <h5 className='text-muted mb-3'>Registration as Foreign Company</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>647054530</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://asic.gov.au" target="_blank">https://asic.gov.au</Link>
                            </div>
                        </div>

                         <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/29.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>Hong Kong</p>
                                <h4 className='fw-bold mb-3'>Companies Registry</h4>
                                <h5 className='text-muted mb-3'>Trust or Company Service Provider License</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'>M20280268</p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                                <Link className='text-muted' href="https://www.cr.gov.hk" target="_blank">https://www.cr.gov.hk</Link>
                            </div>
                        </div>

                         <div className="col-sm-4">
                            <div className="border p-3 mb-4">
                                <img src="/30.png" className='mb-3 object-fit-cover' style={{ maxWidth: "100%" }} alt='logo' height={80} />
                                <p className='text-muted text-uppercase mb-3'>Lithuania</p>
                                <h4 className='fw-bold mb-3'>Financial Crime Investigation Service</h4>
                                <h5 className='text-muted mb-3'>Registration as Virtual Currency Exchange Operator and Depository Virtual Currency Wallet Operator</h5>
                                <p className='text-muted text-uppercase mb-3'>REFERENCE NO.</p>
                                <p className='text-bold mb-3'></p>
                                <p className='text-muted text-uppercase mb-3'>COMPANY</p>
                                <p className='text-bold mb-3'>Tremorcrypt LLC</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}
