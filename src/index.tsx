import React from 'react';
import ReactDOM from 'react-dom';
import { ResumeApp } from './components/ResumeApp';

import 'bulma/css/bulma.css';
import './style.css';

ReactDOM.render(
    <React.StrictMode>
        <ResumeApp />
    </React.StrictMode>,
    document.querySelector('#app'),
);
