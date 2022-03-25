import React, { PropsWithChildren, useEffect } from 'react';
import Head from 'next/head';
import { useGaRedux } from '../../hooks/useGaRedux';
import { useRouter } from 'next/router';

interface GoogleAnalyticsProviderProps {
    gaid?: string;
}

export const GoogleAnalyticsProvider = ({
    gaid,
    children,
}: PropsWithChildren<GoogleAnalyticsProviderProps>) => {
    const { setGaId } = useGaRedux();
    const router = useRouter();

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
                page_path: router.pathname,
                debug_mode: process.env.PRODUCTION !== 'production',
            });
        }
    }, [router.pathname]);

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
