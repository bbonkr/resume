import React from 'react';
import { Data } from '../../interfaces/Data';
import { GenericLink } from '../GenericLink';

interface FooterProps {
    record: Data;
}
export const Footer = ({ record }: FooterProps) => {
    return (
        <nav className="navbar navbar-static-bottom flex-shrink-0">
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

                <span className="navbar-text">&copy; {record.me.name}, All rights reserved</span>
            </div>
        </nav>
    );
};
