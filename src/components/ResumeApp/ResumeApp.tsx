import React, { useEffect } from 'react';
import halfmoon from 'halfmoon';
import { MainLayout } from '../MainLayout';
import { SideBar } from '../SideBar';
import { ContentWrapper } from '../ContentWrapper/';
import { Header } from '../Header';

export const ResumeApp = () => {
    useEffect(() => {
        halfmoon.onDOMContentLoaded();
    }, []);

    return (
        <MainLayout>
            <React.Fragment>
                <Header />
                <SideBar />
                <ContentWrapper>
                    <p>Hello wolrd</p>
                </ContentWrapper>
            </React.Fragment>
        </MainLayout>
    );
};
