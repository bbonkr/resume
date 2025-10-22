import * as React from 'react';

import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from 'next-themes';

import DataContextProvider from '../components/DataContextProvider';
import ErrorBoundary from '../components/ErrorBoundary';

import '../styles/globals.css';
import '../components/Loading/style.css';

const stage = process.env.NEXT_PUBLIC_ENV ?? 'dev';
const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY ?? '';

// 모든 dynamic imports를 하나의 컴포넌트로 그룹화
const DynamicComponents = dynamic(
    async () => {
        const [{ Header }, { Layout }, { MicrosoftClarityProvider }] = await Promise.all([
            import('../components/Resume/Header'),
            import('../components/Resume/Layout'),
            import('../components/Layouts/MicrosoftClarityProvider'),
        ]);

        return {
            default: ({ children }: React.PropsWithChildren) => (
                <MicrosoftClarityProvider projectId={clarityProjectId} stage={stage}>
                    <Header />
                    <Layout className="flex flex-col justify-center items-center min-h-screen">
                        {children}
                    </Layout>
                </MicrosoftClarityProvider>
            ),
        };
    },
    {
        loading: () => <div>Loading...</div>,
        ssr: false,
    },
);

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <React.Fragment>
            <DataContextProvider initialData={pageProps?.data}>
                <ThemeProvider attribute="class" defaultTheme="system">
                    <ErrorBoundary>
                        <DynamicComponents>
                            <Component {...pageProps} />
                        </DynamicComponents>
                    </ErrorBoundary>
                </ThemeProvider>
            </DataContextProvider>
            <Analytics
                debug={stage !== 'prd'}
                mode={stage === 'prd' ? 'production' : 'development'}
            />
            <SpeedInsights debug={stage !== 'prd'} />
        </React.Fragment>
    );
};

export default MyApp;
