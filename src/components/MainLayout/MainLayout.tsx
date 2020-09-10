import React, { useEffect } from 'react';

export const MainLayout: React.FC = ({ children }) => {
    useEffect(() => {
        const googleAnalyticsScriptLoaded = () => {
            if (window && typeof window.ga === 'function') {
                // window.dataLayer = window.dataLayer || [];
                // function gtag() {
                //     dataLayer.push(arguments);
                // }
                // gtag('js', new Date());
                window.ga('create', window.GAID, 'auto');
                window.ga('send', 'pageview');

                // gtag('config', window.GAID);
                // window.gtag('js', window.GAID);
            }
        };
        const headEl = window.document.querySelector('head');
        let googleAnalyticsScriptEl: HTMLScriptElement | null = null;
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

        return () => {
            if (googleAnalyticsScriptEl) {
                googleAnalyticsScriptEl.removeEventListener('load', googleAnalyticsScriptLoaded);
            }
        };
    }, []);
    return (
        <div
            className="page-wrapper with-sidebar with-navbar with-navbar-fixed-bottom"
            data-sidebar-type="full-height"
        >
            {children}
        </div>
    );
};
