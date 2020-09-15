import React, { useEffect, useRef, useState } from 'react';
import { ScrollToTop } from '../ScrollToTop';

interface ContentWrapperProps {
    onScroll?: (left: number, top: number) => void;
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({ onScroll, children }) => {
    const contentWrapperRef = useRef<HTMLDivElement>(null);
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const handleScrollTop = () => {
        if (contentWrapperRef.current) {
            contentWrapperRef.current.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
        }
    };
    useEffect(() => {
        if (window && typeof window.ga === 'function') {
            window.ga('send', 'pageview');
        }
    }, [window && window.location && window.location.href]);

    useEffect(() => {
        const handleScroll = () => {
            if (contentWrapperRef.current) {
                if (onScroll) {
                    onScroll(
                        contentWrapperRef.current.scrollLeft,
                        contentWrapperRef.current.scrollTop,
                    );
                }

                if (contentWrapperRef.current.scrollTop > 30) {
                    setShowScrollToTop((prevState) => true);
                } else {
                    setShowScrollToTop((prevState) => false);
                }
            }
        };

        if (contentWrapperRef.current) {
            contentWrapperRef.current.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (contentWrapperRef.current) {
                contentWrapperRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className="content-wrapper" ref={contentWrapperRef}>
            {children}
            <ScrollToTop show={showScrollToTop} onClick={handleScrollTop} />
        </div>
    );
};
