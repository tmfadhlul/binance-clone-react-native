import React, { Component } from 'react';
import { FlatList, Text, Image } from 'react-native';
import { View } from 'native-base';

import { Color } from '../config/style';
import { user } from '../config/user'


export default class AccountBody extends Component {

    handleButton(screen){
        this.props.navigation.navigate(screen)
      }

    state = {
        feature: [
            { 
                list: 'Using BNB to pay for fees (50% discount)', 
                marginTop: 4, 
                marginBottom: 4, 
                img: require('../assets/img/Account/DB.png'),
                action: 'Secure'
            },
            { 
                list: 'Referral Program', 
                marginTop: 4, 
                marginBottom: 4, 
                img: require('../assets/img/Account/referensi.png'),  
                btn: require('../assets/img/Account/gd.png'),
                txt: `ID : ${user.id}`,
                style: {color: Color.lightGrey, right: 22,},
                action: 'Secure'                 
            },
            { 
                list: 'Identity Authentication', 
                marginTop: 4, 
                marginBottom: 4, 
                img: require('../assets/img/Account/is.png'), 
                txt: user.auth === true ? 'Verified' : 'Unverified',
                style: {color: 'white', right: 10,},
                action: 'Secure'                  
            },
            { 
                list: 'Secure', 
                marginTop: 4, 
                marginBottom: 0, 
                img: require('../assets/img/Account/security.png'),  
                btn: require('../assets/img/Account/gd.png'),
                action: 'Secure'
            }, 
            { 
                list: 'Setting', 
                marginTop: 0, 
                marginBottom: 4, 
                img: require('../assets/img/Account/iu.png'),  
                btn: require('../assets/img/Account/gd.png'),
                action: 'Secure'
            },
            { 
                list: 'Support', 
                marginTop: 4, 
                marginBottom: 4, 
                img: require('../assets/img/Account/support.png'),  
                btn: require('../assets/img/Account/gd.png'),
                action: 'Secure'
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
                            <View style={{ width: '75%', alignSelf: 'center' }} onTouchEnd={() => this.handleButton(item.action)} >
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
