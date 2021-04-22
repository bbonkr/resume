import React, { PropsWithChildren } from 'react';
import { Link as LinkModel } from '../../interfaces/Data';
import {
    FaBlog,
    FaHome,
    FaGithub,
    FaWindows,
    FaApple,
    FaExternalLinkAlt,
    FaNpm,
} from 'react-icons/fa';
import { MdEmail, MdWeb, MdAndroid } from 'react-icons/md';
import { SiNuget } from 'react-icons/si';
import { Link } from 'react-router-dom';

interface GenericLinkProps {
    record: LinkModel;
    className?: string;
}

export const GenericLink = ({
    record,
    className,
    children,
}: PropsWithChildren<GenericLinkProps>) => {
    const renderIcon = () => {
        if (record.icon) {
            switch (record.icon) {
                case 'mail':
                    return <MdEmail />;
                case 'blog':
                    return <FaBlog />;
                case 'github':
                    return <FaGithub />;
                case 'home':
                    return <FaHome />;
                case 'site':
                    return <MdWeb />;
                case 'android':
                    return <MdAndroid />;
                case 'windows':
                    return <FaWindows />;
                case 'ios':
                    return <FaApple />;
                case 'npm':
                    return <FaNpm />;
                case 'nuget':
                    return <SiNuget />;
            }
        }
        return undefined;
    };

    const handleClick = () => {
        const collapseElement = document.querySelector('#navbarCollapse');
        if (collapseElement) {
            collapseElement.classList.remove('show');
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return record.href.startsWith('/') ? (
        <Link to={record.href} className={`${className ?? ''}`} onClick={handleClick}>
            {record.title}
            {children}
        </Link>
    ) : (
        <a
            className={`${className ?? ''}`}
            href={record.href}
            target={record.target || '_blank'}
            onClick={handleClick}
        >
            {record.icon && <span className="me-1 fs-6">{renderIcon()}</span>}{' '}
            <span className="me-1">{record.title}</span>
            {(!record.target || record.target !== '_self') && (
                <span>
                    <FaExternalLinkAlt className="fs-6" />
                </span>
            )}
        </a>
    );
};
