import React from 'react';

interface ContentProps {
    title?: React.ReactNode;
}

export const Content: React.FC<ContentProps> = ({ title, children }) => {
    return (
        <div className="content">
            {title && <h2 className="content-title">{title}</h2>}
            {children}
        </div>
    );
};
