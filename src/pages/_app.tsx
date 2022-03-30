import * as React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { useStore } from '../store';
import { GoogleAnalyticsProvider } from '../components/Layouts';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const store = useStore();
    return (
        <React.Fragment>
            <Provider store={store}>
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
                    />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <meta name="author" content="bbonkr" />
                    <meta property="og:type" content="website" />
                    <meta name="msapplication-TileImage" content="/images/bbon-icon-144.png" />
                    <meta name="robots" content="index,follow" />
                    <meta name="googlebot" content="index,follow" />
                    <meta name="twitter:card" content="summary" />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/images/bbon-icon-16.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/images/bbon-icon-32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="48x48"
                        href="/images/bbon-icon-48.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="196x196"
                        href="/images/bbon-icon-196.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="57x57"
                        href="/images/bbon-icon-57.png"
                        key="apple-touch-icon-57"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="72x72"
                        href="/images/bbon-icon-72.png"
                        key="apple-touch-icon-72"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="114x114"
                        href="/images/bbon-icon-114.png"
                        key="apple-touch-icon-114"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="120x120"
                        href="/images/bbon-icon-120.png"
                        key="apple-touch-icon-120"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="144x144"
                        href="/images/bbon-icon-144.png"
                        key="apple-touch-icon-144"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="152x152"
                        href="/images/bbon-icon-152.png"
                        key="apple-touch-icon-152"
                    />
                    <link rel="manifest" href="/manifest.webmanifest" />

                    <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />

                    <body className="bg-slate-50 dark:bg-slate-900" />
                    <html lang="ko" prefix="og: http://ogp.me/ns#" />
                </Head>
                <ThemeProvider attribute="class" defaultTheme="system">
                    <GoogleAnalyticsProvider gaid={process.env.NEXT_PUBLIC_GAID}>
                        <Component {...pageProps} />
                    </GoogleAnalyticsProvider>
                </ThemeProvider>
            </Provider>
        </React.Fragment>
    );
};

export default MyApp;
