import index from './page/index';
import list from './page/list';
import detail from './page/detail';

//StackNavigator顶部导航，跳转页面和传递参数。
//TabNavigator底部标签栏，区分模块。
//DrawerNavigator左侧滑出页面

import { StackNavigator } from 'react-navigation';
const app = StackNavigator({
    index: {
        screen: index
    },
    list: {
        screen: list,
         navigationOptions:{
            // header：null//隐藏顶部导航条
            headerBackTitle:'返回' ,//返回箭头后面的文字
            // headerTruncatedBackTitle：上个页面 //返回箭头后的文字不符合，默认改成"返回"
            // headerRight：设置导航条右侧
            // headerLeft：设置导航条左侧。按钮或者其他
            // headerStyle：导航条的样式。去掉安卓导航条底部阴影elevation: 0,iOS用shadowOpacity: 0
            // headerTitleStyle：导航条文字样式。文字居中alignSelf:'center'
            // mode：card|modal|headerMode 定义跳转风格
            // headerTintColor：设置导航栏文字颜色
            // headerBackTitleStyle：设置导航条返回文字样式
            // onTransitionStart：当转换动画即将开始时被调用的功能。
            // onTransitionEnd：当转换动画完成，将被调用的功能。
            headerTitle:'详情',
            headerBackTitle:null,
        }
    },
    detail: {
        screen: detail
    }
});
export default app;




