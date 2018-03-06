// import React, { Component } from 'react';
// import { Text, View, Button } from 'react-native';

// class detail extends React.Component {
//     static navigationOptions = ({navigation}) => ({
//         title: `详情页__来自 ${navigation.state.params.page}`,
//     });
//     render() {
//         // const { params } = this.props.navigation.state;
//         const {navigate, state, goBack} = this.props.navigation;
//         return (
//             <View>
//         <Text>欢迎：detail 页   来自 {state.params.page}</Text>
//         <Button onPress={() => navigate('index')}   title="主页"  />
//         <Button  title="Go back"  onPress={() => goBack()}    />
//       </View>
//         );
//     }
// }
// export default detail;

import React, {Component} from 'react';
import {AppRegistry,StyleSheet,Text,View,Image,Button} from 'react-native';
import { StackNavigator} from 'react-navigation';
export default class detail  extends Component {
       static navigationOptions = ({navigation}) => ({
        title: `详情页__来自 ${navigation.state.params.page}`,
    });
    render() {
        // const { params } = this.props.navigation.state;
        const {navigate, state, goBack} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>欢迎：detail 页   来自 {state.params.page}</Text>
                <Button onPress={() => navigate('index')}   title="主页"  />
                <Button  title="Go back"  onPress={() => goBack()}    />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});