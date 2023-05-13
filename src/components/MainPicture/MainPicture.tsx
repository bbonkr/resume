/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Data } from '../../interfaces/Data';
import { Picture } from '../Resume/Picture';

interface MainPictureProps {
    className?: string;
    record?: Data | null;
}

export const MainPicture = ({ className, record }: MainPictureProps) => {
    let imageUri = '';
    let altText = '';

    if (record?.me?.photo) {
        if (typeof record?.me?.photo === 'string') {
            imageUri = record?.me?.photo ?? '/images/icon.png';
            altText = record.me.name;
        } else {
            imageUri = record.me.photo.image.url;
            altText = record.me.photo.altText;
        }
    } else {
        imageUri = '/images/icon.png';
    }

    return (
        <React.Fragment>
            <Picture
                imageProps={{
                    src: imageUri,
                    alt: altText,
                    title: record?.me?.name,
                    className: `${className ?? ''}`,
                }}
            />
        </React.Fragment>
    );
};
