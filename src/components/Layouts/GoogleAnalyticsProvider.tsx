import React, { PropsWithChildren, useEffect } from 'react';
import Head from 'next/head';
import { useGaRedux } from '../../hooks/useGaRedux';

interface GoogleAnalyticsProviderProps {
    gaid?: string;
}

export const GoogleAnalyticsProvider = ({
    gaid,
    children,
}: PropsWithChildren<GoogleAnalyticsProviderProps>) => {
    const { setGaId } = useGaRedux();

    useEffect(() => {
        if (gaid && typeof window.gtag === 'function') {
            window.gtag('event', 'app_started', {
                debug_mode: process.env.PRODUCTION !== 'production',
            });

            setGaId(gaid);

            console.info('⚡ Google analytics connected.');
        }
    }, []);

    useEffect(() => {
        if (gaid && typeof window.gtag === 'function') {
            // https://developers.google.com/gtagjs/reference/event
            window.gtag('event', 'page_view', {
                page_title: window.document.title,
                page_location: window.location.href,
                page_path: location.pathname,
                debug_mode: process.env.PRODUCTION !== 'production',
            });
        }
    }, [location]);

    return (
        <React.Fragment>
            {gaid && (
                <Head>
                    <script
                        id="script-ga-head"
                        type="text/javascript"
                        src={`https://www.googletagmanager.com/gtag/js?id=${gaid}`}
                        async
                    ></script>
                    <script
                        id="script-ga-body"
                        type="text/javascript"
                        dangerouslySetInnerHTML={{
                            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${gaid}');`,
                        }}
                    ></script>
                </Head>
            )}
            {children}
        </React.Fragment>
    );
};

// export const GoogleAnalyticsProviderWithRouter = withRouter(GoogleAnalyticsProvider);
