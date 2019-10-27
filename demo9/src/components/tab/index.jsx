import React,{useState,useEffect} from 'react';
import './index.scss'

const Tab = props => {
  
  let [flag, setFlag] = useState(false);

  function goBack1 () {
    props.history.go(-1)
  }

  useEffect(() => {
    if (props.location.pathname === '/home/beingsell' || props.location.pathname === '/home/willsell') {
      setFlag(false);
    } else {
      setFlag(true);
    }
  },[props.location])

  

  return (
    <header>
      {flag && <i onClick = {goBack1} className = "fas fa-chevron-left"></i>}
      <h1>千锋商城</h1>
    </header>
  );
}

export default Tab;