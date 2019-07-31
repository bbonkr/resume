import React, { Fragment, useEffect } from 'react';
import { Button, Card, Divider } from 'antd';
import Data from '../data/bbon.json';
import ContentWrapper from '../components/ContentWrapper';

const Bio = () => {
    return (
        <ContentWrapper>
            <Card>
                <Card.Meta title="Bio" />
                <Divider dashed={true} />
                <div>
                    {Data.bio.contents.map((v, i) => {
                        return <p key={i}>{v}</p>;
                    })}
                </div>
            </Card>
        </ContentWrapper>
    );
};

export default Bio;
