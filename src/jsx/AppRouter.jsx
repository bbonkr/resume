import React, { useState, useCallback } from 'react';
import {
    BrowserRouter as Router,
    HashRouter,
    withRouter,
    Route,
    Link,
} from 'react-router-dom';
import { Layout, Menu, Icon, Avatar, Divider, Drawer } from 'antd';
import styled from 'styled-components';
import Home from './Home';
import Bio from './Bio';
import Education from './Education';
import Career from './Career';
import Portfolio from './Portfolio';
import LeftMenu from '../components/LeftMenu';
import Name from '../components/Name';

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
    cursor: pointer;
    transition: color 0.3s;
`;

const HeaderTitle = styled.h1`
    font-size: 1.4rem;
    line-height: 64px;
`;

const AppRouter = ({ location, history }) => {
    const [siderCollapsed, setSiderCollapsed] = useState(false);
    const [responsivebroken, setResponsiveBroken] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);

    const onToggleSider = () => {
        setShowDrawer(true);
    };

    const onBreakpoint = broken => {
        // console.log('onBreakpoint', broken);
        setResponsiveBroken(broken);
        setSiderCollapsed(broken);
        if (!broken) {
            setShowDrawer(false);
        }
    };

    const onCollapseSider = (collapsed, type) => {
        // console.log(collapsed, type);
    };

    const onClickMenuItem = item => {
        // console.log('menu item: ', item);
        // console.log('history: ', history);

        setShowDrawer(false);
    };

    const onCloaseDrawer = () => {
        setShowDrawer(false);
    };

    return (
        <HashRouter>
            <AppLayout>
                <LeftSider
                    theme="light"
                    trigger={null}
                    breakpoint="lg"
                    collapsedWidth="0"
                    collapsible
                    collapsed={siderCollapsed}
                    onBreakpoint={onBreakpoint}
                    onCollapse={onCollapseSider}>
                    <LeftMenu onClickMenuItem={onClickMenuItem} />
                </LeftSider>
                <Layout>
                    <Layout.Header style={{ background: '#fff', padding: 0 }}>
                        <div
                            style={{
                                float: 'left',
                                padding: '0 0.9rem',
                                display: 'block',
                            }}>
                            &nbsp;
                        </div>
                        {responsivebroken && (
                            <div style={{ float: 'left' }}>
                                <ToggleIcon
                                    className="trigger"
                                    type={
                                        siderCollapsed
                                            ? 'menu-unfold'
                                            : 'menu-fold'
                                    }
                                    onClick={onToggleSider}
                                />
                            </div>
                        )}

                        <div style={{ float: 'left', padding: '0 0.9rem' }}>
                            <HeaderTitle>
                                안녕하세요. <Name name={Data.me.name} /> 입니다.
                            </HeaderTitle>
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
                    <Drawer
                        placement="left"
                        bodyStyle={{ padding: '0' }}
                        closable={false}
                        maskClosable={true}
                        onClose={onCloaseDrawer}
                        visible={showDrawer}>
                        <LeftMenu onClickMenuItem={onClickMenuItem} />
                    </Drawer>
                </Layout>
            </AppLayout>
        </HashRouter>
    );
};

export default AppRouter;
