import React,{useState,useEffect} from 'react';
import store from '../store';
import {
  handleAdd,
} from '../actions'

const Count = () => {

  let [count,setCount] = useState(store.getState())

 function increment() {
   handleAdd()
   store.emit('addHandle')
  }

  useEffect(() => {
    store.on('addHandle', () => {
      setCount(store.getState())
    })
  })

  return (
    <div>
      <button onClick = {increment} style = {{width:'30px',height:'30px'}} > + </button>
      <p> count: { count } </p>
    </div>
  );
}

export default Count;