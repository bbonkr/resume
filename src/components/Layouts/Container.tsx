import React, { PropsWithChildren } from 'react';

interface ContainerPorps {
    title?: React.ReactNode;
    fullWidth?: boolean;
    className?: string;
}

export const Container = ({
    title,
    fullWidth,
    children,
    className,
}: PropsWithChildren<ContainerPorps>) => {
    return (
        <div className={`${fullWidth ? 'container-fluid' : 'container'} ${className ?? ''}`}>
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
