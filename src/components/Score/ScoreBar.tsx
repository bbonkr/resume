import * as React from 'react';

interface ScoreBarProps {
    value?: number;
    maxValue?: number;
    className?: string;
}

export const ScoreBar = ({ className, value, maxValue }: ScoreBarProps) => {
    const percent =
        (maxValue ?? 0) === 0 ? 0 : (((value ?? 0) * 1.0) / (maxValue ?? 1)) * 1.0 * 100.0;

    return (
        <span
            className={`${className} inline-block absolute top-0 left-0`}
            style={{ width: `${percent}%` }}
        ></span>
    );
};
