import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import Dimensions from 'Dimensions';

import TabNavigator from 'react-native-tab-navigator';

export default class Navigator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: props.initSelected
    };
  }
  render() {
    return (
      <View style={styles.tab}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selected === 'user'}
            title="我的"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={{width: 22, height: 22}} source={require('./images/user.png')} />}
            renderSelectedIcon={() => <Image style={{width: 22, height: 22}} source={require('./images/user_select.png')} />}
            onPress={() => {
              this.setState({
                selected: 'user'
              })
              this.props.onItemPress('user')
            }}>
            <Text></Text>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selected === 'position'}
            title="定位"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={{width: 22, height: 22}} source={require('./images/position.png')} />}
            renderSelectedIcon={() => <Image style={{width: 22, height: 22}} source={require('./images/position_select.png')} />}
            onPress={() => {
              this.setState({
                selected: 'position'
              })
              this.props.onItemPress('position')
            }}>
            <Text></Text>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selected === 'chat'}
            title="消息"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={{width: 22, height: 22}} source={require('./images/chat.png')} />}
            badgeText={this.props.chatNum}
            renderSelectedIcon={() => <Image style={{width: 22, height: 22}} source={require('./images/chat_select.png')} />}
            onPress={() => {
              this.setState({
                selected: 'chat'
              })
              this.props.onItemPress('chat')
            }}>
            <Text></Text>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selected === 'friend'}
            title="好友"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={{width: 22, height: 22}} source={require('./images/friend.png')} />}
            renderSelectedIcon={() => <Image style={{width: 22, height: 22}} source={require('./images/friend_select.png')} />}
            onPress={() => {
              this.setState({
                selected: 'friend'
              })
              this.props.onItemPress('friend')
            }}>
            <Text></Text>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  warp: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  tab: {
    height: 49,
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
    left: 0,
    backgroundColor: '#fff'
  },
  tabText: {
        color: "#333",
        fontSize: 8
    },
    selectedTabText: {
        color: "#f05f48",
        fontSize: 8
    }
});
