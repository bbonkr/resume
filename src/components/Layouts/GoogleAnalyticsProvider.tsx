import { useState } from 'react';
import React, { PropsWithChildren, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useGaRedux } from '../../hooks/useGaRedux';

interface GoogleAnalyticsProviderProps {
    googleAnalyticsId?: string;
}

const GoogleAnalyticsProvider = ({
    googleAnalyticsId,
    children,
    location,
}: PropsWithChildren<GoogleAnalyticsProviderProps> & RouteComponentProps) => {
    const { setGaId } = useGaRedux();

    useEffect(() => {
        if (googleAnalyticsId) {
            gtag('event', 'app_started', {
                debug_mode: process.env.NODE_ENV !== 'production',
            });
        }
        setGaId(googleAnalyticsId ?? '');
    }, []);

    useEffect(() => {
        if (googleAnalyticsId && location) {
            // https://developers.google.com/gtagjs/reference/event
            gtag('event', 'page_view', {
                page_title: window.document.title,
                page_location: window.location.href,
                page_path: location.pathname,
                debug_mode: process.env.NODE_ENV !== 'production',
            });
        }
    }, [location]);

    return (
        <React.Fragment>
            {googleAnalyticsId && (
                <Helmet defer>
                    {googleAnalyticsId && (
                        <React.Fragment>
                            <script
                                id="script-ga-head"
                                async
                                src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
                            />
                            <script
                                id="script-ga-body"
                                // dangerouslySetInnerHTML={{
                                //     __html: ,
                                // }}
                            >{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${googleAnalyticsId}');`}</script>
                        </React.Fragment>
                    )}
                </Helmet>
            )}
            {children}
        </React.Fragment>
    );
};

export const GoogleAnalyticsProviderWithRouter = withRouter(GoogleAnalyticsProvider);
