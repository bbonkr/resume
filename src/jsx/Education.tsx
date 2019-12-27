import React, { useEffect } from 'react';
import { Card, Timeline, Divider, PageHeader } from 'antd';
import { Education as EducationModel } from '../interfaces/Data';
import { ContentWrapper } from '../components/ContentWrapper';

interface EducationProps {
    records: EducationModel[];
}

export const Education: React.FC<EducationProps> = ({ records }) => {
    return (
        <ContentWrapper>
            <Card>
                <Card.Meta title={<h1>Education</h1>} />
                <Divider dashed={true} />
                <Timeline>
                    {records
                        .sort((a, b) => {
                            if (a.date > b.date) {
                                return -1;
                            }
                            if (b.date > a.date) {
                                return 1;
                            }
                            return 0;
                        })
                        .map((v, i) => {
                            return (
                                <Timeline.Item key={i}>
                                    <p>{v.date}</p>
                                    <h3>
                                        {v.title} <small>{v.state}</small>
                                    </h3>
                                    {/* <p>{v.state}</p> */}
                                    <p>{v.description}</p>
                                    {v.links && v.links.length > 0 && (
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
