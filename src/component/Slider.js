import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

export default class Slider extends Component {

    state = {
        img: [
            require('../assets/img/home-1.png'),
            require('../assets/img/home-2.png'),
            require('../assets/img/home-3.png'),
            require('../assets/img/home-4.png'),
            require('../assets/img/home-5.png'),
            require('../assets/img/home-6.png'),
            require('../assets/img/home-7.png'),
            require('../assets/img/home-8.png'),
        ]
    }

    render() {
        return (
            <Swiper
                showsPagination={false}
                autoPlay={true}>
                {this.state.img.map((element, index) =>
                    <Image style={{ width: '100%', height: '90%', overflow: 'visible' }} source={element} />
                )}
            </Swiper>
        )
    }
};
