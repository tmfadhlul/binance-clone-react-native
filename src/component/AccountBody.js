import React, { Component } from 'react';
import { FlatList, Text } from "react-native";
import { View } from 'native-base';

import { Color } from "../config/style";

export default class AccountBody extends Component {

    state = {
        feature: [
            { list: 'Using BNB to pay for fees (50% discount)', marginTop: 4, marginBottom: 4},
            { list: 'Referral Program', marginTop: 4, marginBottom: 4},
            { list: 'Identity Authentication', marginTop: 4, marginBottom: 4},
            { list: 'Security', marginTop: 4, marginBottom: 0}, 
            { list: 'Setting', marginTop: 0, marginBottom: 4},
            { list: 'Support', marginTop: 4, marginBottom: 4},            
        ]
    }

    render() {
        return (
            <View style={{ height: '100%', marginTop: 0 }} >
                <FlatList
                    numColumns={1}
                    data={this.state.feature}
                    renderItem={({ item }) =>
                        <View style={{ backgroundColor: Color.medDongker, marginTop: item.marginTop, marginBottom: item.marginBottom,paddingVertical: 13, justifyContent: 'center' }} >
                            <View style={{ width: '75%', alignSelf: 'center' }} onTouchStart={() => this.props.navigation.navigate('Login')} >
                                <Text style={{ color: 'white', textAlign: 'left', fontSize: 13 }} >{item.list}</Text>
                            </View>
                        </View>
                    } />
            </View>
        )
    }
};
