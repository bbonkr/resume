// import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
// import { AppRouter } from './AppRouter';
import { ResumeApp } from './components/ResumeApp';

import 'halfmoon/css/halfmoon.min.css';
// const App = hot(ResumeApp);

ReactDOM.render(<ResumeApp />, document.querySelector('#app'));
