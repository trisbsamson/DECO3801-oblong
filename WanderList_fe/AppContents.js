import 'react-native-gesture-handler';
import React, {Component} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native'
import LoginScreen from './LoginScreen/LoginScreen'
import HomeScreen from './HomeScreen/HomeScreen';
import NearbyActivities from './NearbyActivities/NearbyActivities';
import WanderLists from './WanderLists/WanderLists';
import Profile from './Profile/Profile'
import QRScanner from './QRScanner/QRScanner'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

class AppContents extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeScreen} />
                    <Drawer.Screen name="Nearby Activities" component={NearbyActivities} />
                    <Drawer.Screen name="WanderLists" component={WanderLists} />
                    <Drawer.Screen name="Profile" component={Profile} />
                    <Drawer.Screen name="QR Scanner" component={QRScanner} />
                </Drawer.Navigator>
        )
    }
}

export default AppContents;