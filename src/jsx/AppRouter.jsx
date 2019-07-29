import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    HashRouter,
    withRouter,
    Route,
    Link,
} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import styled from 'styled-components';
import Bio from './Bio';
import Education from './Education';
import Career from './Career';
import 'antd/dist/antd.css';

const AppLayout = styled(Layout)`
    min-height: 100vh;
`;

const LeftSider = styled(Layout.Sider)`
    min-height: 100vh;
`;

const ToggleIcon = styled(Icon)`
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
`;

const AppRouter = ({ location }) => {
    const [siderCollapsed, setSiderCollapsed] = useState(false);
    const [responsivebroken, setResponsiveBroken] = useState(false);
    const onToggleSider = () => {
        setSiderCollapsed(!siderCollapsed);
    };

    const onBreakpoint = broken => {
        setResponsiveBroken(broken);
    };

    const onCollapseSider = (collapsed, type) => {
        console.log(collapsed, type);
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
                    <Menu mode="inline">
                        <Menu.Item key="home">
                            <Link to="/">Home</Link>
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
                    </Menu>
                </LeftSider>
                <Layout>
                    <Layout.Header style={{ background: '#fff', padding: 0 }}>
                        <ToggleIcon
                            className="trigger"
                            type={siderCollapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={onToggleSider}
                        />
                    </Layout.Header>
                    <Layout.Content>
                        <Route path="/" exact component={Bio} />
                        <Route path="/bio/" component={Bio} />
                        <Route path="/education/" component={Education} />
                        <Route path="/career/" component={Career} />
                    </Layout.Content>
                    <Layout.Footer>Footer</Layout.Footer>
                </Layout>
            </AppLayout>
        </HashRouter>
    );
};

export default AppRouter;
