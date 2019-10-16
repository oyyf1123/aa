import React,{Component,Fragment} from 'react'
import './Two.css'
export default class Two extends Component {

  render () {
    return (
      // 第一种添加方式。类名添加
      <Fragment>
        <h1> React样式添加--类名添加 </h1>
        <p className = 'size bg'/>
      </Fragment>
    )
  }
}
