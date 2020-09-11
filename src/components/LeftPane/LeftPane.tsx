import React from 'react';
import { data } from '../../data/data';
import { Bio } from '../Bio';
import { MainPicture } from '../MainPicture';
import { Skill } from '../Skill';

export const LeftPane = () => {
    return (
        <div className="col-md-4 text-center h-auto overflow-auto">
            <MainPicture record={data} />
            <Bio record={data} />
            <Skill record={data} />
        </div>
    );
};
