import React, { PropsWithChildren } from 'react';
import { UiHelper } from '../../libs/UiHelper';

interface ContainerProps {
    classNames?: string[];
}

export const Container = ({ classNames, children }: PropsWithChildren<ContainerProps>) => {
    return (
        <div className={`container ${UiHelper.GetClassNames(...(classNames ?? []))}`}>
            {children}
        </div>
    );
};
