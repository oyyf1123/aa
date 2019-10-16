import React, { Component,Fragment } from 'react'
import One from './components/One'
import Two from './components/Two'
import Three from './components/Three'
import Four from './components/Four'


class App extends Component{
  render () {
    return (
      //  jsx   一定要有唯一根元素   react 提供了 Fragment 来当这个唯一根元素
      <Fragment>
        <h3>React的组件的样式的添加4钟 </h3>
        <One></One>
        <Two />
        <Three />
        <Four />
      
      </Fragment>
    )
  }
}

export default App


