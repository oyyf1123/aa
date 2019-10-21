import React from 'react';
import Event from './components/Event';
import Ref from './components/Ref';
import Father from './exchange/Father';
import One from './multiLevel/One';

function App() {
  return (
    <div className="App">
      <Event />
      <Ref />
      <Father />
      <One/>
    </div>
  );
}

export default App;
