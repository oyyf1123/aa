import React, { useState, useEffect } from 'react';
import store from '../store';
import { increment, addTodoList, delList } from '../actions'

const TodoList = () => {
  let [count, setCount] = useState(store.getState().count);
  let [Lists, setLists] = useState(store.getState().lists);


  const handleTodos = (e) => {
    if (e.keyCode == '13') {
      addTodoList(e.target.value);
      e.target.value = '';
    }
  }

  
  useEffect( () => {
    store.subscribe(() => {
      setCount(store.getState().count);
    });
    store.subscribe(() => {
      setLists(store.getState().lists);
    });
  },[])
  
  
  const renderItem = () => {
    return Lists.map((item, index) => <li key={item.id} > {item.task} <button onClick={() => delList(index)}> 删除 </button> </li>)
  }

  return (
    <div>
      <button onClick={increment} > + </button>
      <p> conut: {count} </p>
      <hr />
      <input type="text" onKeyUp={handleTodos} />
      <ul>
        {renderItem()}
      </ul>
    </div>
  );
}

export default TodoList;