import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Data } from '../../interfaces/Data';
import { GenericLink } from '../GenericLink';
import { Container, Card } from '../Layouts';

interface HomeProps {
    record: Data;
}

export const Home = ({ record }: HomeProps) => {
    const { home } = record;
    return (
        <Container
            title={
                <h2>
                    {record.home.title} <small>{record.home.subtitle}</small>
                </h2>
            }
            fullWidth
        >
            <Card title="">
                <ReactMarkdown source={record.home.intro ?? ''} />

                {home.links && home.links.length > 0 && (
                    <React.Fragment>
                        <hr />
                        <div className="d-flex justify-content-center">
                            <ul className="list-inline">
                                {home.links.map((x) => {
                                    return (
                                        <li className="list-inline-item" key={x.href}>
                                            <GenericLink
                                                record={x}
                                                className="btn btn-secondary btn-sm"
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </React.Fragment>
                )}
            </Card>
        </Container>
    );
};
