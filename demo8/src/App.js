import React,{useState} from 'react';
import './App.css';
import AnimateComp from './components/AnimateComp';

function App () {
  let [data, setData] = useState({
    flag: true,
    timeout: 200,
    classNames: {
      enter: 'animated',
      enterActive: 'slideInLeft',
      exit: 'animated',
      exitActive: 'slideOutLeft',
    }
  })

  const handleFlag = () => {
    setData( {...data,flag:!data.flag} )
  }
  

  return (
    <div className="App">
      <button onClick = {handleFlag}> 动起来 </button>
      <AnimateComp {...data} />
    </div>
  );
}

export default App;
