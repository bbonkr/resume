import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import Layout from './Layout';

const Hot = hot(Layout);

ReactDOM.render(<Hot />, document.querySelector('#app'));
