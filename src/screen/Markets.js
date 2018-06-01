import React, { Component } from 'react';
import { View } from 'react-native';

import { Color } from '../config/style'
import { Tabs, Tab, Header } from 'native-base';

export default class MarketScreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: Color.darkDongker, height: '100%', width: '100%' }} >
            {/* <Header hasTabs >
                <Tabs>
                    <Tab>
                    </Tab>
                </Tabs>
                </Header> */}
            </View>
        )
    }
};
