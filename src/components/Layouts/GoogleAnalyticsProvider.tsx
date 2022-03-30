import React, { PropsWithChildren, useEffect } from 'react';
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
        if (gaid && typeof window.ga === 'function') {
            // window.gtag('event', 'app_started', {
            //     debug_mode: process.env.PRODUCTION !== 'production',
            // });

            window.ga('send', 'event', 'app_started', 'app_started');

            setGaId(gaid);

            console.info('⚡ Google analytics connected.');
        }
    }, []);

    useEffect(() => {
        if (gaid && typeof window.ga === 'function') {
            // https://developers.google.com/gtagjs/reference/event
            // window.gtag('event', 'page_view', {
            //     page_title: window.document.title,
            //     page_location: window.location.href,
            //     page_path: router.pathname,
            //     debug_mode: process.env.PRODUCTION !== 'production',
            // });
            window.ga('send', 'pageview', router.pathname);
        }
    }, [router.pathname]);

    return (
        <React.Fragment>
            {children}
            {gaid && (
                <React.Fragment>
                    <script
                        id="script-ga-head"
                        type="text/javascript"
                        src={`https://www.googletagmanager.com/gtag/js?id=${gaid}`}
                        async
                    ></script>
                    <script
                        id="script-ga-body"
                        dangerouslySetInnerHTML={{
                            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${gaid}');`,
                        }}
                    ></script>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};
