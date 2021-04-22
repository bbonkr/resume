import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Data } from '../../interfaces/Data';
import { Container } from '../Layouts';
import { GenericLink } from '../GenericLink';

interface BioProps {
    record: Data;
}

export const Bio = ({ record }: BioProps) => {
    const title = 'about me';
    const { home } = record;
    return (
        <Container
            title={title.toUpperCase()}
            fullWidth
            className="mt-3 d-flex flex-column justify-content-center align-items-center"
        >
            <ReactMarkdown source={home.bio ?? ''} className="text-start" />

            {home.links && home.links.length > 0 && (
                <div className="d-flex justify-content-center">
                    <ul className="list-inline">
                        {home.links.map((x) => {
                            return (
                                <li className="list-inline-item" key={x.href}>
                                    <GenericLink record={x} className="btn btn-secondary btn-sm" />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </Container>
    );
};
