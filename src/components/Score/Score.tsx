import React from 'react';
interface ScoreProps {
    score: number;
    max: number;
    icon: React.ReactNode;
    onClassName?: string;
    offClassName?: string;
}
export const Score = ({ score, max, icon, onClassName, offClassName }: ScoreProps) => {
    return (
        <span>
            {Array(max)
                .fill(0)
                .map((x, index) => {
                    const className =
                        score >= index + 1
                            ? `${onClassName ?? 'has-text-info'}`
                            : `${offClassName ?? 'has-text-light'}`;
                    return (
                        <span key={`icon-${index + 1}`} className={`${className}`}>
                            {icon}
                        </span>
                    );
                })}
        </span>
    );
};
