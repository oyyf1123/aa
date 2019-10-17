import React from 'react';
import './App.css';
import PropComp from './components/PropComp';
import StateComp from './components/StateComp';
import StateDemo from './components/StateDemo';
import Father from './components/Father';
import ListItem from './components/ListItem';

function App() {
  return (
    <div className="App">
      <PropComp name = "欧阳逸峰"/>
      <StateComp name="oyyf" />
      <StateDemo />
      <Father />
      <ListItem/>
    </div>
  );
}

export default App;
