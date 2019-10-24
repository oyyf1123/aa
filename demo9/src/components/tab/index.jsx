import React from 'react';
import './index.scss'

const Tab = props => {
  const { gobackFlag } = props;
  return (
    <header>
      {gobackFlag && <i className = "fas fa-chevron-left"></i>}
      <h1>千锋商城</h1>
    </header>
  );
}

export default Tab;