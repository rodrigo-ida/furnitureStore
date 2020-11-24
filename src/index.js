import React from 'react';
import ReactDOM from 'react-dom';
import './css-config/reset.css'
import './index.scss';
import Root from './container/root/Root'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
