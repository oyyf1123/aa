import { INCREMENT,ADDTODOLIST,DELLIST } from './actionType';
import store from '../store';

export const increment = () => {
  const action = {
    type:INCREMENT
  }
  store.dispatch( action )
}

export const addTodoList = (val) => {
  const action = {
    type: ADDTODOLIST,
    payload:val,
  }
  store.dispatch( action )
}

export const delList = (index) => {
  const action = {
    type: DELLIST,
    payload:index,
  }
  store.dispatch( action )
}