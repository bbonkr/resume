import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Data } from '../../interfaces/Data';
import { Content } from '../Content';
import { GenericLink } from '../GenericLink';

interface BioProps {
    record: Data;
}

export const Bio = ({ record }: BioProps) => {
    const title = 'about me';
    const { home } = record;
    return (
        <Content title={title.toUpperCase()} className="text-left">
            <ReactMarkdown source={home.bio} />

            <div className="d-flex flex-row justify-content-center flex-wrap">
                {home.links.map((x) => {
                    return (
                        <div className="mr-20" key={x.href}>
                            <GenericLink record={x} />
                        </div>
                    );
                })}
            </div>
        </Content>
    );
};
