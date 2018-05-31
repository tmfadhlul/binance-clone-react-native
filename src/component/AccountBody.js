import React, { Component } from 'react';
import { FlatList, Text, Image } from "react-native";
import { View } from 'native-base';

import { Color } from "../config/style";

const user = {
    id: 35129339,
    auth: true,
}

export default class AccountBody extends Component {

    state = {
        feature: [
            { 
                list: 'Using BNB to pay for fees (50% discount)', 
                marginTop: 4, 
                marginBottom: 4, 
                img: require('../assets/img/Account/DB.png'),
                action: 'Login'
            },
            { 
                list: 'Referral Program', 
                marginTop: 4, 
                marginBottom: 4, 
                img: require('../assets/img/Account/referensi.png'),  
                btn: require('../assets/img/Account/gd.png'),
                txt: `ID : ${user.id}`,
                style: {color: Color.lightGrey, right: 22,},
                action: 'Login'                 
            },
            { 
                list: 'Identity Authentication', 
                marginTop: 4, 
                marginBottom: 4, 
                img: require('../assets/img/Account/is.png'), 
                txt: user.auth === true ? 'Verified' : 'Unverified',
                style: {color: 'white', right: 10,},
                action: 'Login'                  
            },
            { 
                list: 'Security', 
                marginTop: 4, 
                marginBottom: 0, 
                img: require('../assets/img/Account/security.png'),  
                btn: require('../assets/img/Account/gd.png'),
                action: 'Login'
            }, 
            { 
                list: 'Setting', 
                marginTop: 0, 
                marginBottom: 4, 
                img: require('../assets/img/Account/iu.png'),  
                btn: require('../assets/img/Account/gd.png'),
                action: 'Login'
            },
            { 
                list: 'Support', 
                marginTop: 4, 
                marginBottom: 4, 
                img: require('../assets/img/Account/support.png'),  
                btn: require('../assets/img/Account/gd.png'),
                action: 'Login'
            },            
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
                            <Image style={{marginLeft: 13,position: 'absolute',alignSelf: 'flex-start'}} source={item.img} />                            
                            <View style={{ width: '75%', alignSelf: 'center' }} onTouchEnd={() => this.props.navigation.navigate(item.action)} >
                                <Text style={{position: 'relative', color: 'white', textAlign: 'left', fontSize: 13 }} >{item.list}</Text>
                            </View>
                            <Image style={{right: 10, position: 'absolute',alignSelf: 'flex-end'}} source={item.btn} />
                            <Text style={[item.style,{position: 'absolute',alignSelf: 'flex-end'}]} >{item.txt}</Text> 
                        </View>
                    } />
            </View>
        )
    }
};
