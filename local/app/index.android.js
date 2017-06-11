/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';

 import {
   AppRegistry,
   StyleSheet,
   View,
   Text,
   Image
 } from 'react-native';

 import Dimensions from 'Dimensions';

 import Navigator from './TabNavigator'
 import Home from './home';

 class app extends Component {
   constructor() {
     super()
     this.state = {
       selectedTab: 'position',
     };
   }
   _renderPage() {

     switch (this.state.selectedTab) {
        case 'position':
          return (<Home></Home>)
          break;
        case 'user':
          return (<Text>user</Text>)
          break;
        case 'position':
          return (<Text>chat</Text>)
          break;
        case 'position':
          return (<Text>friend</Text>)
          break;
       default:

     }
     if(this.state.selectedTab == 'position') {
       return (<Home></Home>)
     }else {
       return(<Text>123212312</Text>)
     }
   }
   _navigaterPress(selected){
     this.setState({
       selectedTab: selected
     })
   }
   render() {
     return (
      <View style={styles.warp}>

        {this._renderPage()}

        <Navigator chatNum="5" onItemPress={this._navigaterPress.bind(this)} initSelected="position"></Navigator>
      </View>

     );
   }
 }
 const styles = StyleSheet.create({
   warp: {
     width: Dimensions.get('window').width,
     height: Dimensions.get('window').height
   }
 });
AppRegistry.registerComponent('app', () => app);
