/* eslint-disable @next/next/no-img-element */
import React from 'react';
// import Image from 'next/image';
import { Data } from '../../interfaces/Data';
import { Picture } from '../Resume/Picture';

interface MainPictureProps {
    className?: string;
    record?: Data | null;
}

export const MainPicture = ({ className, record }: MainPictureProps) => {
    const imageUri = record?.me?.photo ?? '/images/icon.png';

    return (
        <React.Fragment>
            {/* <Image
                src={imageUri}
                className={className}
                alt={record?.me?.name}
                title={record?.me?.name}
                width={300}
                height={300}
                loading="lazy"
            /> */}

            {/* <img
                src={imageUri}
                alt={record?.me?.name}
                title={record?.me?.name}
                className={className}
            /> */}
            <Picture
                imageProps={{
                    src: imageUri,
                    alt: record?.me?.name,
                    title: record?.me?.name,
                    className: `${className ?? ''}`,
                }}
            />
        </React.Fragment>
    );
};
