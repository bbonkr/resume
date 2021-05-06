import React, { useEffect, useState } from 'react';

export const Header = () => {
    const [navbarMenuIsActive, setNavbarMenuIsActive] = useState(false);
    const handleClickMenu = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
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
                        position: 'absolute',
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
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a>

                    <a
                        role="button"
                        className={`navbar-burger ${navbarMenuIsActive ? 'is-active' : ''}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                        onClick={handleClickMenu}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div
                    id="navbarBasicExample"
                    className={`navbar-menu ${navbarMenuIsActive ? 'is-active' : ''}`}
                    onBlurCapture={() => setNavbarMenuIsActive((_) => false)}
                >
                    <div className="navbar-start">
                        <a className="navbar-item">Home</a>

                        <a className="navbar-item">Documentation</a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">More</a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">About</a>
                                <a className="navbar-item">Jobs</a>
                                <a className="navbar-item">Contact</a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">Report an issue</a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">Log in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
