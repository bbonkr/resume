import React, { useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Summary } from '../Summary';
import { Details } from '../Details';
import { data } from '../../data/data';
import { Footer, Header, MainLayout, Container } from '../Layouts';
import smoothscroll from 'smoothscroll-polyfill';
import { Helmet } from 'react-helmet';
import { ScrollToTop } from '../ScrollToTop';

export const ResumeApp = () => {
    const handleClickScrollToTop = () => {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        smoothscroll.polyfill();

        console.info('🌈 App started. 🌠');
    }, []);

    return (
        <Router>
            <Helmet>
                <body className="d-flex flex-column h-100" />
            </Helmet>
            <Header />
            <MainLayout>
                <Container fullWidth>
                    <div className="row">
                        <div className="col-12 col-lg-4 order-1 order-lg-1 p-0 mb-5">
                            <Summary record={data} />
                        </div>
                        <div className="col-12 col-lg-8 order-2 order-lg-2 p-0 mb-5">
                            <Details record={data} />
                        </div>
                    </div>
                </Container>
            </MainLayout>
            <Footer
            //  onClickScrollToTop={handleClickScrollTop}
            />
            <ScrollToTop
                show
                onClick={handleClickScrollToTop}
                containerStyle={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                }}
            />
        </Router>
    );
};
