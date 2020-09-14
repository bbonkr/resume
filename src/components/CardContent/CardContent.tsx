import React from 'react';
import { ContentDataRecord } from '../../interfaces/Data';
import { GenericLink } from '../GenericLink';

interface CardContentProps {
    title: string;
    records: ContentDataRecord[];
}

export const CardContent = ({ title, records }: CardContentProps) => {
    return (
        <div className="card mx-0">
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
                                        <div className="d-flex flex-column mb-10">
                                            {x.links.map((link) => {
                                                return (
                                                    <GenericLink
                                                        className="mb-5"
                                                        key={link.href}
                                                        record={link}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </React.Fragment>
                                )}

                                {x.tags && x.tags.length > 0 && (
                                    <React.Fragment>
                                        <p className="mb-0">태그:</p>
                                        <div className="d-flex flex-row justify-content-start flex-wrap">
                                            {x.tags.map((tag) => {
                                                return (
                                                    <span key={tag} className="badge mr-5 mb-5">
                                                        {tag}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </React.Fragment>
                                )}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
