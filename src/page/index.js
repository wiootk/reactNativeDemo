// import React, { Component } from 'react';
// import { AppRegistry, Text, View, Button } from 'react-native';
// class index extends React.Component {
//     static navigationOptions = {
//         title: 'index页'
//     };
//     render() {
//         const {navigate} = this.props.navigation;
//         return (
//             <View>
//             <Text>欢迎：index 页</Text>
//             <Button onPress={() => navigate('index')}   title="主页"  />
//             <Button onPress={() => navigate('list')}   title="列表页"  />
//             <Button onPress={() => navigate('detail', {
//                 page: '主页'
//             })} title="详情页"  /> 
//             </View>
//         );
//     }
// }
// export default index;


import React, {Component} from 'react';
import {AppRegistry,StyleSheet,Text,View,Image,Button,TouchableOpacity} from 'react-native';
import DrawPage from './DrawPage'
export default class index extends Component {
    static navigationOptions = {
        title: 'index页',
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor }) => (
            <Image   source={require('../images/photo.jpg')}
                style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
            />
        ),
        headerTitleStyle: {
         alignSelf:'center'
        },
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
//   <DrawPage/>
            <View>
             <DrawPage/>
         <Text>欢迎：index 页</Text>
         <Button onPress={() => navigate('index')}   title="主页"  />
         <Button onPress={() => navigate('list')}   title="列表页"  />
         <Button onPress={() => navigate('detail', {
                page: '主页'
            })} title="详情页"  />
        <Button onPress={() => navigate('MyDraw')}   title="MyDraw"  />
         </View>
        )
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