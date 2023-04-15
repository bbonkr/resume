import React, { PropsWithChildren } from 'react';
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
import Link from 'next/link';
import { Link as LinkModel } from '../../interfaces';

interface GenericLinkProps {
    record: LinkModel;
    className?: string;
    onClick?: (_event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const gaId = process.env.NEXT_PUBLIC_GAID;

export const GenericLink = ({
    record,
    className,
    children,
    onClick,
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

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (gaId && typeof window.ga === 'function') {
            window.ga('send', 'event', 'click_link', {
                href: record.href,
                title: record.title,
                debug_mode: process.env.PRODUCTION !== 'production',
            });
        }

        if (onClick) {
            onClick(event);
        }
    };

    const title = record.title.length > 30 ? `${record.title.substring(0, 27)}...` : record.title;

    return record.href.startsWith('/') ? (
        <Link href={record.href} className={className} onClick={handleClick}>
            {children ?? record.title}
        </Link>
    ) : (
        <a
            className={`${className ?? ''}`}
            href={record.href}
            target={record.target || '_blank'}
            onClick={handleClick}
        >
            {children ?? (
                <React.Fragment>
                    {record.icon && <span className=" mr-1">{renderIcon()}</span>}{' '}
                    <span className="mr-1 hidden md:inline-block">{record.title}</span>
                    <span className="mr-1 inline-block md:hidden">{title}</span>
                    {(!record.target || record.target !== '_self') && (
                        <span className="">
                            <FaExternalLinkAlt />
                        </span>
                    )}
                </React.Fragment>
            )}
        </a>
    );
};
