import * as React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <React.Fragment>
            <Head>
                <body className="bg-slate-50 dark:bg-slate-900" />
            </Head>
            <ThemeProvider attribute="class" defaultTheme="system">
                <Component {...pageProps} />
            </ThemeProvider>
        </React.Fragment>
    );
};

export default MyApp;
