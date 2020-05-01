import React from 'react';

interface NameProps {
    name: string;
}

export const Name = ({ name }: NameProps) => {
    return <span>&lt;{name} /&gt;</span>;
};
