import React, { PropsWithChildren } from 'react';

interface ContentProps {
    title?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export const Content = ({ title, className, style, children }: PropsWithChildren<ContentProps>) => {
    return (
        <div className={`content ${className ?? ''}`} style={{ ...(style ?? {}) }}>
            {typeof title === 'string' ? (
                <h2 className="content-title">{title}</h2>
            ) : title ? (
                <React.Fragment>{title}</React.Fragment>
            ) : (
                <React.Fragment></React.Fragment>
            )}
            {children}
        </div>
    );
};
