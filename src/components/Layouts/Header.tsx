import React, { useEffect, useState } from 'react';
import { Data, RouteData } from '../../interfaces';
import { GenericLink } from '../GenericLink';

interface HeaderProps {
    record: Data;
    menuRoutes: RouteData[];
    gaEnabled?: boolean;
}

export const Header = ({ record, menuRoutes, gaEnabled }: HeaderProps) => {
    const [navbarMenuIsActive, setNavbarMenuIsActive] = useState(false);
    const handleClickMenu = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        setNavbarMenuIsActive((prevState) => false);
    };

    const handleToggleMenu = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        setNavbarMenuIsActive((prevState) => !prevState);
    };

    const handleClickOuter = () => {
        setNavbarMenuIsActive((_) => false);
    };

    const handleWindowResize = () => {
        const headerNavElement = document.querySelector<HTMLDivElement>('#header-nav');
        if (headerNavElement) {
            const styles = window.getComputedStyle(headerNavElement);
            const displayValue = styles.getPropertyValue('display');

            if (displayValue === 'flex') {
                setNavbarMenuIsActive((_) => false);
            }
        }
    };

    useEffect(() => {
        // let observer: MutationObserver;

        // const headerNavElement = document.querySelector<HTMLDivElement>('#header-nav');
        // if (headerNavElement) {
        //     const config: MutationObserverInit = {
        //         attributes: true,
        //         childList: true,
        //         characterData: true,
        //     };
        //     const callback = (mutations: MutationRecord[], observer: MutationObserver) => {
        //         console.info(observer);
        //         for (const mutation of mutations) {
        //             if (mutation.type === 'childList') {
        //                 console.info('observer childList');
        //             }
        //             if (mutation.type === 'attributes') {
        //                 console.info('observer attributeName', mutation.attributeName);
        //             }
        //         }
        //     };
        //     observer = new MutationObserver(callback);
        //     observer.observe(headerNavElement, config);
        // }

        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();

        return () => {
            // if (observer) {
            //     observer.disconnect();
            // }
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <>
            {navbarMenuIsActive && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: '#000000',
                        opacity: 0.7,
                        zIndex: 1000,
                    }}
                    onClick={handleClickOuter}
                ></div>
            )}
            <nav
                className="navbar is-fixed-top has-dropdown"
                id="header-nav"
                role="navigation"
                aria-label="main navigation"
                style={{ zIndex: 1001 }}
            >
                <div className="navbar-brand">
                    <GenericLink
                        record={{ href: '/', title: '' }}
                        className="navbar-item"
                        onClick={handleClickMenu}
                    >
                        <img src={record.me.photo} width="auto" height="28" />
                    </GenericLink>

                    <a
                        role="button"
                        className={`navbar-burger ${navbarMenuIsActive ? 'is-active' : ''}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarMainHeader"
                        onClick={handleToggleMenu}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div
                    id="navbarMainHeader"
                    className={`navbar-menu ${navbarMenuIsActive ? 'is-active' : ''}`}
                    onBlurCapture={() => setNavbarMenuIsActive((_) => false)}
                >
                    <div className="navbar-start">
                        {menuRoutes.map((menu) => {
                            return (
                                <GenericLink
                                    className="navbar-item"
                                    record={{ href: menu.path, title: menu.title }}
                                    key={menu.path}
                                    onClick={handleClickMenu}
                                />
                            );
                        })}
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons"></div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
