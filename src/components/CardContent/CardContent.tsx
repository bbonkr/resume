import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ContentDataRecord } from '../../interfaces/Data';
import { GenericLink } from '../GenericLink';
import { Card, Container } from '../Layouts';

interface CardContentProps {
    title: string;
    records?: ContentDataRecord[];
}

export const CardContent = ({ title, records }: CardContentProps) => {
    return (
        <React.Fragment>
            {records && records.length > 0 && (
                <Container title={title} fullWidth>
                    {records
                        .sort((a, b) => (a.period > b.period ? -1 : 1))
                        .map((x) => {
                            return (
                                <Card
                                    key={`${x.title}-${x.period}`}
                                    title={x.title}
                                    className="mb-3"
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
                                                return <li key={feature}>{feature}</li>;
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
                                                                className="mb-5"
                                                                record={link}
                                                            />
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                            <div className="d-flex flex-column mb-3"></div>
                                        </React.Fragment>
                                    )}
                                    {x.tags && x.tags.length > 0 && (
                                        <React.Fragment>
                                            <p className="mb-0">태그:</p>
                                            <ul className="list-inline">
                                                {x.tags.map((tag) => {
                                                    return (
                                                        <li key={tag} className="list-inline-item">
                                                            <span
                                                                key={tag}
                                                                className="badge bg-info"
                                                            >
                                                                {tag}
                                                            </span>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </React.Fragment>
                                    )}
                                </Card>
                            );
                        })}
                </Container>
            )}
        </React.Fragment>
    );
};
