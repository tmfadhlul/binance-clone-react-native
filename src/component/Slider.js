import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Swiper } from 'react-native-swiper';

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
            < View style={{ width: '100%', height: '100%'}} >
                {this.state.img.map((element, index) => {
                    <View style={{ width: '100%', height: '100%'}} >
                            <Image source={require('../assets/img/home-1.png')} />
                    </View>
                })}
            </View >
        )
    }
};
