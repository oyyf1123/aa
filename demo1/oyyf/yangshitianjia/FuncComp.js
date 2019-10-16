import React, { Component,Fragment } from 'react'

const FunComp = props => {
  //  函数式组件里面的this是 undefind
  return (
    <Fragment>
      <h1>函数式的组件 {props.name}</h1>
    </Fragment>
  )
}

export default FunComp