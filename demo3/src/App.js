import React from 'react';
import './App.css';
import PropComp from './components/PropComp';
import StateComp from './components/StateComp';
import StateDemo from './components/StateDemo';
import Father from './components/Father';
import ListItem from './components/ListItem';
import HooksComponent from './components/HooksComponent';

function App() {
  return (
    <div className="App">
      <PropComp name = "欧阳逸峰"/>
      <StateComp name="oyyf" />
      <StateDemo />
      <Father />
      <ListItem/>
      <HooksComponent />
    </div>
  );
}

export default App;
