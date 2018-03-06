import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import getReducers from './reducer';
//promiseMiddleware 是异步action的一个中间件
export default function getStore(reducer) {
    return createStore(
        getReducers(reducer),
        undefined,
        applyMiddleware(promiseMiddleware)
    );
}