import * as React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { GoogleAnalyticsProvider } from '../components/Layouts';
import ErrorBoundary from '../components/ErrorBoundary';
import dynamic from 'next/dynamic';
import DataContextProvider from '../components/DataContextProvider';

import '../styles/globals.css';
import '../components/Loading/style.css';

const Header = dynamic(
    import('../components/Resume/Header').then((m) => m.Header),
    { ssr: false },
);
const Layout = dynamic(
    import('../components/Resume/Layout').then((m) => m.Layout),
    { ssr: false },
);

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <React.Fragment>
            <DataContextProvider>
                <ThemeProvider attribute="class" defaultTheme="system">
                    <GoogleAnalyticsProvider gaid={process.env.NEXT_PUBLIC_GAID}>
                        <ErrorBoundary>
                            <Header
                            // data={pageProps?.data}
                            // isLoading={pageProps?.isLoading ?? true}
                            />

                            <Layout className="flex flex-col justify-center items-center min-h-screen">
                                <Component {...pageProps} />
                            </Layout>
                        </ErrorBoundary>
                    </GoogleAnalyticsProvider>
                </ThemeProvider>
            </DataContextProvider>
        </React.Fragment>
    );
};

export default MyApp;
