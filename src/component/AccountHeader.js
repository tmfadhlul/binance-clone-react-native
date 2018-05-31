import React, { Component } from 'react';
import { Image } from "react-native";
import { View, Text } from 'native-base';

import { Color } from '../config/style'

export default class ProfileHead extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', backgroundColor: Color.medDongker, width: '100%', paddingVertical: '-10%' }}>
        <View style={{height:35, width: 35,  margin: '4%'}} >
          <Image style={{ width: 30, height: 30 }} source={require('../assets/img/profile.png')} />
        </View>
        <Text style={{ positon: 'absolute', marginVertical: '5%', color: Color.orange, height: '100%' }} >tmfadhlul@gmail.com</Text>
      </View>
    )
  }
};
