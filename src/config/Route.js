import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon, Button } from 'native-base'

import HomeScreen from '../screen/Home'
import TradesScreen from '../screen/Trades'
import MarketsScreen from '../screen/Markets'
import FundsScreen from '../screen/Funds'
import AccountScreen from '../screen/Account'
import { Title } from './style.js'

export const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
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
            }
        }
    }
)

export const FundsStack = createStackNavigator(
    {
        Funds: {
            screen: FundsScreen,
            navigationOptions: 
            {
                headerTitle: <Text style={Title.layout} >Funds</Text>,
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
            }
        }
    }
)

export const BottomStack = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: 
            {
                tabBarIcon: ({ tintColor }) => (<Icon name='ios-home' style={{color: tintColor}}/> )
            }
        },
        Market: {
            screen: MarketsStack,
            navigationOptions: 
            {
                tabBarIcon: ({ tintColor }) => (<Icon name='ios-home' style={{color: tintColor}}/> )
            }
        },
        Trades: {
            screen: TradeStack,
            navigationOptions: 
            {
                tabBarIcon: ({ tintColor }) => (<Icon name='ios-home' style={{color: tintColor}}/> )
            }
        },
        Funds: {
            screen: FundsStack,
            navigationOptions: 
            {
                tabBarIcon: ({ tintColor }) => (<Icon name='ios-home' style={{color: tintColor}}/> )
            }
        },
        Account: {
            screen: AccountStack,
            navigationOptions: 
            {
                tabBarIcon: ({ tintColor }) => (<Icon name='ios-home' style={{color: tintColor}}/> )
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'grey',
            showLabel: true,
            style: {
                backgroundColor: 'black',
                height: 57,
            }
        },
}
)

export const RootStack = createStackNavigator(
    {
        Main: BottomStack,
        Login: {
            screen: AccountStack
        }
    },
    {
            headerMode: 'none'
    }
)

const styles = StyleSheet.create({
    headerContainer: {
        fontSize: 15 ,
        zIndex: 0 ,
        fontWeight: 'bold' ,
        width: '100%', 
        position: 'relative', 
        textAlign: 'center',
        backgroundColor: 'transparent',
        color: 'black'
    }
})



