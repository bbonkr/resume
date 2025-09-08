import * as React from 'react';

import { UiHelper } from '../../libs/UiHelper';

interface LayoutProps {
    className?: string;
    classNames?: string[];
}

export const Layout = ({
    className,
    classNames,
    children,
}: React.PropsWithChildren<LayoutProps>) => {
    return (
        <main className={`${className} ${UiHelper.GetClassNames(...(classNames ?? []))}`}>
            {children}
        </main>
    );
};
