import React, { PropsWithChildren, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useGaRedux } from '../../hooks/useGaRedux';

interface GoogleAnalyticsProviderProps {
    gaid?: string;
}

const GoogleAnalyticsProvider = ({
    gaid,
    children,
    location,
}: PropsWithChildren<GoogleAnalyticsProviderProps> & RouteComponentProps) => {
    const { setGaId } = useGaRedux();

    useEffect(() => {
        if (gaid && typeof window.gtag === 'function') {
            gtag('event', 'app_started', {
                debug_mode: process.env.PRODUCTION !== 'production',
            });

            setGaId(gaid);

            console.info('⚡ Google analytics connected.');
        }
    }, []);

    useEffect(() => {
        if (gaid && typeof window.gtag === 'function') {
            // https://developers.google.com/gtagjs/reference/event
            gtag('event', 'page_view', {
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
                <Helmet
                    script={[
                        {
                            id: 'script-ga-head',
                            type: 'text/javascript',
                            src: `https://www.googletagmanager.com/gtag/js?id=${gaid}`,
                            async: true,
                        },
                        {
                            id: 'script-ga-body',
                            type: 'text/javascript',
                            innerHTML: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${gaid}');`,
                        },
                    ]}
                />
            )}
            {children}
        </React.Fragment>
    );
};

export const GoogleAnalyticsProviderWithRouter = withRouter(GoogleAnalyticsProvider);
