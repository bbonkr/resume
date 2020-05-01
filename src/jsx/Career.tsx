import React, { useEffect } from 'react';
import { Card, Timeline, Divider, PageHeader } from 'antd';
import { ContentWrapper } from '../components/ContentWrapper';
import { Career as CareerModel } from '../interfaces/Data';

interface CareerProps {
    records: CareerModel[];
}

export const Career: React.FC<CareerProps> = ({ records }) => {
    return (
        <ContentWrapper>
            <Card>
                <Card.Meta title={<h1>Career</h1>} />
                <Divider dashed={true} />
                <Timeline>
                    {records
                        .sort((a, b) => {
                            if (a.period > b.period) {
                                return -1;
                            }
                            if (b.period > a.period) {
                                return 1;
                            }
                            return 0;
                        })
                        .map((v, i) => {
                            return (
                                <Timeline.Item key={i}>
                                    <p>{v.period}</p>
                                    <h3>
                                        {v.title} <small>{v.state}</small>
                                    </h3>
                                    {/* <p>{v.state}</p> */}
                                    <p>{v.description}</p>
                                    {v.links && (
                                        <ul>
                                            {v.links.map(link => {
                                                return (
                                                    <li>
                                                        <a href={link.href}>{link.title}</a>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </Timeline.Item>
                            );
                        })}
                </Timeline>
            </Card>
        </ContentWrapper>
    );
};
