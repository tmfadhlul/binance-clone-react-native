import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text } from 'native-base';

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
            <View style={{flex: 1, flexDirection: 'row',alignSelf: 'center',top: 5 ,justifyContent: 'space-between',width: '80%' , height: '100%'}} >
                {this.state.bar.map((element, index) =>
                <View style={{alignSelf: 'center'}}>
                    <Image style={{height: 25,width:25,alignSelf: 'center', marginBottom: 3}} source={element.src}/>
                    <Text style={{color: 'white', fontSize: 10}} > {element.title} </Text>
                </View>
                )}
            </View>
        )
    }
};
