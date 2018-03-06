import React, { Component } from 'react';
import { View, Text} from 'react-native';
export default class NewsDetail extends Component {
    static navigationOptions = {
        title: '详情页',
    }
    render() {
        return (
            <View><Text>小哥，精彩哦。。。</Text></View>
        );
    }
}