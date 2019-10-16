import React, { Component,Fragment } from 'react'
import FunComp from './FuncComp'
import Father from './component/Father'
import Mon from './component/Mon'

class App extends Component{
  render () {
    return (
      //  jsx   一定要有唯一根元素   react 提供了 Fragment 来当这个唯一根元素
      <Fragment>
        <h3>类组件</h3>
        <p> 名字：{this.props.name} </p>
        <FunComp name='兵哥'></FunComp>
        <Father>
          <p>我是父组件</p>
          <Mon></Mon>
        </Father>
      </Fragment>
    )
  }
}

export default App


