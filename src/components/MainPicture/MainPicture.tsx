import React from 'react';
import { Data } from '../../interfaces/Data';

interface MainPictureProps {
    record: Data;
}

export const MainPicture = ({ record }: MainPictureProps) => {
    const imageUri = record.me.photo ?? '/public/me.png';
    return <img src={imageUri} className="img-fluid w-half w-sm-quarter w-md-full " />;
};
