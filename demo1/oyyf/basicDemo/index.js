// import React from 'react';  // react 的顶级库 有很多react的api 

// import ReactDOM from 'react-dom'   //将react组件编译成dom结构
              
// // ReactDOM.render(元素/组件，已有的容器)    react元素--普通的jsx

// // const ele = <h3> 欧阳逸峰 </h3>
// // 函数式组件，会接收标签上的属性  参数props就是用来接收这个绑定的属性的
// //  函数必须返回一个jsx结构  

// // 函数式组件的好处： 1. 函数式编程   2. 复用性高，拥有独立作用域
// const Ele = ( props ) => {   // 写成函数，可以传参，更加灵活多变 名首字母必须大写
//   return <h3> { props.info } </h3>
// };

// ReactDOM.render(
//   // ele({
//   //   info:'Hello React'
//   // }),   // jsx 就是虚拟dom对象模型
//   <Ele info = 'hello oyyf' />,     // 改成标签化形式，更加符合标签化
//   document.querySelector('#root')
// )



//  类组件

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(
  <App name = '欧阳逸峰' />,
  document.querySelector('#root')
)
