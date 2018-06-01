import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

export default class Slider extends Component {

    state = {
        img: [
            require('../assets/img/Home/home-1.png'),
            require('../assets/img/Home/home-2.png'),
            require('../assets/img/Home/home-3.png'),
            require('../assets/img/Home/home-4.png'),
            require('../assets/img/Home/home-5.png'),
            require('../assets/img/Home/home-6.png'),
            require('../assets/img/Home/home-7.png'),
            require('../assets/img/Home/home-8.png'),
        ]
    }

    render() {
        return (
            <View style={{ flex: 1.1 }} >
                <Swiper
                    showsPagination={false}
                    autoplay={true}>
                    {this.state.img.map((element, index) =>
                        <Image style={{width: '100%', height: '100%'}} source={element} />
                    )}
                </Swiper>
            </View >
                
        )
    }
};
