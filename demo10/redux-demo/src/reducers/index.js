

import { combineReducers } from 'redux';
// 帮助我们实现数据分块的
import homeReducer from './homeReducer';

const rootReducer = combineReducers({
  // 分块的reducer
  homeReducer,
})


export default rootReducer;