import React from 'react';
import { Data } from '../../interfaces/Data';
import { Bio } from '../Bio';
import { MainPicture } from '../MainPicture';
import { Skill } from '../Skill';

interface LeftPaneProps {
    record: Data;
}

export const LeftPane = ({ record }: LeftPaneProps) => {
    return (
        <div className="col-md-4 text-center h-auto overflow-auto">
            <MainPicture record={record} />
            <Bio record={record} />
            <Skill record={record} />
        </div>
    );
};
