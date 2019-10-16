import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const Con = styled.div`
  width:200px;
  height:200px;
  border:1px dashed black;
  p{
    width:88px;
    height:88px;
    background:${props => props.color};
  }
`

export default class Four extends Component {

  render () {
    return (
      // 样式组件
      <Fragment>
        <h1> React样式添加--样式组件 </h1>
        <Con color = 'green'>
          <p/>
        </Con>
      </Fragment>
    )
  }
}
