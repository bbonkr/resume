import React from 'react';
import { Card, Divider } from 'antd';
import ContentWrapper from '../components/ContentWrapper';
import Data from '../data/bbon.json';

const homeData = Data.home;

const Home = () => {
    return (
        <ContentWrapper>
            <Card>
                <Card.Meta
                    title={<h1>{homeData.title}</h1>}
                    description={homeData.subtitle}
                />
                <Divider dashed={true} />
                <p>{homeData.intro}</p>

                {homeData.links && homeData.links.length > 0 && (
                    <div>
                        <h4>관련 사이트</h4>
                        <ul>
                            {homeData.links.map((link, linkIndex) => {
                                return (
                                    <li key={`${linkIndex}`}>
                                        <a
                                            href={link.href}
                                            target="{link.target || '_blank'}">
                                            {link.title}
                                        </a>
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
