import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Avatar, Anchor, Affix } from 'antd';
import { Name } from './Name';
import { ClickParam } from 'antd/lib/menu';
import { Me as MeModel } from '../interfaces/Data';

interface LeftMenuProps {
    me: MeModel;
    /**
     * 메뉴 항목 클릭
     *
     * @memberof LeftMenuPros
     */
    onClickMenuItem?: () => void;
}

export const LeftMenu = ({ me, onClickMenuItem }: LeftMenuProps) => {
    const onClickMenu = (param: ClickParam): void => {
        if (onClickMenuItem) {
            onClickMenuItem();
        }
    };

    return (
        <Fragment>
            <div style={{ padding: '0.7rem 2.0rem', textAlign: 'center' }}>
                {me.photo && <Avatar src={me.photo} size="large" />}
            </div>

            <div
                style={{
                    textAlign: 'center',
                }}
            >
                <p>
                    안녕하세요. <br />
                    <Name name={me.name} /> 입니다.
                </p>
            </div>

            <Menu mode="inline" onClick={onClickMenu}>
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
                <Menu.Item key="techstack">
                    <Link to="/techstack/">Tech Stack</Link>
                </Menu.Item>
            </Menu>
        </Fragment>
    );
};
