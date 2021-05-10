import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ContentDataRecord } from '../../interfaces/Data';
import { GenericLink } from '../GenericLink';
import { Card, Section } from '../Layouts';

interface CardContentProps {
    title: string;
    records?: ContentDataRecord[];
}

export const CardContent = ({ title, records }: CardContentProps) => {
    return (
        <React.Fragment>
            {records && records.length > 0 && (
                <Section title={title}>
                    {records
                        .sort((a, b) => (a.period > b.period ? -1 : 1))
                        .map((x) => {
                            return (
                                <Card
                                    key={`${x.title}-${x.period}`}
                                    title={x.title}
                                    classNames={['mb-3']}
                                >
                                    <p>
                                        {x.period} {x.state}
                                    </p>

                                    {x.description && (
                                        <ReactMarkdown source={x.description ?? ''} />
                                    )}

                                    {x.features && x.features.length > 0 && (
                                        <ul>
                                            {x.features.map((feature) => {
                                                return (
                                                    <li key={feature} className="mb-5">
                                                        {feature}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                    {x.links && x.links.length > 0 && (
                                        <React.Fragment>
                                            <p className="mb-0">링크:</p>
                                            <ul>
                                                {x.links.map((link) => {
                                                    return (
                                                        <li key={link.href}>
                                                            <GenericLink
                                                                // className="mb-5"
                                                                key={link.href}
                                                                record={link}
                                                            />
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </React.Fragment>
                                    )}
                                    {x.tags && x.tags.length > 0 && (
                                        <React.Fragment>
                                            <p className="mb-0">태그:</p>
                                            <div className="tags">
                                                {x.tags.map((tag) => {
                                                    return (
                                                        <span key={tag} className="tag is-info ">
                                                            {tag}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        </React.Fragment>
                                    )}
                                </Card>
                            );
                        })}
                </Section>
            )}
        </React.Fragment>
    );
};
