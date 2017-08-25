import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducer/index';
import thunk from 'redux-thunk'; // 异步操作中间件
import {createLogger} from 'redux-logger'; // 日志中间件
// 创建一个Redux store 来存放应用中所有的state,应用中应有且仅有一个store。
let enhancer = compose(
    applyMiddleware(thunk, createLogger()),
);
const store = createStore(reducers, enhancer);

export default store;