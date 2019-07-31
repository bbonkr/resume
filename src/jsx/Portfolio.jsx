import React, { useEffect } from 'react';
import { Button, Card, Divider, Tag } from 'antd';
import styled from 'styled-components';
import Data from '../data/bbon.json';
import ContentWrapper from '../components/ContentWrapper';
const InlineList = styled.ul`
    & > li {
        display: inline-block;
    }
`;
const Portfolio = () => {
    return (
        <ContentWrapper>
            <Card>
                <Card.Meta title={<h1>Portfolio</h1>} />
                <Divider dashed={true} />

                {Data.portfolio
                    .sort((a, b) => {
                        if (a.date > b.date) {
                            return -1;
                        }
                        if (a.date < b.date) {
                            return 1;
                        }
                        return 0;
                    })
                    .map((v, i) => {
                        return (
                            <Card
                                key={`${i}`}
                                style={{ marginBottom: '0.6rem' }}>
                                <Card.Meta
                                    title={v.title}
                                    description={
                                        <div>
                                            {v.date} <small>{v.state}</small>
                                        </div>
                                    }
                                />
                                <Divider dashed={true} />
                                <p>{v.description}</p>
                                {v.features && (
                                    <div>
                                        <h4>요약</h4>
                                        <ul>
                                            {v.features.map(
                                                (feature, featureIndex) => {
                                                    return (
                                                        <li
                                                            key={`${featureIndex}`}>
                                                            {feature}
                                                        </li>
                                                    );
                                                },
                                            )}
                                        </ul>
                                    </div>
                                )}
                                {v.links && v.links.length > 0 && (
                                    <div>
                                        <h4>관련 페이지</h4>
                                        <ul>
                                            {v.links.map((link, linkIndex) => {
                                                return (
                                                    <li key={`${linkIndex}`}>
                                                        <a
                                                            href={link.href}
                                                            target="_blank">
                                                            {link.title}
                                                        </a>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                )}
                                {v.tags && v.tags.length > 0 && (
                                    <div>
                                        <h4>꼬리표</h4>
                                        <InlineList>
                                            {v.tags.map((tag, tagIndex) => {
                                                return (
                                                    <li key={`${tagIndex}`}>
                                                        <Tag>{tag}</Tag>
                                                    </li>
                                                );
                                            })}
                                        </InlineList>
                                    </div>
                                )}
                            </Card>
                        );
                    })}
            </Card>
        </ContentWrapper>
    );
};

export default Portfolio;
