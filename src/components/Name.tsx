import React from 'react';

interface NameProps {
    name: string;
}

export const Name: React.FC<NameProps> = ({ name }) => {
    return <span>&lt;{name} /&gt;</span>;
};
