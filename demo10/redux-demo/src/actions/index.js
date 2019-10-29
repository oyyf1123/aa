import ajax from '../utils/ajax';
import {
  MOVIELIST,
  GETCOMINGMOVIELIST,
} from './actionType';

export const getMovieList = () => { // redux-thunk 要求我们返回的是一个函数，参数是dispatch
  return async dispatch => {
    // 进行数据请求
    const result = await ajax({
      url: '/ajax/movieOnInfoList',
      params: {
        token: '',
      }
    })
// 创建动作
    const action = {
      type: MOVIELIST,
      payload:result.data,
    }
// 发送动作 
    dispatch(action)
  }
}

export const getComingMovieList = (id) => { // redux-thunk 要求我们返回的是一个函数，参数是dispatch
  return async dispatch => {
    // 进行数据请求
    const result = await ajax({
      url: '/ajax/movieOnInfoList',
      params: {
        token: '',
        movieIds: id
      }
    })
// 创建动作
    const action = {
      type: GETCOMINGMOVIELIST,
      payload:result.data.coming,
    }
// 发送动作 
    dispatch(action)
  }
}