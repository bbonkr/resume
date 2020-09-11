import React from 'react';
interface ScoreProps {
    score: number;
    max: number;
    icon: React.ReactNode;
}
export const Score = ({ score, max, icon }: ScoreProps) => {
    return (
        <span>
            {Array(max)
                .fill(0)
                .map((x, index) => {
                    const className = score >= index + 1 ? 'text-primary' : 'text-mute';
                    return <span className={`${className}`}>{icon}</span>;
                })}
        </span>
    );
};
