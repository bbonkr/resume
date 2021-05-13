import React, { PropsWithChildren } from 'react';
import { UiHelper } from '../../libs/UiHelper';
import { Content } from './Content';
import { CardImage } from './CardImage';
import { CardMediaContent } from './CardMediaContent';

interface CardMedia {
    image?: CardImage;
    title: string;
    subtitle?: string;
}

interface CardProps {
    title?: React.ReactNode;
    cardImage?: CardImage;
    medias?: CardMedia[];
    classNames?: string[];
}

export const Card = ({
    title,
    cardImage,
    medias,
    classNames,
    children,
}: PropsWithChildren<CardProps>) => {
    return (
        <div className={`card ${UiHelper.GetClassNames(...(classNames ?? []))}`}>
            {cardImage && (
                <div className="card-image">
                    <figure>
                        <img src={cardImage.src} alt={cardImage.alt} />
                    </figure>
                </div>
            )}
            {title && (
                <header className="card-header">
                    <p className="card-header-title">{title}</p>
                </header>
            )}
            <div className="card-content">
                {medias?.map((media) => (
                    <CardMediaContent
                        key={media.title}
                        image={media.image}
                        content={{ title: media.title, subtitle: media.subtitle }}
                    />
                ))}
                <Content>{children}</Content>
            </div>
        </div>
    );
};
