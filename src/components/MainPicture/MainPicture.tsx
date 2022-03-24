import React from 'react';
import Image from 'next/image';
import { Data } from '../../interfaces/Data';

interface MainPictureProps {
    record?: Data | null;
}

export const MainPicture = ({ record }: MainPictureProps) => {
    const imageUri = record?.me?.photo ?? '/images/icon.png';
    return (
        <React.Fragment>
            <Image
                src={imageUri}
                className="rounded-full"
                alt={record?.me?.name}
                title={record?.me?.name}
                width={300}
                height={300}
                loading="lazy"
            />
        </React.Fragment>
    );
};
