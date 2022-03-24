import * as React from 'react';
import { UiHelper } from '../../libs/UiHelper';

interface SectionProps {
    id: string;
    className?: string;
    classNames?: string[];
}

export const Section = ({
    id,
    className,
    classNames,
    children,
}: React.PropsWithChildren<SectionProps>) => {
    return (
        <section
            id={id}
            className={`${className} ${UiHelper.GetClassNames(...(classNames ?? []))}`}
        >
            <div className="pt-8">{children}</div>
        </section>
    );
};
