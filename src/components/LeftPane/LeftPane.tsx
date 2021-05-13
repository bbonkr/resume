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
        <div className={`columns`}>
            <div className="column">
                <MainPicture record={record} />
            </div>
            <div className="column">
                <Bio record={record} />
            </div>
            <div className="column">
                <Skill {...record.skillStack} />
            </div>
        </div>
    );
};
