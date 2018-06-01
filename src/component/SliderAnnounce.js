import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

import { Color } from '../config/style'

export default class SliderAnnounce extends Component {

    render() {
        return (
            <View style={{flex:1}} >
                <Swiper horizontal={false} style={styles.wrapper} autoPlay={true} showsPagination={false}>
                    <Text style={styles.text}>Hello Swiper</Text>
                    <Text style={styles.text}>Beautiful</Text>
                    <Text style={styles.text}>And simple</Text>
                </Swiper>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    wrapper: {
        height: 10,
        backgroundColor: Color.green,
        justifyContent: 'flex-start',
    },
    text: {
        width: '90%',
        borderTopColor: Color.lightGrey,
        borderTopWidth: 1,
        alignSelf: 'center',
        padding: 5,
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    }
})