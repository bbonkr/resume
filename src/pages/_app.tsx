import * as React from 'react';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import { MicrosoftClarityProvider } from '../components/Layouts';
import ErrorBoundary from '../components/ErrorBoundary';
import dynamic from 'next/dynamic';
import DataContextProvider from '../components/DataContextProvider';

import '../styles/globals.css';
import '../components/Loading/style.css';

const Header = dynamic(import('../components/Resume/Header').then((m) => m.Header));
const Layout = dynamic(import('../components/Resume/Layout').then((m) => m.Layout));

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <React.Fragment>
            <DataContextProvider>
                <ThemeProvider attribute="class" defaultTheme="system">
                    <MicrosoftClarityProvider projectId={process.env.NEXT_PUBLIC_CLARITY}>
                        <ErrorBoundary>
                            <Header />
                            <Layout className="flex flex-col justify-center items-center min-h-screen">
                                <Component {...pageProps} />
                            </Layout>
                        </ErrorBoundary>
                    </MicrosoftClarityProvider>
                </ThemeProvider>
            </DataContextProvider>
            <Analytics />
        </React.Fragment>
    );
};

export default MyApp;
