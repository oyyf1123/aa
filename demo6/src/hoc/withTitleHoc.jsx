import React from 'react';
import './index.css';
//  高阶组件是一个函数，接收一个组件作参数

export const connect = (fn) => {
  const obj = {
    name: 'ouyang',
    age: 20,
    sex: 'male'
  }
  const key = fn()
  return UiComponent => {
    return class x extends React.Component{
  
      render () {
        return (
          <div>
            <UiComponent value={obj[key]}/>
            <div className='bar'>
              <span>电影</span>
              <span>影院</span>
              <span>我的</span>
            </div>
          </div>
        )
      }
    }
  }
}

// const HocComp = UiComponent => {
//   const name = '邹明'
//   return class x extends React.Component{

//     render () {
//       return (
//         <div>
//           <UiComponent name={name}/>
//           <div className='bar'>
//             <span>电影</span>
//             <span>影院</span>
//             <span>我的</span>
//           </div>
//         </div>
//       )
//     }
//   }
// }

// export default HocComp;