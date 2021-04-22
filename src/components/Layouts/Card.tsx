import React, { PropsWithChildren } from 'react';

interface CardProps {
    className?: string;
    title?: React.ReactNode;
}

export const Card = ({ title, className, children }: PropsWithChildren<CardProps>) => {
    return (
        <div className={`card ${className ?? ''}`}>
            <div className="card-body">
                {typeof title === 'string' ? (
                    <h5>{title}</h5>
                ) : title ? (
                    <React.Fragment>{title}</React.Fragment>
                ) : (
                    <React.Fragment></React.Fragment>
                )}
                {children}
            </div>
        </div>
    );
};
