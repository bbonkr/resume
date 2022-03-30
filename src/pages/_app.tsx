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
