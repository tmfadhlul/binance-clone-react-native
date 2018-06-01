import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon, Button } from 'native-base'

import { 
    HomeScreen, 
    TradesScreen,
    MarketsScreen,
    FundsScreen,
    AccountScreen
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
        }
    }
)

export const BottomStack = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: 
            {
                tabBarIcon: ({ tintColor }) => (<Icon name='home' style={{color: tintColor}}/> )
            }
        },
        Market: {
            screen: MarketsStack,
            navigationOptions: 
            {
                tabBarIcon: ({ tintColor }) => (<Icon name='stats' style={{color: tintColor}}/> )
            }
        },
        Trades: {
            screen: TradeStack,
            navigationOptions: 
            {
                tabBarIcon: ({ tintColor }) => (<Icon name='ios-aperture' style={{color: tintColor}}/> )
            }
        },
        Funds: {
            screen: FundsStack,
            navigationOptions: 
            {
                tabBarIcon: ({ tintColor }) => (<Icon name='archive' style={{color: tintColor}}/> )
            }
        },
        Account: {
            screen: AccountStack,
            navigationOptions: 
            {
                tabBarIcon: ({ tintColor }) => (<Icon name='people' style={{color: tintColor}}/> )
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: Color.orange,
            inactiveTintColor: Color.lightGrey,
            showLabel: true,
            style: {
                backgroundColor: Color.dongker,
                height: 45,
                paddingVertical: 5
            }
        },
}
)

export const RootStack = createStackNavigator(
    {
        Main: BottomStack,
        Login: {
            screen: MarketsStack
        }
    },
    {
            headerMode: 'none'
    }
)



