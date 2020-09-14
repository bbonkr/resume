import React from 'react';
import { ContentData } from '../../interfaces/Data';
import { GenericLink } from '../GenericLink';

interface CardContentProps {
    title: string;
    records: ContentData[];
}

export const CardContent = ({ title, records }: CardContentProps) => {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <div className="d-flex flex-column">
                {records
                    .sort((a, b) => (a.period > b.period ? -1 : 1))
                    .map((x) => {
                        return (
                            <div key={`${x.title}-${x.period}`} className="content ml-0 mr-0">
                                <h3 className="content-title">{x.title}</h3>
                                <p>
                                    {x.period} {x.state}
                                </p>
                                <p>{x.description}</p>
                                {x.features && x.features.length > 0 && (
                                    <ul>
                                        {x.features.map((feature) => {
                                            return <li key={feature}>{feature}</li>;
                                        })}
                                    </ul>
                                )}

                                {x.links && x.links.length > 0 && (
                                    <div className="d-flex flex-column mb-10">
                                        {x.links.map((link) => {
                                            return <GenericLink key={link.href} record={link} />;
                                        })}
                                    </div>
                                )}

                                {x.tags && x.tags.length > 0 && (
                                    <div className="d-flex flex-row justify-content-start flex-wrap">
                                        {x.tags.map((tag) => {
                                            return (
                                                <span key={tag} className="badge mr-5 mb-5">
                                                    {tag}
                                                </span>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
