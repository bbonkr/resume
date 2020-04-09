import React from 'react';
import styled from 'styled-components';

export const ContentWrapperDiv = styled.div`
    padding: 0.9rem 0.9rem;
`;

export const ContentWrapper: React.FC = ({ children }) => {
    React.useEffect(() => {
        if (window) {
            // console.info('Location: ', window.location.href);
            window.gtag('config', window.GAID, {
                page_title: window.document.title,
                page_location: window.location.href,
                page_path: window.location.pathname,
            });
        }
    }, [window && window.location && window.location.href]);

    return <ContentWrapperDiv>{children}</ContentWrapperDiv>;
};
