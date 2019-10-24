import React from 'react';
import './App.css';
import Layout from './layout';
import './utils/rem';
import { withRouter } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <Layout {...props} />
    </div>
  );
}

export default withRouter(App) ;
