import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Data, Position, RouteData } from '../../interfaces';
import smoothscroll from 'smoothscroll-polyfill';
import { Loading } from '../Loading';
import { Header, Container, Footer, GoogleAnalyticsProviderWithRouter } from '../Layouts';
import { Home } from '../Home';
import { SkillStack } from '../SkillStack';
import { CardContent } from '../CardContent';
import { Summary } from '../Summary';
import { useStore } from '../../store';
import { useApi } from '../../hooks/useApi';
import { data as localData } from '../../data/data';

type Theme = 'dark-mode' | 'light-mode' | undefined | '';
const gaid = process.env.GAID;

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
    {
        title: 'Certificate',
        path: '/certificate',
    },
];

export const ResumeApp = () => {
    const store = useStore();
    const { resume, isLoading, error } = useApi();

    const [data, setData] = useState<Data | null>(() => localData);
    const [theme, setTheme] = useState<Theme>(undefined);

    const handleClickScrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        smoothscroll.polyfill();

        console.info('🌈 App started. 🌠');

        setTheme((_) => 'light-mode');
    }, []);

    useEffect(() => {
        if (error) {
            console.info('Api not wokring!. use local data');

            setData((_) => localData);
        }
    }, [error]);

    useEffect(() => {
        if (resume) {
            console.info('Api not wokring!. use local data');

            setData((_) => resume);
        }
    }, [resume]);

    // useEffect(() => {
    //     console.info('data:', data);
    // }, [data]);

    return (
        <Provider store={store}>
            <HelmetProvider>
                <Router>
                    <Helmet titleTemplate={`%s | ${data?.me?.name} 이력서`} />

                    {!theme || (!data && isLoading) ? (
                        <Loading />
                    ) : (
                        <GoogleAnalyticsProviderWithRouter gaid={gaid}>
                            <Header record={data} menuRoutes={routes} />
                            <Container classNames={['is-fluid', 'pt-6', 'pl-0', 'pr-0', 'm-0']}>
                                <Switch>
                                    <Route exact path="/">
                                        <Summary record={data} title="안녕하세요" />
                                    </Route>
                                    <Route exact path="/introduction">
                                        <Home
                                            record={data}
                                            useHero
                                            heroColor="is-link"
                                            title={'Introduction'}
                                        />
                                    </Route>

                                    <Route exact path="/skill">
                                        <SkillStack
                                            title={data?.skillStack?.title ?? ''}
                                            record={data?.skillStack}
                                            useHero
                                            heroColor="is-success"
                                            iconColor="has-text-success"
                                        />
                                    </Route>

                                    <Route exact path="/education">
                                        <CardContent
                                            record={data?.education}
                                            title={data?.education?.title}
                                            useHero
                                            heroColor="is-primary"
                                        />
                                    </Route>

                                    <Route exact path="/work">
                                        <CardContent
                                            record={data?.career}
                                            title={data?.career?.title}
                                            useHero
                                            heroColor="is-info"
                                        />
                                    </Route>

                                    <Route exact path="/project">
                                        <CardContent
                                            record={data?.project}
                                            title={data?.project?.title}
                                            useHero
                                            heroColor="is-warning"
                                        />
                                    </Route>

                                    <Route exact path="/portfolio">
                                        <CardContent
                                            record={data?.portfolio}
                                            title={data?.portfolio?.title}
                                            useHero
                                            heroColor="is-danger"
                                        />
                                    </Route>
                                    <Route exact path="/certificate">
                                        <CardContent
                                            record={data?.certificate}
                                            title={data?.certificate?.title}
                                            useHero
                                            heroColor="is-link"
                                        />
                                    </Route>
                                    <Redirect from="*" to="/" />
                                </Switch>
                            </Container>
                            <Footer record={data} onClickScrollToTop={handleClickScrollTop} />
                        </GoogleAnalyticsProviderWithRouter>
                    )}
                </Router>
            </HelmetProvider>
        </Provider>
    );
};
