import React, { Fragment, useEffect } from 'react';
import { Button, Card, Divider } from 'antd';
import { RateCardList } from '../components/RateCardList';
import { ContentWrapper } from '../components/ContentWrapper';
import { Bio as BioModel } from '../interfaces/Data';

interface BioProps {
    record: BioModel;
}

export const Bio: React.FC<BioProps> = ({ record }) => {
    return (
        <ContentWrapper>
            <Card>
                <Card.Meta title="Bio" />
                <Divider dashed={true} />
                <div>
                    {record.contents.map((v, i) => {
                        return <p key={i}>{v}</p>;
                    })}
                </div>
                {/* <RateCardList data={Data.bio.sections} /> */}
            </Card>
        </ContentWrapper>
    );
};
