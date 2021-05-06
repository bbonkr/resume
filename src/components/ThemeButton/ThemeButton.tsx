import React from 'react';

import { FaMoon } from 'react-icons/fa';

export const ThemeButton = () => {
    const handleToggleDarkmode = () => {};

    return (
        <button className="btn" onClick={handleToggleDarkmode}>
            <FaMoon />
        </button>
    );
};
