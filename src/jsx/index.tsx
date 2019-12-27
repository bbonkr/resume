import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { AppRouter } from './AppRouter';

const App = hot(AppRouter);

ReactDOM.render(<App />, document.querySelector('#app'));
