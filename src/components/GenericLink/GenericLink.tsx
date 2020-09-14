import React from 'react';
import { Link } from '../../interfaces/Data';
import { FaBlog, FaHome, FaGithub, FaWindows, FaApple, FaExternalLinkAlt } from 'react-icons/fa';
import { MdEmail, MdWeb, MdAndroid } from 'react-icons/md';

interface GenericLinkProps {
    record: Link;
}

export const GenericLink = ({ record }: GenericLinkProps) => {
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
            }
        }
        return undefined;
    };
    return (
        <a href={record.href} target={record.target || '_blank'}>
            {renderIcon()} {record.title}
            {(!record.target || record.target !== '_self') && (
                <span className="ml-5">
                    <FaExternalLinkAlt />
                </span>
            )}
        </a>
    );
};
