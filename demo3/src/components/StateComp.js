import React, { Component } from 'react'

export default class StateComp extends Component {
  //  状态只能在当前组件中定义，也只能在当前组件中修改
  //   实例属性定义形式，  构造函数定义形式

  // state = {
  //   info:'你好，oyyf'
  // }

  constructor(props) {   // 这里的props参数是在父组件中绑定在子组件中的属性
    super(props)  // 这里super(props) 将props属性赋值给了 this.props
    this.state = {
      info:'你好，欧阳逸峰'
    }
  }

  changeInfo = () => { // 在react中的状态修改只能使用setState(obj/function , callback)有两个参数
    // this.setState({   // 对象形式
    //   info:'别睡觉了！'
    // }) 

    // 参数是方法
    this.setState(() => {  // 要返回值，返回的是一个对象
      // console.log(1);    //输出的是 3 1 2  setState 是异步的
      return {
        info:'嘿嘿'
      }
    }, () => {
        // console.log(2); 在方法执行后  再执行此次callback

    })
    // console.log(3);
  }

  render() {
    return (
      <div>
        <button onClick = {this.changeInfo}> 改变info </button>
        <p> {this.state.info} </p>
        <p> {this.props.name} </p>
      </div>
    )
  }
}
