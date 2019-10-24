import React,{useState,useEffect} from 'react';
import './App.css';
import GrandFather from './components/GrandFather';
import ErrorBoundary from './components/ErrorBoundary';

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
    /* 这个api就相当于是componentDidMount 和componentDidUpdate componentWillReceiveProps*/
    document.title = money;
    fetch('/mock.json')    // 这里可以做数据请求
      .then(date => date.json())
      .then(res => setName(res.name))
      .catch(err => console.log(err))
    
    document.querySelector('p').style.background = 'yellow'   //这里也可以做DOM操作
  })

  return (
    <div className="App">
      <p> 现在有： {money} </p>
      <p> 姓名：{name} </p>
      <h3> context通信 </h3>
      <button style = {{marginRight : '10px'}} onClick = {handleAdd}> + </button>
      <button onClick={handleMinus}> - </button>
      <ErrorBoundary>
        <GrandFather/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
