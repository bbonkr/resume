import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Data } from '../../interfaces/Data';
import { Content } from '../Content';

interface BioProps {
    record: Data;
}

export const Bio = ({ record }: BioProps) => {
    const title = 'about me';
    return (
        <Content title={title.toUpperCase()} className="text-left">
            <ReactMarkdown source={record.bio} />
        </Content>
    );
};
