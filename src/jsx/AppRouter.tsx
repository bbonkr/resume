import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, HashRouter, withRouter, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import { Bio } from './Bio';
import { Education } from './Education';
import { Career } from './Career';
import { Portfolio } from './Portfolio';
import { TechStack } from './TechStack';
import { LeftMenu } from '../components/LeftMenu';
import { Name } from '../components/Name';
import { data } from '../data/data';

export const AppRouter = () => {
    const [siderCollapsed, setSiderCollapsed] = useState(false);
    const [responsivebroken, setResponsiveBroken] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);

    const handleToggleSider = () => {
        setShowDrawer(true);
    };

    const handleBreakpoint = (broken: boolean): void => {
        // console.log('onBreakpoint', broken);
        setResponsiveBroken(broken);
        setSiderCollapsed(broken);
        if (!broken) {
            setShowDrawer(false);
        }
    };

    // const handleCollapseSider = (collapsed: boolean, type: CollapseType): void => {
    //     // console.log(collapsed, type);
    // };

    const handleClickMenuItem = (): void => {
        // console.log('menu item: ', item);
        // console.log('history: ', history);

        setShowDrawer(false);
    };

    const handleCloaseDrawer = (e: any): void => {
        setShowDrawer(false);
    };

    return (
        <HashRouter>
            {/* <AppLayout> */}
            {/* <LeftSider
                    theme="light"
                    trigger={null}
                    breakpoint="lg"
                    collapsedWidth="0"
                    collapsible
                    collapsed={siderCollapsed}
                    onBreakpoint={handleBreakpoint}
                    onCollapse={handleCollapseSider}
                >
                    <LeftMenu me={data.me} onClickMenuItem={handleClickMenuItem} />
                </LeftSider> */}
            {/* <Layout>
                    <Layout.Header style={{ background: '#fff', padding: 0 }}>
                        <div
                            style={{
                                float: 'left',
                                padding: '0 0.9rem',
                                display: 'block',
                            }}
                        >
                            &nbsp;
                        </div>
                        {responsivebroken && (
                            <div style={{ float: 'left' }}>
                                <ToggleIcon
                                    className="trigger"
                                    type={siderCollapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={handleToggleSider}
                                />
                            </div>
                        )}

                        <div style={{ float: 'left', padding: '0 0.9rem' }}>
                            <HeaderTitle>
                                안녕하세요. <Name name={data.me.name} /> 입니다.
                            </HeaderTitle>
                        </div>
                    </Layout.Header>

                    <Layout.Content>
                        <BackTop />
                        <Route path="/" exact component={() => <Home record={data.home} />} />
                        <Route path="/bio/" component={() => <Bio record={data.bio} />} />
                        <Route path="/education/" component={() => <Education records={data.education} />} />
                        <Route path="/career/" component={() => <Career records={data.career} />} />
                        <Route path="/portfolio/" component={() => <Portfolio records={data.portfolio} />} />
                        <Route path="/techstack/" component={() => <TechStack records={data.techStack} />} />
                    </Layout.Content> */}
            {/* <Layout.Footer>Footer</Layout.Footer> */}
            {/* <Drawer
                        placement="left"
                        bodyStyle={{ padding: '0' }}
                        closable={false}
                        maskClosable={true}
                        onClose={handleCloaseDrawer}
                        visible={showDrawer}
                    >
                        <LeftMenu me={data.me} onClickMenuItem={handleClickMenuItem} />
                    </Drawer> */}
            {/* </Layout> */}
            {/* </AppLayout> */}
        </HashRouter>
    );
};
