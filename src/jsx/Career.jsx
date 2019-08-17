import React, { useEffect } from 'react';
import { Card, Timeline, Divider, PageHeader } from 'antd';
import ContentWrapper from '~/components/ContentWrapper';
import Data from '~/data/bbon.json';

const Career = () => {
    return (
        <ContentWrapper>
            <Card>
                <Card.Meta title={<h1>Career</h1>} />
                <Divider dashed={true} />
                <Timeline>
                    {Data.career
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
                                    {v.link && (
                                        <a href={v.link.href}>{v.link.title}</a>
                                    )}
                                </Timeline.Item>
                            );
                        })}
                </Timeline>
            </Card>
        </ContentWrapper>
    );
};

export default Career;
