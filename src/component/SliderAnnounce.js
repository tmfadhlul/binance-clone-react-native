import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

import { Color } from '../config/style'

export default class SliderAnnounce extends Component {

    render() {
        return (
            <View style={styles.textWrapper} >
            <Image style={{width: 10, height: 10}} source={require('../assets/img/Home/hc.png')} />
            <Swiper horizontal={true} style={styles.wrapper} autoplay={true} showsPagination={false}>
                <Text style={styles.text}>EOS Mainet Swap Update</Text>
                <Text style={styles.text}>Binance list ioTex(IOTX)</Text>
                <Text style={styles.text}>Binance add  XRP/BNB GVT on list</Text>
            </Swiper>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    wrapper: {
    },
    textWrapper: {
        alignItems: 'center',
        flex: 0.1,
        flexDirection: 'row',
        alignSelf: 'center',
        width: '90%',
        borderTopColor: Color.lightGrey,
        borderTopWidth: 0.5,
    },
    text: {
        padding: 5,
        marginLeft: 5,
        alignSelf: 'flex-start',
        color: '#fff',
        fontSize: 10,
        fontWeight: '100',
    }
})