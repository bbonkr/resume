import React, { useState, useCallback } from 'react';
import {
    BrowserRouter as Router,
    HashRouter,
    withRouter,
    Route,
    Link,
} from 'react-router-dom';
import { Layout, Menu, Icon, Avatar, Divider } from 'antd';
import styled from 'styled-components';
import Home from './Home';
import Bio from './Bio';
import Education from './Education';
import Career from './Career';
import Portfolio from './Portfolio';

import Data from '../data/bbon.json';
import 'antd/dist/antd.css';

const AppLayout = styled(Layout)`
    min-height: 100vh;
`;

const LeftSider = styled(Layout.Sider)`
    min-height: 100vh;
`;

const ToggleIcon = styled(Icon)`
    font-size: 1.4rem;
    line-height: 64px;
    padding: 0 0.9rem;
    cursor: pointer;
    transition: color 0.3s;
`;

const AppRouter = ({ location, history }) => {
    const [siderCollapsed, setSiderCollapsed] = useState(false);
    const [responsivebroken, setResponsiveBroken] = useState(false);

    const onToggleSider = () => {
        console.log('siderCollapsed: ', siderCollapsed);
        const collapsed = !siderCollapsed;
        setSiderCollapsed(collapsed);
    };

    const onBreakpoint = broken => {
        console.log('onBreakpoint', broken);
        setResponsiveBroken(broken);
        setSiderCollapsed(broken);
    };

    const onCollapseSider = (collapsed, type) => {
        console.log(collapsed, type);
    };

    const onClickMenuItem = item => {
        console.log('menu item: ', item);
        console.log('history: ', history);
        if (!siderCollapsed && responsivebroken) {
            setSiderCollapsed(responsivebroken);
        }
    };

    return (
        <HashRouter>
            <AppLayout>
                <LeftSider
                    trigger={null}
                    breakpoint="lg"
                    collapsedWidth="0"
                    collapsible
                    collapsed={siderCollapsed}
                    onBreakpoint={onBreakpoint}
                    onCollapse={onCollapseSider}>
                    <div style={{ padding: '2.0rem', textAlign: 'center' }}>
                        {Data.me.photo && (
                            <Avatar src={Data.me.photo} size="large" />
                        )}

                        <div
                            style={{
                                color: '#fff',
                                textAlign: 'center',
                                marginTop: '0.7rem',
                            }}>
                            <p>
                                안녕하세요. <br />
                                {Data.me.name} 입니다.
                            </p>
                        </div>
                    </div>

                    <Menu mode="inline" onClick={onClickMenuItem}>
                        <Menu.Item key="home">
                            <Link to="/">Intro</Link>
                        </Menu.Item>
                        <Menu.Item key="bio">
                            <Link to="/bio/">Bio</Link>
                        </Menu.Item>
                        <Menu.Item key="education">
                            <Link to="/education/">Education</Link>
                        </Menu.Item>
                        <Menu.Item key="career">
                            <Link to="/career/">Career</Link>
                        </Menu.Item>
                        <Menu.Item key="portfolio">
                            <Link to="/portfolio/">Portfolio</Link>
                        </Menu.Item>
                    </Menu>
                </LeftSider>
                <Layout>
                    <Layout.Header style={{ background: '#fff', padding: 0 }}>
                        <div style={{ float: 'left' }}>
                            <ToggleIcon
                                className="trigger"
                                type={
                                    siderCollapsed ? 'menu-unfold' : 'menu-fold'
                                }
                                onClick={onToggleSider}
                            />
                        </div>
                        <div style={{ float: 'left' }}>
                            <h1>{Data.me.name}</h1>
                        </div>
                    </Layout.Header>
                    <Layout.Content>
                        <Route path="/" exact component={() => <Home />} />
                        <Route path="/bio/" component={() => <Bio />} />
                        <Route
                            path="/education/"
                            component={() => <Education />}
                        />
                        <Route path="/career/" component={() => <Career />} />
                        <Route
                            path="/portfolio"
                            component={() => <Portfolio />}
                        />
                    </Layout.Content>
                    {/* <Layout.Footer>Footer</Layout.Footer> */}
                </Layout>
            </AppLayout>
        </HashRouter>
    );
};

export default AppRouter;
