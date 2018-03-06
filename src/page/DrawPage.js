import React, {Component} from 'react';
import {AppRegistry,StyleSheet,Text,View,Image,Button,ScrollView} from 'react-native';
import {DrawerNavigator, DrawerItems} from 'react-navigation';
class MyHomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={() => this.props.navigation.navigate('Notifications')} title="notifications" />
                <Button onPress={() => this.props.navigation.navigate('DrawerOpen')} title="左侧菜单开" />
                <Button onPress={() => this.props.navigation.navigate('DrawerClose')} title="左侧菜单关" />
            </View>
        );
    }
}
class MyNotificationsScreen extends Component { 
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={() => this.props.navigation.navigate('Home')} title="Go back home" />
            </View>
        );
    }
}

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        {/*<DrawerItems {...props} />*/}
        <View>
            <Text>左侧菜单</Text>
            <Text>你好美女</Text>
        </View>
    </ScrollView>
);
const MyDraw = DrawerNavigator({
        Home: {  screen: MyHomeScreen },
        Notifications: {  screen: MyNotificationsScreen    },
    }, {
        //drawerWidth: 200, // 抽屉宽
        drawerPosition: 'left', // 抽屉在左边还是右边
        contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
        // contentOptions: {
        //     initialRouteName: MyHomeScreen, // 默认页面组件
        //     activeTintColor: 'white',  // 选中文字颜色
        //     activeBackgroundColor: '#ff8500', // 选中背景颜色
        //     inactiveTintColor: '#666',  // 未选中文字颜色
        //     inactiveBackgroundColor: '#fff', // 未选中背景颜色
        //     style: {  // 样式
        //
        //     }
        // }
    });
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
    container:{justifyContent: 'center', alignItems: 'center', flex: 1}
});

export default  MyDraw;