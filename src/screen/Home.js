import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'native-base';
import { Swiper } from 'react-native-swiper';

import { Color } from '../config/style'
import Slider from '../component/Slider'
import SliderCurrencry from '../component/SliderCurrency'
import SliderAnnounce from '../component/SliderAnnounce'

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: Color.darkDongker, flex: 1 }} >
                <Slider />
                <SliderCurrencry />
                <SliderAnnounce />
            </View>
        )
    }
};
