/* 
 dispatcher  1. 修改状态
*/

import { Dispatcher } from 'flux';
import {
  INCREMENT
} from '../actions/actionType';
import store from '../store'
// 得到 dispatcher

const dispatcher = new Dispatcher();

// dispatcher想要使用得注册


// dispatcher.register( callback )

dispatcher.register((action) => {
  switch (action.type) {
    case INCREMENT:
      store.state.count++;
      // console.log(store.state.count);
      break;
  
    default:
      break;
  }
})

export default dispatcher;