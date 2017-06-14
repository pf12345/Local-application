import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, ListView } from 'react-native';

import Dimensions from 'Dimensions';

export default class Friends extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource(
      {
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2
      }
    );
    this.state = {
      dataSource: ds.cloneWithRows([{
        user: {
          name: 'timi',
          avatar: 'https://wx.qlogo.cn/mmopen/zsUXYY6y4cJxFZSKycvjricyYW00J9VebFUianaG12pgUL1AxwibfvrCib9KFvLShS5qgT26Yib3sFmNapeZ0WQbibVFhPbcN7eRJv/0'
        }
      },
      {
        user: {
          name: '彭锋',
          avatar: 'https://groups35-images.b0.upaiyun.com/2015/06/924581f3_60c52320-e7e0-40d8-b8d7-d4fccc399d92_500x500.jpg'
        }
      },
      {
        user: {
          name: '苏琴',
          avatar: 'https://groups35-images.b0.upaiyun.com//2017/06/ea9upaosat4lslss.jpg'
        }
      }]),
    };
  }

  _renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <View>
        <View style={styles.row}>
          <View>
            <Image style={{width:50,height:50,alignSelf:'center', borderRadius: 25}} source={{uri: rowData.user.avatar}}/>
          </View>
          <View style={{marginLeft:10, marginTop: 12}}>
            <Text style={{fontSize:18,color:'#333'}}>{rowData.user.name}</Text>
          </View>
        </View>
        <View style={styles.borderLine}></View>
      </View>
    )
  }

  render() {
    return (
      <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData,sectionID,rowId) => this._renderRow(rowData,sectionID,rowId)}
      />
      );
  }
}
const styles = StyleSheet.create({
  row: {
    flexDirection:'row',
    padding:10,
    backgroundColor:'white'
  },
  borderLine: {
    width: Dimensions.get('window').width,
    backgroundColor: '#dadada',
    height: 1
  }
})
