import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './LoginScreen/LoginScreen';
import AppContents from './AppContents'
import SignupScreen from './SignupScreen/SignupScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

/**
 * Root component of the app - stores the login, register, and app contents screen.
 * 
 */
class App extends Component {
    // main component constructor function - boilerplate
    constructor(props) {
        super(props);
    }

    // render method - returns JSX components to render to DOM
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="AppContents" component={AppContents} />
                    <Stack.Screen name="SignupScreen" component={SignupScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default App;
