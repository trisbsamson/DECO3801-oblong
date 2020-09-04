import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import LoginScreen from './LoginScreen/LoginScreen';
import HomeScreen from './HomeScreen/HomeScreen';
import NearbyActivities from './NearbyActivities/NearbyActivities';
import WanderLists from './WanderLists/WanderLists';
import Profile from './Profile/Profile';
import AppContents from './AppContents'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator();

class App extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="AppContents" component={AppContents} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default App;
