import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//  HashRouter   #/home    hashchange事件  兼容高
// BrowserRouter  /home     h5 popchange事件   兼容没那么好
// as 等于起一个别名

import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />,
  </Router>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
