import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import halfmoon from 'halfmoon';
import ReactGa from 'react-ga';
import smoothscroll from 'smoothscroll-polyfill';

export const MainLayout: React.FC = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        ReactGa.initialize(window.GAID);
        ReactGa.pageview(location.pathname);

        smoothscroll.polyfill();
    }, []);

    useEffect(() => {
        ReactGa.pageview(location.pathname);
        halfmoon.deactivateAllDropdownToggles();
    }, [location]);

    return <div className="page-wrapper with-navbar with-navbar-fixed-bottom">{children}</div>;
};
