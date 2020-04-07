import React, { Fragment, useEffect } from 'react';
import { Button, Card, Divider } from 'antd';
import { RateCardList } from '../components/RateCardList';
import { ContentWrapper } from '../components/ContentWrapper';
import { Bio as BioModel } from '../interfaces/Data';
import ReactMarkdown from 'react-markdown';

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
                        // console.log(v);
                        // return <p>{v}</p>;
                        return <ReactMarkdown key={i} source={v} />;
                    })}
                </div>
                {/* <RateCardList data={Data.bio.sections} /> */}
            </Card>
        </ContentWrapper>
    );
};
