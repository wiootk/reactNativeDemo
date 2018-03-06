import React, {Component} from 'react';
import {    StyleSheet,    Image,    Style} from 'react-native';
import {TabNavigator} from "react-navigation";
import index from './index';
import list from './list';

const mainPage = TabNavigator({
    index: {
        screen: index,
        navigationOptions: {   }
    },
    list: {
        screen: list,
        //以下参数也可放置在list.js页面
        navigationOptions: {
            title: '列表',
            tabBarLabel: '列表',
            tabBarIcon: ({ tintColor }) => (
                <Image   source={  require('../images/photo.jpg')   }
                    style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
                />
            ),
            headerTitleStyle: {
                alignSelf:'center'
            }
        }
    }
   
}, {
    animationEnabled: true, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否左右滑动,如果有DrawerNavigator,最好设置为false避免手势冲突
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#0F9C00', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0         style: {
            backgroundColor: '#444', // TabBar 背景色
            height:50
        },
        labelStyle: {
            fontSize: 12, // 文字大小,
            marginTop: 0,
        }  
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        width:20,
        height:20
    }
});
module.exports = mainPage;