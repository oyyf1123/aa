/* 
  reducer 是一个纯函数
  接收两个参数： previousState 初始化状态   action  actions发过来的动作
*/
import {
  INCREMENT,
  ADDTODOLIST,
  DELLIST,
}  from '../actions/actionType'

const state = {
  // 初始值 这个值  只能读不能写
  count: 0,
  lists: [
    {
      id: 1,
      task:'任务一',
    },
    {
      id: 2,
      task:'任务二',
    },
  ]
}

const rootReducer = (previousState = state , action) => {
  // state只读不能变， 所以previousState也不能变  需要克隆来解决返回新状态的需求
  //  浅克隆  深克隆=》 loadsh_.cloneDeep
  const newState = JSON.parse(JSON.stringify(previousState));

  console.log(newState)
  // 判断用户的动作 -》 修改数据

  switch (action.type) {
    case INCREMENT:
      newState.count++;
      break;
    case ADDTODOLIST:
      newState.lists.push({
        id: newState.lists.length && newState.lists[newState.lists.length - 1].id + 1 || 1,
        task:action.payload,
      });
      break;
    case DELLIST:
      newState.lists.splice( action.payload, 1 );
      break;
    default:
      break;
  }

  return newState;
}

export default rootReducer;