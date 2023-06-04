import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return <>
        <Head>
            <title>Roving Steps</title>
            <meta name='viewport' content='width=device-width, intial-scale=1' />
            <link rel="shortcut icon" href="/Assets/images/favicon.png"></link>
            <meta name='keywords' content='Roving Steps' />
            <meta name='description' content='Roving Steps' />
        </Head>
        <Component {...pageProps} />
    </>
}
