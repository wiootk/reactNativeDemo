// import {StackNavigator} from "react-navigation";
// import MainPage from './page/mainPage';
// import detail from './page/detail';
// import MyDraw from './page/DrawPage';

// const routers = StackNavigator({
//     Main: {     screen: MainPage   },
//     detail: {     screen: detail },
//     MyDraw: {     screen: MyDraw },
// });
// module.exports = routers;




import {TabNavigator,StackNavigator,addNavigationHelpers}from "react-navigation";

import Home from './redux/home';
import detail from './redux/detail';

//底部的tabBar导航
const TabbarNavigator = TabNavigator({
    Home: { screen: Home }
}, {   initialRouteName: 'Home'});
//整个应用的路由栈
const AppNavigator = StackNavigator({
    TabBar: {
        screen: TabbarNavigator,
        navigationOptions: {      header: null    }
    },
    detail: {
        path: 'news/:id',
        screen: detail
    }
});
export { AppNavigator};