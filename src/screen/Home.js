import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'native-base';
import { Swiper } from 'react-native-swiper';

import { Color } from '../config/style'
import Slider from '../component/slider'

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={{backgroundColor: Color.darkDongker, height: '100%', width: '100%'}} >
                  <Slider />
            </View>
        )
    }
};
