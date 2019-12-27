import React, { Fragment } from 'react';
import { Icon } from 'antd';

interface LinkAnchorProps {
    title: string;
    href: string;
    icon: string;
    target?: string;
}

export const LinkAnchor: React.FC<LinkAnchorProps> = ({ title, href, icon, target }) => {
    return (
        <a href={href} title={title} target={target || '_blank'}>
            {icon && (
                <Fragment>
                    <Icon type={icon || 'link'} />{' '}
                </Fragment>
            )}
            {title}
            {!target && (
                <span title="새창으로 열립니다.">
                    {' '}
                    <Icon type="export" />
                </span>
            )}
        </a>
    );
};
