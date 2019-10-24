import React from 'react';
import './index.scss'

const Tab = props => {
  const { gobackFlag } = props;

  function goBack1 () {
    props.history.go(-1)
  }
  return (
    <header>
      {gobackFlag && <i onClick = {goBack1} className = "fas fa-chevron-left"></i>}
      <h1>千锋商城</h1>
    </header>
  );
}

export default Tab;