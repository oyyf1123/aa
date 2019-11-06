import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
// 数据分块处理

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;