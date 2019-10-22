import React,{useState} from 'react';
import Father from './Father';
import {qianContext} from '../context'

const GrandFather = () => {
  let [qian] = useState(5555)
  return (
    <div>
      <qianContext.Provider value = {qian}>
        <Father/>
      </qianContext.Provider>
    </div>
  );
}

export default GrandFather;