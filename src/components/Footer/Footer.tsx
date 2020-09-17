import React from 'react';
import { Data } from '../../interfaces/Data';
import { GenericLink } from '../GenericLink';
import { ScrollToTop } from '../ScrollToTop';

interface FooterProps {
    record: Data;
    onClickScrollToTop?: () => void;
}

export const Footer = ({ record, onClickScrollToTop }: FooterProps) => {
    return (
        <nav className="navbar navbar-fixed-bottom">
            <div className="container-fluid">
                {record.home.links && record.home.links.length > 0 && (
                    <ul className="navbar-nav ml-auto hidden-sm-and-down">
                        {record.home.links.map((link) => {
                            return (
                                <li key={link.href} className="nav-item">
                                    <GenericLink className="nav-link" record={link} />
                                </li>
                            );
                        })}
                    </ul>
                )}

                <span className="navbar-text ml-auto">
                    &copy; {record.me.name}, All rights reserved
                </span>
                <ScrollToTop
                    containerClassName="navbar-content"
                    show
                    onClick={onClickScrollToTop}
                />
            </div>
        </nav>
    );
};
