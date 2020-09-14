import React, { useEffect } from 'react';

export const ContentWrapper: React.FC = ({ children }) => {
    useEffect(() => {
        if (window && typeof window.ga === 'function') {
            // console.info('Location: ', window.location.href);
            // window.gtag('config', window.GAID, {
            //     page_title: window.document.title,
            //     page_location: window.location.href,
            //     page_path: window.location.pathname,
            // });
            window.ga('send', 'pageview');
        }
    }, [window && window.location && window.location.href]);

    return <div className="content-wrapper">{children}</div>;
};
