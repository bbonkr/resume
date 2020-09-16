import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import halfmoon from 'halfmoon';

export const MainLayout: React.FC = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        const googleAnalyticsScriptLoaded = () => {
            if (window && typeof window.ga === 'function') {
                window.ga('create', window.GAID, 'auto');
                window.ga('send', 'pageview');
            }
        };

        const hasGAID = 'GAID' in window;
        let googleAnalyticsScriptEl: HTMLScriptElement | null = null;

        if (hasGAID) {
            const headEl = window.document.querySelector('head');

            if (headEl) {
                googleAnalyticsScriptEl = headEl.querySelector('script#google-analytics');

                if (!googleAnalyticsScriptEl) {
                    googleAnalyticsScriptEl = window.document.createElement('script');
                    const scriptEl = googleAnalyticsScriptEl as HTMLScriptElement;

                    scriptEl.id = 'google-analytics';
                    scriptEl.async = true;
                    scriptEl.src = `https://www.googletagmanager.com/gtag/js?id=${window.GAID}`;

                    scriptEl.addEventListener('load', googleAnalyticsScriptLoaded);
                    headEl.appendChild(googleAnalyticsScriptEl);
                }
            }
        }

        return () => {
            if (hasGAID && googleAnalyticsScriptEl) {
                googleAnalyticsScriptEl.removeEventListener('load', googleAnalyticsScriptLoaded);
            }
        };
    }, []);

    useEffect(() => {
        if (window && window.GAID && typeof window.ga === 'function') {
            window.ga('send', ['pageview', location.pathname]);
        }
        halfmoon.deactivateAllDropdownToggles();
    }, [location]);

    return <div className="page-wrapper">{children}</div>;
};
