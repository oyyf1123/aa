
//  store是flux的一个组成部分
//  存储状态
//  功能-- 1. 存储状态  2.更新视图 -> 事件发布  事件订阅  -> Node的evernts模块来实现



const events = require('events');


//  創建store模塊
const store = {
  ...events.EventEmitter.prototype, //给store添加  on emit属性
  state: {  // 定义一个状态
    count:0
  },
  getState () { //获取状态
    return this.state.count;
  }
}



//  導出store模塊
export default store;
