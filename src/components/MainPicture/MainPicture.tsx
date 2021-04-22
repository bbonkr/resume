import React from 'react';
import { Data } from '../../interfaces/Data';

import './style.css';
interface MainPictureProps {
    record: Data;
}

export const MainPicture = ({ record }: MainPictureProps) => {
    const imageUri = record.me.photo ?? '/public/me.png';
    return <img id="main-picture" src={imageUri} className="img-fluid" />;
};
