import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Avatar, Anchor, Affix } from 'antd';
import Name from '../components/Name';
import Data from '../data/bbon.json';

const LeftMenu = ({ onClickMenuItem }) => {
    const onClickMenu = item => {
        if (onClickMenuItem) {
            onClickMenuItem(item);
        }
    };
    return (
        <Fragment>
            <div style={{ padding: '0.7rem 2.0rem', textAlign: 'center' }}>
                {Data.me.photo && <Avatar src={Data.me.photo} size="large" />}
            </div>

            <div
                style={{
                    textAlign: 'center',
                }}>
                <p>
                    안녕하세요. <br />
                    <Name name={Data.me.name} /> 입니다.
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
            </Menu>
        </Fragment>
    );
};

export default LeftMenu;
