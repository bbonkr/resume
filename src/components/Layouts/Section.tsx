import React, { PropsWithChildren } from 'react';

type SectionSize = 'medium' | 'large';

interface SectionProps {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    size?: SectionSize;
}

export const Section = ({ title, subtitle, size, children }: PropsWithChildren<SectionProps>) => {
    return (
        <section
            className={`section ${
                size === 'medium' ? 'is-medium' : size === 'large' ? 'is-large' : ''
            }`}
        >
            {title && <h1 className="title">{title}</h1>}
            {subtitle && <h2 className="subtitle">{subtitle}</h2>}
            {children}
        </section>
    );
};
