import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ApiException } from '../../interfaces/ApiException';
import { Section } from '../Layouts';

interface ErrorContentProps {
    error?: ApiException;
}

export const ErrorContent = ({ error }: ErrorContentProps) => {
    return (
        <React.Fragment>
            <Helmet title={`HTTP ${error?.statusCode} - ${error?.message}`} />
            <Section
                title={`HTTP ${error?.statusCode}`}
                subtitle={error?.message}
                heroColor="is-danger"
                heroSize="is-small"
                useHero
            />
        </React.Fragment>
    );
};
