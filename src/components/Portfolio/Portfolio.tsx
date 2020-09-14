import React from 'react';
import { Data } from '../../interfaces/Data';
import { GenericLink } from '../GenericLink';

interface PortfolioProps {
    record: Data;
}

export const Portfolio = ({ record }: PortfolioProps) => {
    const { portfolio } = record;
    return (
        <div className="card">
            <h2 className="card-title">Portfolio</h2>
            <div className="d-flex flex-column">
                {portfolio
                    .sort((a, b) => (a.period > b.period ? -1 : 1))
                    .map((x) => {
                        return (
                            <div key={`${x.title}-${x.period}`} className="content ml-0 mr-0">
                                <h3 className="content-title">{x.title}</h3>
                                <p>
                                    {x.period} {x.state}
                                </p>
                                <p>{x.description}</p>
                                <ul>
                                    {x.features.map((feature) => {
                                        return <li key={feature}>{feature}</li>;
                                    })}
                                </ul>
                                <div className="d-flex flex-column mb-10">
                                    {x.links.map((link) => {
                                        return <GenericLink key={link.href} record={link} />;
                                    })}
                                </div>
                                <div className="d-flex flex-row justify-content-start flex-wrap">
                                    {x.tags.map((tag) => {
                                        return (
                                            <span key={tag} className="badge mr-5 mb-5">
                                                {tag}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
