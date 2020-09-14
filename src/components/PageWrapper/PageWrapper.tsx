import React from 'react';

interface PageWrapperProps {
    withSidebar?: boolean;
    withNavbar?: boolean;
    withNavbarFixedBottom?: boolean;
    sidebarType?:
        | 'default'
        | 'full-height'
        | 'overlayed-all'
        | 'overlayed-sm-and-down'
        | 'full-height overlayed-sm-and-down';
}

export const PageWrapper: React.FC<PageWrapperProps> = ({
    withSidebar,
    withNavbar,
    withNavbarFixedBottom,
    sidebarType,
    children,
}) => {
    const pageWrapperClassName = [
        withSidebar && 'with-sidebar',
        withNavbar && 'with-navbar',
        withNavbarFixedBottom && 'with-navbar-fixed-bottom',
    ];

    const dataSidebarType = !sidebarType || sidebarType === 'default' ? '' : sidebarType;

    return (
        <div
            className={`page-wrapper ${pageWrapperClassName.join(' ')}`}
            data-sidebar-type={dataSidebarType}
        >
            {children}
        </div>
    );
};
