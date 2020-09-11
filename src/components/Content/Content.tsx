import React from 'react';

interface ContentProps {
    title?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export const Content: React.FC<ContentProps> = ({ title, className, style, children }) => {
    return (
        <div className={`content ${className ?? ''}`} style={{ ...(style ?? {}) }}>
            {title && <h2 className="content-title">{title}</h2>}
            {children}
        </div>
    );
};
