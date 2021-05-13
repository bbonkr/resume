import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Data } from '../../interfaces/Data';
import { Content, Section } from '../Layouts';
import { GenericLink } from '../GenericLink';

interface BioProps {
    record: Data;
    title?: string;
}

export const Bio = ({ record, title }: BioProps) => {
    const { home } = record;
    return (
        <Content>
            <Section title={title}>
                <ReactMarkdown source={home.bio ?? ''} />

                {home.links && home.links.length > 0 && (
                    <div className="d-flex flex-row justify-content-center flex-wrap">
                        {home.links.map((x) => {
                            return (
                                <div className="mr-20" key={x.href}>
                                    <GenericLink record={x} />
                                </div>
                            );
                        })}
                    </div>
                )}
            </Section>
        </Content>
    );
};
