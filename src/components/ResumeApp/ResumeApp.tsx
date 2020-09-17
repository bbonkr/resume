import React, { useEffect } from 'react';
import halfmoon from 'halfmoon';
import { HashRouter as Router } from 'react-router-dom';
import { MainLayout } from '../MainLayout';
import { ContentWrapper } from '../ContentWrapper/';
import { LeftPane } from '../LeftPane';
import { RightPane } from '../RightPane';
import { data } from '../../data/data';
import { Footer } from '../Footer';
import { Header } from '../Header';

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
    }, []);

    return (
        <Router>
            <MainLayout>
                <ContentWrapper>
                    <Header record={data} />
                    <div className="row flex-grow-1">
                        <LeftPane record={data} />
                        <RightPane record={data} />
                    </div>
                    {/* <Footer record={data} /> */}
                </ContentWrapper>
            </MainLayout>
        </Router>
    );
};
