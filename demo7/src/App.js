import React,{useState,useEffect} from 'react';
import './App.css';
import GrandFather from './components/GrandFather';

function App () {
  let [money, setMoney] = useState(2222);
  let [name, setName] = useState('lh');
  const handleAdd = () => {
    setMoney( money + 1)
  }
  const handleMinus = () => {
    setMoney( money - 1)
  }

  useEffect(() => {
    document.title = money;
    fetch('/mock.json')
      .then(date => date.json())
      .then(res => setName(res.name))
      .catch(err => console.log(err))
  })

  return (
    <div className="App">
      <p> 现在有： {money} </p>
      <p> 姓名：{name} </p>
      <h3> context通信 </h3>
      <button style = {{marginRight : '10px'}} onClick = {handleAdd}> + </button>
      <button onClick = {handleMinus}> - </button>
      <GrandFather/>
    </div>
  );
}

export default App;
