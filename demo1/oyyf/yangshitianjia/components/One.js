import React,{Component,Fragment} from 'react'

export default class One extends Component {

  styles = {
    text:{width:'100px',height:'100px',background:'blue'}
  }

  render () {
    const style = {
      text:{width:'100px',height:'100px',background:'red'}
    }
    return (
      // 第一种添加方式。行内样式
      
      <Fragment>
        <h1> React样式添加--行内样式 </h1>
        <p style = {{width:'100px',height:'100px',background:'yellow'}}></p>
        <p style={style.text}></p>
        <p style = {this.styles.text} />
      </Fragment>
    )
  }
}
