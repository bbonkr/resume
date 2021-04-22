import React from 'react';
import { useLocation } from 'react-router-dom';
import { Data } from '../../interfaces/Data';
import { Bio } from '../Bio';
import { Container } from '../Layouts';
import { MainPicture } from '../MainPicture';
import { Skill } from '../Skill';

interface SummaryProps {
    record: Data;
}

export const Summary = ({ record }: SummaryProps) => {
    return (
        <Container fullWidth className="d-flex flex-column align-items-center p-0">
            <MainPicture record={record} />
            <Bio record={record} />
            <Skill {...record.skillStack} />
        </Container>
    );
};
