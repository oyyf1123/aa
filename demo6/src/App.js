import React from 'react';
import './App.css';
import HocComp from './hoc/HocComp'
import AnimateComp from './components/AnimateComp';

class A extends React.Component{
  animateHandle = () => {    //一个实现动画的方法
    
  }

  render() {
    return 'A'
  }
}

class B extends React.Component{
  animateHandle = () => {    //一个实现动画的方法
    
  }
  render() {
    return 'B'
  }
}

class C extends React.Component{
  animateHandle = () => {     //一个实现动画的方法
    
  }
  render() {
    return 'C'
  }
}

const HocA = HocComp(A)
const HocB = HocComp(B)
const HocC = HocComp(C)


function App() {
  return (
    <div className="App">
      <HocA />
      <HocB />
      <HocC />
      <AnimateComp/>
    </div>
  );
}

export default App;
