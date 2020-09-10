import React, { useEffect } from 'react';
import { ContentWrapper } from '../components/ContentWrapper';
import { LinkAnchor } from '../components/LinkAnchor';

// import Data from '~/data/data.json';
import { Portfolio as PortfolioModel } from '../interfaces/Data';

interface PortfolioProps {
    records: PortfolioModel[];
}

export const Portfolio: React.FC<PortfolioProps> = ({ records }) => {
    return (
        <ContentWrapper>
            {/* <Card>
                <Card.Meta title={<h1>Portfolio</h1>} />
                <Divider dashed={true} />

                {records
                    .sort((a, b) => {
                        if (a.period > b.period) {
                            return -1;
                        }
                        if (a.period < b.period) {
                            return 1;
                        }
                        return 0;
                    })
                    .map((v, i) => {
                        return (
                            <Card key={`${i}`} style={{ marginBottom: '0.6rem' }}>
                                <Card.Meta
                                    title={v.title}
                                    description={
                                        <div>
                                            {v.period} <small>{v.state}</small>
                                        </div>
                                    }
                                />
                                <Divider dashed={true} />
                                <p>{v.description}</p>
                                {v.features && (
                                    <div>
                                        <h4>요약</h4>
                                        <ul>
                                            {v.features.map((feature, featureIndex) => {
                                                return <li key={`${featureIndex}`}>{feature}</li>;
                                            })}
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
                                                        <LinkAnchor
                                                            title={link.title}
                                                            href={link.href}
                                                            icon={link.icon || 'home'}
                                                            target={link.target}
                                                        />
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
            </Card> */}
        </ContentWrapper>
    );
};
