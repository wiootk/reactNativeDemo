import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View,Text,Image,FlatList,StatusBar,TouchableHighlight} from 'react-native';
import { topicCard } from '../styles';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as testActions from './actions';
class Home extends Component {
    //定义底部tabBar的icon和name
    static navigationOptions = {
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-home" size={24} color={tintColor} />
        )
    };
    componentDidMount() {
        this.props.fetchList();
    }
    _onPressItem = (id) => {
        this.props.navigation.navigate('detail', { id: id });
    };
    _keyExtractor = (item, index) => item.id;
    _renderItem = ({item}) => (
        <View style={{alignItems:'flex-start',flexWrap:'nowrap'}}>
            <Image style={topicCard.cover} source={{uri: item.thumbnail, crop: {left: 10, top: 50, width: 20, height: 40}}} style={{alignSelf:'center',width: 36, height: 36,flex: 6}}></Image>
            <TouchableHighlight style={topicCard.title} onPress={this._onPressItem.bind(this, item.id)} style={{alignSelf:'center',flex: 6}}>
                <Text numberOfLines={1} style={topicCard.titleText}>{item.title}</Text>
            </TouchableHighlight>           
        </View>
    );
    render() {
        return (
            <View >
                <FlatList data={this.props.news.data} refreshing={false}
                    keyExtractor={this._keyExtractor} renderItem={this._renderItem}/>
            </View>
        );
    }
}
//让业务组件和redux建立关联
export default connect(
    state => ({  news: state.news }),
    dispatch => bindActionCreators(testActions, dispatch)
)(Home);