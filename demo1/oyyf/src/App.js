import React, { Component,Fragment } from 'react'
import Props from './components/Props'



class App extends Component{
  
  render () {
    return (
      //  jsx   一定要有唯一根元素   react 提供了 Fragment 来当这个唯一根元素  Fragment不会被渲染出来，相对其他的标签更加优化
      <Fragment>
        <Props name = 'oyyf' price = '1111' />
        <p>逗不逗啊</p>
      </Fragment>
    )
  }
}

export default App


