import React, { PropsWithChildren } from 'react';

type ContentSizes = 'small' | 'medium' | 'large';
type OrderedListAlternatives = 'lower-alpha' | 'lower-roman' | 'upper-alpha' | 'upper-roman';

interface ContentProps {
    size?: ContentSizes;
    orderedListalternative?: OrderedListAlternatives;
}

export const Content = ({
    size,
    orderedListalternative,
    children,
}: PropsWithChildren<ContentProps>) => {
    return (
        <div
            className={`content ${
                size === 'small'
                    ? 'is-small'
                    : size === 'medium'
                    ? 'is-medium'
                    : size === 'large'
                    ? 'is-large'
                    : ''
            } ${
                orderedListalternative === 'lower-alpha'
                    ? 'is-lower-alpha'
                    : orderedListalternative === 'lower-roman'
                    ? 'is-lower-roman'
                    : orderedListalternative === 'upper-alpha'
                    ? 'is-upper-alpha'
                    : orderedListalternative === 'upper-roman'
                    ? 'is-upper-roman'
                    : ''
            }`}
        >
            {children}
        </div>
    );
};
