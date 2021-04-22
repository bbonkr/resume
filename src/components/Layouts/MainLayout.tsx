import React, { PropsWithChildren } from 'react';

import './MainLayout.css';

interface MainLayoutProps {
    className?: string;
}

export const MainLayout = ({ className, children }: PropsWithChildren<MainLayoutProps>) => {
    return <main className={`flex-shrink-0 ${className ?? ''}`}>{children}</main>;
};
