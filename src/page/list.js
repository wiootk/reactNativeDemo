// import React, { Component } from 'react';
// import { Text, View, Button } from 'react-native';

// class list extends React.Component {
//     static navigationOptions = {
//         title: '列表页'
//     };
//     render() {
//         const {navigate} = this.props.navigation;
//         return (
//             <View>
//                 <Text>欢迎：list 页</Text>
//                 <Button onPress={() => navigate('index')}   title="主页"  />
//                 <Button onPress={() => navigate('list')}   title="列表页"  />
//                 <Button onPress={() => navigate('detail', {
//                 page: '列表页'
//             })} title="详情页"  />             
//             </View>
//         );
//     }
// }
// export default list;


import React, {Component} from 'react';
import {AppRegistry,StyleSheet,Text,View,Image,Button} from 'react-native';
import { NavigationActions } from 'react-navigation'
export default class list extends Component {
    static navigationOptions = {
        title: 'list页',
        tabBarLabel: '列表页',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/photo.jpg')}
                style={[styles.icon,{tintColor: tintColor} ]}/>
        ),
    };
    goToDetail() {
        const {dispatch} = this.props.navigation;
        const resetAction = NavigationActions.reset({
            index: 0,//指定显示数组内的路由
            actions: [
                NavigationActions.navigate({ routeName: 'detail',params:{page: '列表页'}}),
            ]
        });
        dispatch(resetAction);
    }
    render() {
         const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
            <Text>欢迎：list 页</Text>
             <Button onPress={() => navigate('index')}   title="主页"  />
             <Button onPress={() => navigate('list')}   title="列表页"  />
             <Button onPress={() => navigate('detail', {
                page: '列表页'
            })} title="详情页"  />              
                <Button onPress={() => this.goToDetail()} title="跳转详情页+传参+清空路由" />
            </View>
        );
    }
}
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