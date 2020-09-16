import React from 'react';
import ReactDOM from 'react-dom';
import { ResumeApp } from './components/ResumeApp';

import 'halfmoon/css/halfmoon.min.css';

ReactDOM.render(
    <React.StrictMode>
        <ResumeApp />
    </React.StrictMode>,
    document.querySelector('#app'),
);
