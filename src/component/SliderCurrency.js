import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

import { Color } from '../config/style';

export default class SliderCurrency extends Component {

    state = {
        price: [
            { currency: 'BNB /BTC', price: 0.94043, chart: '+2.96%' },
            { currency: 'EOS /BTC', price: 0.94043, chart: '+2.96%' },
            { currency: 'TRX /BTC', price: 0.94043, chart: '+2.96%' },
            { currency: 'ZEN /BTC', price: 0.94043, chart: '+2.96%' },
            { currency: 'ETH /BTC', price: 0.94043, chart: '+2.96%' },
            { Text: 'More', img: require('../assets/img/Account/gd.png') }

        ]
    }

    render() {
        return (
            <View style={{ flex: 0.4 }} >
                <Swiper
                    dotColor={Color.lightGrey}
                    activeDotStyle={{ width: 5, height: 5 }}
                    activeDotColor={Color.orange}
                    dotStyle={{ width: 5, height: 5 }}
                    paginationStyle={{ bottom: 1 }}
                    style={styles.wrapper}
                    autoPlay={true}
                >
                    <View style={{ flex: 1.1, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>
                        <View style={[styles.textContainer, { borderRightWidth: 0.4, borderColor: 'rgba(255,255,255,0.3)' }]}>
                            <Text style={{ color: Color.lightGrey, fontSize: 11, textAlign: 'center' }} >ZEN / BTC</Text>
                            <Text style={{ color: Color.pink, fontWeight: 'bold', fontSize: 16, textAlign: 'center' }} >0.094043</Text>
                            <Text style={{ color: Color.green, fontWeight: 'bold', fontSize: 9, textAlign: 'center' }} >+2.96%</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={{ color: Color.lightGrey, fontSize: 11, textAlign: 'center' }} >ZEN / BTC</Text>
                            <Text style={{ color: Color.pink, fontWeight: 'bold', fontSize: 16, textAlign: 'center' }} >0.094043</Text>
                            <Text style={{ color: Color.green, fontWeight: 'bold', fontSize: 9, textAlign: 'center' }} >+2.96%</Text>
                        </View>
                        <View style={[styles.textContainer, { borderLeftWidth: 0.4, borderColor: 'rgba(255,255,255,0.3)' }]}>
                            <Text style={{ color: Color.lightGrey, fontSize: 11, textAlign: 'center' }} >ZEN / BTC</Text>
                            <Text style={{ color: Color.pink, fontWeight: 'bold', fontSize: 16, textAlign: 'center' }} >0.094043</Text>
                            <Text style={{ color: Color.green, fontWeight: 'bold', fontSize: 9, textAlign: 'center' }} >+2.96%</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>
                        <View style={[styles.textContainer, { borderRightWidth: 0.4, borderColor: 'rgba(255,255,255,0.3)' }]}>
                            <Text style={{ color: Color.lightGrey, fontSize: 11, textAlign: 'center' }} >ZEN / BTC</Text>
                            <Text style={{ color: Color.pink, fontWeight: 'bold', fontSize: 16, textAlign: 'center' }} >0.094043</Text>
                            <Text style={{ color: Color.green, fontWeight: 'bold', fontSize: 9, textAlign: 'center' }} >+2.96%</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={{ color: Color.lightGrey, fontSize: 11, textAlign: 'center' }} >ZEN / BTC</Text>
                            <Text style={{ color: Color.pink, fontWeight: 'bold', fontSize: 16, textAlign: 'center' }} >0.094043</Text>
                            <Text style={{ color: Color.green, fontWeight: 'bold', fontSize: 9, textAlign: 'center' }} >+2.96%</Text>
                        </View>
                        <View style={[styles.textContainer, { borderLeftWidth: 0.4, borderColor: 'rgba(255,255,255,0.3)' }]}>
                            <Text style={{ color: Color.lightGrey, fontSize: 11, textAlign: 'center' }} >ZEN / BTC</Text>
                            <Text style={{ color: Color.pink, fontWeight: 'bold', fontSize: 16, textAlign: 'center' }} >0.094043</Text>
                            <Text style={{ color: Color.green, fontWeight: 'bold', fontSize: 9, textAlign: 'center' }} >+2.96%</Text>
                        </View>
                    </View>
                </Swiper>
            </View >
        )
    }
};

const styles = StyleSheet.create({
    textContainer: {
        marginHorizontal: 5,
        alignSelf: 'center',
        width: '30%',
        height: '70%',
        justifyContent: 'center',
    }
})