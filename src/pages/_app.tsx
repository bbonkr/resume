import * as React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { useStore } from '../store';
import { GoogleAnalyticsProvider } from '../components/Layouts';
import ErrorBoundary from '../components/ErrorBoundary';

import '../styles/globals.css';
import '../components/Loading/style.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const store = useStore();
    return (
        <React.Fragment>
            <ErrorBoundary>
                <Provider store={store}>
                    <ThemeProvider attribute="class" defaultTheme="system">
                        <GoogleAnalyticsProvider gaid={process.env.NEXT_PUBLIC_GAID}>
                            <Component {...pageProps} />
                        </GoogleAnalyticsProvider>
                    </ThemeProvider>
                </Provider>
            </ErrorBoundary>
        </React.Fragment>
    );
};

export default MyApp;
