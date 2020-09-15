import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

interface ScrollToTopProps {
    show: boolean;
    containerClassName?: string;
    containerStyle?: React.CSSProperties;
    buttonClassName?: string;
    buttonStyle?: React.CSSProperties;
    buttonContent?: React.ReactNode;
    onClick?: () => void;
}
export const ScrollToTop = ({
    show,
    containerClassName,
    containerStyle,
    buttonClassName,
    buttonStyle,
    buttonContent,
    onClick,
}: ScrollToTopProps) => {
    return (
        <div
            className={`${containerClassName ?? ''}`}
            style={{
                position: 'fixed',
                bottom: '68px',
                right: '38px',
                visibility: show ? 'visible' : 'hidden',
                zIndex: 100,
                ...(containerStyle ?? {}),
            }}
        >
            <button
                className={` ${buttonClassName ?? 'btn btn-md'}`}
                style={{ ...(buttonStyle ?? {}) }}
                onClick={onClick}
            >
                {buttonContent ?? <FaArrowUp title="위로" />}
            </button>
        </div>
    );
};
