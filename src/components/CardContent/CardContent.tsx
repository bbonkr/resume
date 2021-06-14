import React from 'react';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { ColorStyles } from '../../interfaces';
import { ContentData } from '../../interfaces/Data';
import { GenericLink } from '../GenericLink';
import { Card, Section } from '../Layouts';

interface CardContentProps {
    title?: string;
    record?: ContentData;
    useHero?: boolean;
    heroColor?: ColorStyles;
}

export const CardContent = ({ title, record, useHero, heroColor }: CardContentProps) => {
    return (
        <React.Fragment>
            <Helmet title={title ?? record?.title} />
            <Section title={title ?? record?.title} useHero={useHero} heroColor={heroColor} />
            {record && record.records && record.records.length > 0 && (
                <Section>
                    {record.records
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

                                    {x.images && x.images.length > 0 && (
                                        <div className="columns">
                                            {x.images.map((image) => (
                                                <div className="column is-one-quarter">
                                                    <figure className="image">
                                                        <img src={image.src} alt={image.alt} />
                                                    </figure>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {x.tags && x.tags.length > 0 && (
                                        <React.Fragment>
                                            <p className="mb-0">태그:</p>
                                            <div className="tags">
                                                {x.tags.map((tag) => {
                                                    return (
                                                        <span
                                                            key={tag}
                                                            className={`tag ${heroColor} `}
                                                        >
                                                            {tag.toUpperCase()}
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
