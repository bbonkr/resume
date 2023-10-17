import * as React from 'react';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import ErrorBoundary from '../components/ErrorBoundary';
import dynamic from 'next/dynamic';
import DataContextProvider from '../components/DataContextProvider';

import '../styles/globals.css';
import '../components/Loading/style.css';

const stage = process.env.NEXT_PUBLIC_ENV ?? 'dev';
const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY ?? '';

const Header = dynamic(import('../components/Resume/Header').then((m) => m.Header));
const Layout = dynamic(import('../components/Resume/Layout').then((m) => m.Layout));
const MicrosoftClarityProvider = dynamic(
    import('../components/Layouts/MicrosoftClarityProvider').then(
        (m) => m.MicrosoftClarityProvider,
    ),
);
const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <React.Fragment>
            <DataContextProvider>
                <ThemeProvider attribute="class" defaultTheme="system">
                    <MicrosoftClarityProvider projectId={clarityProjectId} stage={stage}>
                        <ErrorBoundary>
                            <Header />
                            <Layout className="flex flex-col justify-center items-center min-h-screen">
                                <Component {...pageProps} />
                            </Layout>
                        </ErrorBoundary>
                    </MicrosoftClarityProvider>
                </ThemeProvider>
            </DataContextProvider>
            <Analytics mode={stage === 'prd' ? 'production' : 'development'} />
        </React.Fragment>
    );
};

export default MyApp;
