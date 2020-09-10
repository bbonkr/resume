import React from 'react';
import { ContentWrapper } from '../components/ContentWrapper';
import ReactMarkdown from 'react-markdown';

interface BioProps {
    record: string;
}

export const Bio: React.FC<BioProps> = ({ record }) => {
    return (
        <ContentWrapper>
            {/* <Card>
                <Card.Meta title="Bio" />
                <Divider dashed={true} />
                <div>
                    <ReactMarkdown source={record} />;
                </div>
            </Card> */}
        </ContentWrapper>
    );
};
