import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { data } from '../../data/data';
import { Position, RouteData } from '../../interfaces';
import { Footer } from '../Footer';
// import { Header } from '../Header';
import smoothscroll from 'smoothscroll-polyfill';
import { Loading } from '../Loading';
import { Header, Container, Content } from '../Layouts';
// import { Content } from '../Content';
// import { Content } from '../Content';
import { Home } from '../Home';
import { SkillStack } from '../SkillStack';
import { CardContent } from '../CardContent';

type Theme = 'dark-mode' | 'light-mode' | undefined | '';

const routes: RouteData[] = [
    {
        title: 'Introduction',
        path: '/introduction',
    },
    {
        title: 'Skill',
        path: '/skill',
    },
    {
        title: 'Education',
        path: '/education',
    },
    {
        title: 'Work',
        path: '/work',
    },
    {
        title: 'Project',
        path: '/project',
    },
    {
        title: 'Portfolio',
        path: '/portfolio',
    },
];

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

        smoothscroll.polyfill();

        console.info('🌈 App started. 🌠');

        setTheme((_) => 'light-mode');
    }, []);

    return (
        <Router>
            {theme ? (
                <>
                    <Header record={data} menuRoutes={routes} />
                    <Container classNames={['pt-6']}>
                        <Switch>
                            <Route exact path="/">
                                <Home record={data} />
                                <SkillStack {...data.skillStack} />
                                <CardContent {...data.education} />
                                <CardContent {...data.career} />
                                <CardContent {...data.project} />
                                <CardContent {...data.portfolio} />
                            </Route>
                            <Route exact path="/introduction">
                                <Home record={data} />
                            </Route>

                            <Route exact path="/skill">
                                <SkillStack {...data.skillStack} />
                            </Route>

                            <Route exact path="/education">
                                <CardContent {...data.education} />
                            </Route>

                            <Route exact path="/work">
                                <CardContent {...data.career} />
                            </Route>

                            <Route exact path="/project">
                                <CardContent {...data.project} />
                            </Route>

                            <Route exact path="/portfolio">
                                <CardContent {...data.portfolio} />
                            </Route>
                            <Redirect from="*" to="/" />
                        </Switch>

                        <Footer record={data} onClickScrollToTop={handleClickScrollTop} />
                    </Container>
                </>
            ) : (
                <Loading />
            )}
        </Router>
    );
};
