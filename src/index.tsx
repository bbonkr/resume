import React from 'react';
import ReactDOM from 'react-dom';
import { ResumeApp } from './components/ResumeApp';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

ReactDOM.render(
    <React.StrictMode>
        <ResumeApp />
    </React.StrictMode>,
    document.querySelector('#app'),
);
