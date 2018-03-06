import {   TEST_TYPE } from './actionTypes';
import { createAction } from 'redux-actions';
const thumbnail = 'https://facebook.github.io/react/img/logo_og.png';
// 获取news 列表数据
export var fetchList = createAction(TEST_TYPE, () => {
    return [1,2,3,4,5].map(item => {
        return {
            id: item,
            title: `[${item}]夏季又要到`,
            thumbnail: thumbnail
        }
    });
});