import * as React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';

import '../styles/globals.css';
import { useStore } from '../store';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const store = useStore();
    return (
        <React.Fragment>
            <Provider store={store}>
                <Head>
                    <body className="bg-slate-50 dark:bg-slate-900" />
                </Head>
                <ThemeProvider attribute="class" defaultTheme="system">
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        </React.Fragment>
    );
};

export default MyApp;
