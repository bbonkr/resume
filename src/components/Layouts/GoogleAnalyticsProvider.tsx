import React, { PropsWithChildren, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface GoogleAnalyticsProviderProps {}

const GoogleAnalyticsProvider = ({
    children,
    location,
}: PropsWithChildren<GoogleAnalyticsProviderProps> & RouteComponentProps) => {
    const gaid = process.env.GAID;

    useEffect(() => {
        if (gaid) {
            gtag('event', 'app_started', {
                debug_mode: process.env.PRODUCTION !== 'production',
            });
        }
    }, []);

    useEffect(() => {
        if (gaid) {
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
                        },
                        {
                            id: '',
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
