import React, { Component } from 'react';
import { Image } from "react-native";
import { View, Text } from 'native-base';

import { Color } from '../config/style'
import { user } from '../config/user'

export default class ProfileHead extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', backgroundColor: Color.medDongker, width: '100%', paddingVertical: '3%', justifyContent:'flex-start' }}>
        <View style={{height:35, width: 35,  marginHorizontal: '4%', alignSelf: 'center'}} >
          <Image style={{ width: 30, height: 30 }} source={require('../assets/img/Account/profile.png')} />
        </View>
        <Text style={{ color: Color.orange, alignSelf:'center'}} >{user.email}</Text>
      </View>
    )
  }
};
