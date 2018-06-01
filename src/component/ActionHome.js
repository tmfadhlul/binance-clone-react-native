import React, { Component } from 'react';
import { View, Image } from 'native-base';

export default class ActionHome extends Component {

    state = {
        bar: [
            {src: require('../assets/img/Home/g3.png'), title: 'Support' },
            {src: require('../assets/img/Home/g4.png'), title: 'Favourites' },
            {src: require('../assets/img/Home/g5.png'), title: 'Deposit' },
            {src: require('../assets/img/Home/g6.png'), title: 'Withdrawal' }
        ]
    }

    render() {
        return (
            <View style={{flexDirection: 'row'}} >
                {this.state.bar.map((element, index) => 
                    <Image source={element.src}/>
                )}
            </View>
        )
    }
};
