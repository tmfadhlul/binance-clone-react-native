import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon, Button, Thumbnail } from 'native-base'

import {
    HomeScreen,
    TradesScreen,
    MarketsScreen,
    FundsScreen,
    AccountScreen,
    SecurityScreen
} from '../screen/index'
import { Title, Color } from './style.js'

export const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        }
    },
    {
        headerMode: 'none'
    }
)

export const MarketsStack = createStackNavigator(
    {
        MarketsStack: {
            screen: MarketsScreen,
            navigationOptions:
                {
                    headerTitle: <Text style={Title.layout} >Markets</Text>,
                    headerStyle: {
                        backgroundColor: Color.dongker,
                        elevation: 0

                    }
                }
        }
    }
)

export const TradeStack = createStackNavigator(
    {
        Trade: {
            screen: TradesScreen,
            navigationOptions:
                {
                    headerTitle: <Text style={Title.layout} >Trades</Text>,
                    headerStyle: {
                        backgroundColor: Color.dongker
                    }
                }
        }
    },
)

export const FundsStack = createStackNavigator(
    {
        Funds: {
            screen: FundsScreen,
            navigationOptions:
                {
                    headerTitle: <Text style={Title.layout} >Funds</Text>,
                    headerStyle: {
                        backgroundColor: Color.dongker
                    }
                }
        }
    }
)

export const AccountStack = createStackNavigator(
    {
        Account: {
            screen: AccountScreen,
            navigationOptions:
                {
                    headerTitle: <Text style={Title.layout} >Account</Text>,
                    headerStyle: {
                        backgroundColor: Color.dongker,
                        elevation: 0
                    }
                }
        },
    }
)

export const SecureStacks = createStackNavigator(
    {
        Security: {
            screen: SecurityScreen,
            navigationOptions:
                {
                    headerLeft: <Icon name="arrow-back" style={{color: 'white', marginHorizontal: 10,}} />,
                    headerTitle: <Text style={Title.layout} >Security</Text>,
                    headerStyle: {
                        backgroundColor: Color.dongker,
                        elevation: 0
                    }
                }
        }
    }
)

export const BottomStack = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack
        },
        Market: {
            screen: MarketsStack
        },
        Trades: {
            screen: TradeStack
        },
        Funds: {
            screen: FundsStack
        },
        Account: {
            screen: AccountStack
        }
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor, focused }) => {
                const { routeName } = navigation.state
                switch (routeName) {
                    case 'Home':
                        !focused ? iconName = require('../assets/img/Nav/h.png') : iconName = require('../assets/img/Nav/ha.png');
                        break;
                    case 'Market':
                        !focused ? iconName = require('../assets/img/Nav/m.png') : iconName = require('../assets/img/Nav/ma.png');
                        break;
                    case 'Trades':
                        !focused ? iconName = require('../assets/img/Nav/t.png') : iconName = require('../assets/img/Nav/ta.png');
                        break;
                    case 'Funds':
                        !focused ? iconName = require('../assets/img/Nav/f.png') : iconName = require('../assets/img/Nav/fa.png');
                        break;
                    case 'Account':
                        !focused ? iconName = require('../assets/img/Nav/a.png') : iconName = require('../assets/img/Nav/aa.png');
                        break;
                    default:
                        break;
                }
                return <Thumbnail square style={{ width: 15, height: 15 }} source={iconName} />
            }
        }),
        tabBarPositons: 'bottom',
        tabBarOptions: {
            activeTintColor: Color.orange,
            inactiveTintColor: Color.lightGrey,
            height: 45,
            paddingVertical: 5,
            style: {
                backgroundColor: Color.dongker
            }
        },
    },
)

export const RootStack = createStackNavigator(
    {
        Main: BottomStack,
        Secure: SecureStacks
    },
    {
        headerMode: 'none'
    }
)



