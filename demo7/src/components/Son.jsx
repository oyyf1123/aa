import React,{useContext} from 'react';
import {qianContext} from '../context'
 
const Son = () => {
  const value = useContext(qianContext);
  return (
    <div>
      <p> 得到金钱： {value} </p>
    </div>
  );
}

export default Son;