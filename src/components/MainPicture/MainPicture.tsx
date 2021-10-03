import React from 'react';
import { Data } from '../../interfaces/Data';

interface MainPictureProps {
    record?: Data | null;
}

export const MainPicture = ({ record }: MainPictureProps) => {
    const imageUri = record?.me?.photo ?? '/images/icon.png';
    return (
        <figure className="image">
            <img src={imageUri} className="is-rounded" />
        </figure>
    );
};
