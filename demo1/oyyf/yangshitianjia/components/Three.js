import React, { Component, Fragment } from 'react'
import classname from 'classname'
import  './Three.scss'

export default class Three extends Component {

  render () {
    return (
      // 第一种添加方式。不同的条件添加不同的样式
      <Fragment>
        <h1> React样式添加--不同的条件添加不同的样式 </h1>
        <p className={classname({
          size: true,
          success: false,
          fal:true,
        })}/>
      </Fragment>
    )
  }
}
