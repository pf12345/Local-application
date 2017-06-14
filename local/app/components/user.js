import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, ListView } from 'react-native';

import Dimensions from 'Dimensions';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        pics: [
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497461187382&di=d9362803aa0a85300b6d7b80a77ab2ec&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F17%2F51%2F81%2F23b58PICDUg_1024.PNG'
        ],
        name: "彭锋",
        sex: "man",
        description: 'you are your job!',
        age: 22
      }
    }
  }

  _renderSex() {
    if(this.state.sex == 'man') {
      return (
        <Image style={{height: 12, width: 12, marginTop: 3}} source={require('./../images/man.png')} />
      )
    }else{
      return (
        <Image style={{height: 12, width: 12, marginTop: 3}} source={require('./../images/woman.png')} />
      )
    }
  }

  render() {
    return (
      <View>
        <Image style={styles.topPic} source={{uri: this.state.user.pics[0]}} />
        <View style={styles.userInfo}>
          <Text style={{fontSize: 22}}>{this.state.user.name}</Text>
          <View style={{flexDirection:'row', marginTop: 3}}>
            {this._renderSex()}<Text style={{fontSize: 12, marginLeft: 5}}>{this.state.user.age}</Text>
          </View>
          <Text style={{fontSize: 14, color: '#999', marginTop: 3}}>{this.state.user.description}</Text>
        </View>
        <View style={styles.borderLine}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  topPic: {
    width: Dimensions.get('window').width,
    height: 120
  },
  userInfo: {
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    height: 100,
    padding: 10
  },
  borderLine: {
    width: Dimensions.get('window').width,
    backgroundColor: '#dadada',
    height: 1
  }
})
