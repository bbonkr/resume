import React from 'react';
import { data } from '../../data/data';
import { GenericLink } from '../GenericLink';

export const Footer = () => {
    const {
        me: { name },
        home: { links },
    } = data;

    return (
        <footer className="footer mt-auto py-3 bg-light">
            <div className="container d-flex flex-row justify-content-between">
                <div className="dropdown dropup with-arrow">
                    <button
                        id="btn-contact-dropdown"
                        className="btn"
                        data-toggle="dropdown"
                        type="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Contact
                        <i className="fa fa-angle-down ml-5" aria-hidden="true"></i>
                    </button>
                    <div
                        className="dropdown-menu dropdown-menu-left"
                        aria-labelledby="btn-contact-dropdown"
                    >
                        {links?.map((link) => (
                            <GenericLink key={link.href} className="dropdown-item" record={link} />
                        ))}
                    </div>
                </div>

                <div className="d-flex flex-row flex-grow">
                    <span className="me-3 align-text-bottom">
                        &copy; {name}, All rights reserved
                    </span>
                </div>
            </div>
        </footer>
    );
};
