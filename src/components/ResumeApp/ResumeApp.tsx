import React, { useEffect } from 'react';
import halfmoon from 'halfmoon';
import { MainLayout } from '../MainLayout';
import { SideBar } from '../SideBar';
import { ContentWrapper } from '../ContentWrapper/';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Content } from '../Content';
import { LeftPane } from '../LeftPane';
import { RightPane } from '../RightPane';

export const ResumeApp = () => {
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

        halfmoon.toggleDarkMode();
    }, []);

    return (
        <MainLayout>
            <ContentWrapper>
                <div className="row">
                    <LeftPane />
                    <RightPane />
                </div>
            </ContentWrapper>
        </MainLayout>
    );
};
