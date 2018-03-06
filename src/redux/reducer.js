import { combineReducers } from 'redux';
import news from './minePage';
export default function getReducers(navReducer) {
	//一个根reducer,把N个reducer组合起来
    return combineReducers({
        news,
        nav: navReducer
    });
}