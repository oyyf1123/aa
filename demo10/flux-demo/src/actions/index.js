/* 
 ! action 用于将视图的逻辑迁移到flux的actionCreators上
   actions都是方法，它的作用是创建action
*/

import {
  INCREMENT,
} from './actionType';
import dispatcher from '../dispatcher';

export const handleAdd = () => {
  // 创建动作
  const action = {
    type:INCREMENT,
  }
  // 发送动作 - action是不能发送动作的，得由dispatcher 来发送
  dispatcher.dispatch(action);
}