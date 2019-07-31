import React, { Fragment } from 'react';
import { Card, Divider, Icon } from 'antd';
import ContentWrapper from '../components/ContentWrapper';
import Data from '../data/bbon.json';
import LinkAnchor from '../components/LinkAnchor';

const homeData = Data.home;

const Home = () => {
    return (
        <ContentWrapper>
            <Card>
                <p>{homeData.intro}</p>

                {homeData.links && homeData.links.length > 0 && (
                    <div>
                        <h4>관련 사이트</h4>
                        <ul>
                            {homeData.links.map((link, linkIndex) => {
                                return (
                                    <li key={`${linkIndex}`}>
                                        <LinkAnchor
                                            title={link.title}
                                            href={link.href}
                                            icon={link.icon || 'link'}
                                            target={link.target}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </Card>
        </ContentWrapper>
    );
};

export default Home;
