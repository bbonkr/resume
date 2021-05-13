import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { data } from '../../data/data';
import { Position, RouteData } from '../../interfaces';
// import { Footer } from '../Footer';
// import { Header } from '../Header';
import smoothscroll from 'smoothscroll-polyfill';
import { Loading } from '../Loading';
import { Header, Container, Content, Footer } from '../Layouts';
// import { Content } from '../Content';
// import { Content } from '../Content';
import { Home } from '../Home';
import { SkillStack } from '../SkillStack';
import { CardContent } from '../CardContent';
import { LeftPane } from '../LeftPane';

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
        // setScrollPosition((prevState) => ({
        //     ...prevState,
        //     top: 0,
        //     left: 0,
        // }));
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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
                    <Container classNames={['is-fullhd', 'pt-6']}>
                        <Switch>
                            <Route exact path="/">
                                {/* <Home record={data} useHero heroColor="is-link" />
                                <SkillStack {...data.skillStack} useHero heroColor="is-primary" />
                                <CardContent {...data.education} useHero heroColor="is-success" />
                                <CardContent {...data.career} useHero heroColor="is-info" />
                                <CardContent {...data.project} useHero heroColor="is-warning" />
                                <CardContent {...data.portfolio} useHero heroColor="is-danger" /> */}
                                <LeftPane record={data} />
                            </Route>
                            <Route exact path="/introduction">
                                <Home record={data} useHero heroColor="is-link" />
                            </Route>

                            <Route exact path="/skill">
                                <SkillStack {...data.skillStack} useHero heroColor="is-primary" />
                            </Route>

                            <Route exact path="/education">
                                <CardContent {...data.education} useHero heroColor="is-success" />
                            </Route>

                            <Route exact path="/work">
                                <CardContent {...data.career} useHero heroColor="is-info" />
                            </Route>

                            <Route exact path="/project">
                                <CardContent {...data.project} useHero heroColor="is-warning" />
                            </Route>

                            <Route exact path="/portfolio">
                                <CardContent {...data.portfolio} useHero heroColor="is-danger" />
                            </Route>
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Container>
                    <Footer record={data} onClickScrollToTop={handleClickScrollTop} />
                </>
            ) : (
                <Loading />
            )}
        </Router>
    );
};
