import React, { Fragment } from 'react';
import { Icon } from 'antd';

const LinkAnchor = ({ title, href, icon, target }) => {
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

export default LinkAnchor;
