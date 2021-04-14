import React, { useEffect, useState } from 'react';
import halfmoon from 'halfmoon';
import { HashRouter as Router } from 'react-router-dom';
import { MainLayout } from '../MainLayout';
import { ContentWrapper } from '../ContentWrapper/';
import { LeftPane } from '../LeftPane';
import { RightPane } from '../RightPane';
import { data } from '../../data/data';
import { Position } from '../../interfaces';
import { Footer } from '../Footer';
import { Header } from '../Header';
import smoothscroll from 'smoothscroll-polyfill';
import { Loading } from '../Loading';

type Theme = 'dark-mode' | 'light-mode' | undefined | '';

export const ResumeApp = () => {
    const [scrollPosition, setScrollPosition] = useState<Position>({ top: 0, left: 0 });
    const [theme, setTheme] = useState<Theme>(undefined);
    const handleClickScrollTop = () => {
        setScrollPosition((prevState) => ({
            ...prevState,
            top: 0,
            left: 0,
        }));
    };

    useEffect(() => {
        const bodyEl = document.querySelector('body');

        if (bodyEl) {
            bodyEl.setAttribute(
                'class',
                'with-custom-webkit-scrollbars with-custom-css-scrollbars',
            );
            bodyEl.setAttribute('data-set-preferred-theme-onload', 'true');
        }

        halfmoon.onDOMContentLoaded();
        smoothscroll.polyfill();

        const currentTheme = halfmoon.readCookie('halfmoon_preferredMode');
        console.info('halfmoon_preferredMode: ', currentTheme);
        setTheme((_) => (currentTheme as Theme) ?? 'light-mode');

        if (currentTheme === 'dark-mode' && halfmoon.darkModeOn === 'no') {
            halfmoon.toggleDarkMode();
        }

        console.info('🌈 App started. 🌠');
    }, []);

    return (
        <Router>
            {theme ? (
                <MainLayout>
                    <Header record={data} />
                    <ContentWrapper record={data} scrollPosition={scrollPosition}>
                        <div className="row flex-grow-1">
                            <LeftPane record={data} />
                            <RightPane record={data} />
                        </div>
                    </ContentWrapper>
                    <Footer record={data} onClickScrollToTop={handleClickScrollTop} />
                </MainLayout>
            ) : (
                <Loading />
            )}
        </Router>
    );
};
