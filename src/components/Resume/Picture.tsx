import React from 'react';

interface PictureProps {
    imageProps?: React.ImgHTMLAttributes<HTMLImageElement>;
}

export const Picture = ({ imageProps }: PictureProps) => {
    const [imageLoaded, setImageLoaded] = React.useState(false);

    const skelectonRef = React.useRef<HTMLDivElement>(null);
    const skelectonObserverRef = React.useRef<IntersectionObserver>(null);

    const handleIntersection = (
        entries: IntersectionObserverEntry[],
        intersectionObserver: IntersectionObserver,
    ) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                intersectionObserver.unobserve(entry.target);

                setImageLoaded((_) => true);
            }
        });
    };

    React.useEffect(() => {
        if (!imageLoaded) {
            const skelectonEl = skelectonRef.current;

            if (!skelectonObserverRef.current) {
                skelectonObserverRef.current = new IntersectionObserver(handleIntersection, {
                    threshold: 0.2,
                });

                if (skelectonEl) {
                    skelectonObserverRef.current.observe(skelectonEl);
                    console.info('skelecton element observerd');
                }
            }
        } else {
            if (skelectonObserverRef.current) {
                skelectonObserverRef.current.disconnect();
                console.info('skelecton element disconnected');
            }
        }
    }, [imageLoaded]);

    if (!imageLoaded) {
        return (
            <div
                ref={skelectonRef}
                className={`relative w-full h-56 ${imageProps?.className ?? ''}`}
            >
                <div className="absolute top-0 left-0 right-0 bottom-0">
                    <span className="block skeleton-box group-hover:scale-110 transition-transform transform-center w-full h-full"></span>
                </div>
            </div>
        );
    }

    return <img {...imageProps} />;
};
