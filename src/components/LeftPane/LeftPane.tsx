import React from 'react';
import { useLocation } from 'react-router-dom';
import { Data } from '../../interfaces/Data';
import { Bio } from '../Bio';
import { MainPicture } from '../MainPicture';
import { Skill } from '../Skill';

interface LeftPaneProps {
    record: Data;
}

export const LeftPane = ({ record }: LeftPaneProps) => {
    const location = useLocation();
    return (
        <div
            className={`col-md-4 text-center h-auto overflow-auto ${
                location.pathname !== '/' ? 'hidden-sm-and-down' : ''
            }`}
        >
            <MainPicture record={record} />
            <Bio record={record} />
            <Skill {...record.skillStack} />
        </div>
    );
};
