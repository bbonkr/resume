import React from 'react';
import { Link } from '../../interfaces/Data';
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

interface GenericLinkProps {
    record: Link;
    className?: string;
}

export const GenericLink = ({ record, className }: GenericLinkProps) => {
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
    return (
        <a
            className={`d-flex flex-row flex-justify-center flex-align-baseline ${className ?? ''}`}
            href={record.href}
            target={record.target || '_blank'}
        >
            {record.icon && <span className="mr-5">{renderIcon()}</span>}{' '}
            <span className="mr-5">{record.title}</span>
            {(!record.target || record.target !== '_self') && (
                <span>
                    <FaExternalLinkAlt />
                </span>
            )}
        </a>
    );
};
