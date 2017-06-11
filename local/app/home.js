import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import {
  MapView,
  MapTypes,
  Geolocation
} from 'react-native-baidu-map';

import Dimensions from 'Dimensions';

class InfoBox extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    this.state = this.props.user;
    return (
      <View style={styles.infoBox}>
          <Image style={styles.avatar} source={{uri: this.state.avatar}}/>
          <View style={{margin: 20}}>
            <Text>{this.state.nickname}</Text>
            <Text>{this.state.dec}</Text>
          </View>
      </View>
    )
  }
}

import query from './query';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      mayType: MapTypes.NORMAL,
      zoom: 10,
      center: {
        longitude: 113.981718,
        latitude: 22.542449
      },
      trafficEnabled: false,
      baiduHeatMapEnabled: false,
      markers: [{
        longitude: 113.981718,
        latitude: 22.542449,
        title: "Window of the world"
      }],
      userInfo: null,
      users: [
        {nickname: "彭锋",
        avatar: 'https://groups35-images.b0.upaiyun.com/2015/06/924581f3_60c52320-e7e0-40d8-b8d7-d4fccc399d92_500x500.jpg',
        dec: 'you are your job'},
        {nickname: "苏琴",
        avatar: 'https://groups35-images.b0.upaiyun.com//2017/06/ea9upaosat4lslss.jpg',
        dec: 'it is good'},
        {nickname: "timi",
        avatar: 'https://wx.qlogo.cn/mmopen/zsUXYY6y4cJxFZSKycvjricyYW00J9VebFUianaG12pgUL1AxwibfvrCib9KFvLShS5qgT26Yib3sFmNapeZ0WQbibVFhPbcN7eRJv/0',
        dec: 'timi coming'}
      ]
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
      <MapView
        trafficEnabled={this.state.trafficEnabled}
        baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
        zoom={this.state.zoom}
        mapType={this.state.mapType}
        center={this.state.center}
        marker={this.state.marker}
        markers={this.state.markers}
        style={styles.map}
        onMarkerClick={(e) => {
          // console.warn(JSON.stringify(e));
          var info = null;
          for(let i = 0, _i = this.state.users.length; i < _i; i++) {
            if(this.state.users[i].nickname === e.title) {
              info = this.state.users[i];
            }
          }
          if(info) {
            this.setState({
              userInfo: info
            })
          }
        }}
        onMapLoaded={() => {
          Geolocation.getCurrentPosition()
            .then(data => {
             //  console.warn(JSON.stringify(data));
             query.post('/savePosition',{
               latitude: data.latitude,
               longitude: data.longitude,
             }, function(res) {
                // console.warn(res);
             })
              this.setState({
                zoom: 15,
                marker: {
                  latitude: data.latitude,
                  longitude: data.longitude,
                  title: "彭锋"
                },
                markers: [{
                  latitude: data.latitude,
                  longitude: data.longitude,
                  title: "彭锋"
                },{
                  latitude: data.latitude-0.001,
                  longitude: data.longitude-0.001,
                  title: "苏琴"
                },{
                  latitude: data.latitude+0.0012,
                  longitude: data.longitude+0.0012,
                  title: "timi"
                }],
                center: {
                  latitude: data.latitude,
                  longitude: data.longitude,
                  rand: Math.random()
                }
              });
            })
            .catch(e =>{
              console.warn(e, 'error');
            })
        }}
        onMapClick={(e) => {
        }}
      >
      </MapView>

      {
                       this.state.userInfo == null ? (
                            null
                        ) : (
                            <InfoBox user={this.state.userInfo}>
                                //部位空时想要显示的内容
                            </InfoBox>
                        )
                    }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 70,
    // marginBottom: 16
  },
  infoBox: {
    height: 100,
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#fff'
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
    margin: 10
  }
});
