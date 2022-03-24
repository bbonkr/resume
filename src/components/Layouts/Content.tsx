import React, { PropsWithChildren } from 'react';
import { UiHelper } from '../../libs/UiHelper';

type ContentSizes = 'small' | 'medium' | 'large';
type OrderedListAlternatives = 'lower-alpha' | 'lower-roman' | 'upper-alpha' | 'upper-roman';

interface ContentProps {
    size?: ContentSizes;
    orderedListalternative?: OrderedListAlternatives;
    className?: string;
    classNames?: string[];
}

export const Content = ({
    size,
    orderedListalternative,
    classNames,
    className,
    children,
}: PropsWithChildren<ContentProps>) => {
    return (
        <div
            className={`${className ?? ''} content ${
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
            } ${UiHelper.GetClassNames(...(classNames ?? []))}`}
        >
            {children}
        </div>
    );
};
