import React, { useState } from 'react';
import { Data } from '../../interfaces/Data';
import { Content } from './Content';
import { GenericLink } from '../GenericLink';
import { ScrollToTop } from '../ScrollToTop';
import { Link as LinkModel } from '../../interfaces';

interface FooterProps {
    record?: Data | null;
    gaEnabled?: boolean;
    onClickScrollToTop?: () => void;
}

export const Footer = ({ record, gaEnabled, onClickScrollToTop }: FooterProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggleDropdown = () => {
        // setIsOpen((prevState) => !prevState);
    };

    return (
        <footer className="footer p-5">
            <Content
                classNames={[
                    'is-flex',
                    'is-flex-direction-row',
                    'is-justify-content-space-between',
                ]}
            >
                <div className={`dropdown is-hoverable is-up ${isOpen ? 'is-active' : ''}`}>
                    <div className="dropdown-trigger">
                        <button
                            className="button"
                            aria-haspopup="true"
                            aria-controls="dropdown-menu"
                            onClick={handleToggleDropdown}
                        >
                            <span>Contact</span>
                            <span className="icon is-small">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            {record?.home?.links?.map((link) => (
                                <GenericLink
                                    key={link.href}
                                    className="dropdown-item"
                                    record={link}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <span className="navbar-text ml-auto">
                        &copy; {record?.me?.name}, All rights reserved
                    </span>
                </div>
                <div>
                    <ScrollToTop
                        containerClassName="navbar-content"
                        show
                        onClick={onClickScrollToTop}
                    />
                </div>
            </Content>
        </footer>
    );
};
