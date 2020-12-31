import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Data } from '../../interfaces/Data';
import { GenericLink } from '../GenericLink';

interface HomeProps {
    record: Data;
}

export const Home = ({ record }: HomeProps) => {
    const { home } = record;
    return (
        <div className="card mx-0">
            <h3 className="card-title">
                {record.home.title} <small>{record.home.subtitle}</small>
            </h3>
            <ReactMarkdown source={record.home.intro ?? ''} />
            {home.links && home.links.length > 0 && (
                <React.Fragment>
                    <hr />
                    <div className="d-flex flex-row justify-content-center flex-wrap mt-10">
                        {home.links.map((x) => {
                            return (
                                <div className="mr-20" key={x.href}>
                                    <GenericLink record={x} />
                                </div>
                            );
                        })}
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};
