import React, { useState, Fragment } from 'react'

function HooksComponent() {
  const [arr, setArr] = useState([0, 1, 2])
  const handleAdd = () => {
    setArr([...arr, arr.length])
  }
  return (
    <Fragment>
      <button onClick={handleAdd}>点击</button>
      <div>{arr}</div>
    </Fragment>
  )
}

export default HooksComponent;