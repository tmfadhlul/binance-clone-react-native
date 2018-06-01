import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Dimension } from 'react-native';
import { Button, Content } from 'native-base';
import { Swiper } from 'react-native-swiper';

import { Color } from '../config/style'
import Slider from '../component/Slider'
import SliderCurrency from '../component/SliderCurrency'
import SliderAnnounce from '../component/SliderAnnounce'
import ActionHome from "../component/ActionHome";


export default class Home extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{height: 665, backgroundColor: Color.darkDongker, flex: 1 }}  >
                    <View style={{ flex: 1.3, backgroundColor: Color.medDongker }} >
                        <Slider />
                        <SliderCurrency />
                        <SliderAnnounce />
                    </View>
                    <View style={{ flex: 0.2, backgroundColor: Color.medDongker, marginVertical: '2%' }} >
                        <ActionHome />
                    </View>
                    <View style={{ flex: 0.7 }} >
                        <View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
};
