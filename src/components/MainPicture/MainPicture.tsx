import React from 'react';
import { Data } from '../../interfaces/Data';

interface MainPictureProps {
    record: Data;
}

export const MainPicture = ({ record }: MainPictureProps) => {
    const imageUri = record.me.photo ?? '/public/me.png';
    return (
        <figure className="image">
            <img src={imageUri} className="is-rounded" />
        </figure>
    );
};
