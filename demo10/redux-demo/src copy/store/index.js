/* 
  store是redux的数据管理者和存储者
*/

import { createStore } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

export default store;