/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 /**
  * Sample React Native App
  * https://github.com/facebook/react-native
  * @flow
  */

 import React, { Component } from 'react';

 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   TouchableHighlight
 } from 'react-native';

 import BaiduMapDemo from './BaiduMapDemo';

 class app extends Component {
   render() {
     return (
       <BaiduMapDemo />
     );
   }
 }

 // AppRegistry.registerComponent('rn', () => rn);
AppRegistry.registerComponent('app', () => app);
