import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './LoginScreen/LoginScreen';
import AppContents from './AppContents'
import SignupScreen from './SignupScreen/SignupScreen';
import { createStackNavigator } from '@react-navigation/stack';


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
                    <Stack.Screen name="SignupScreen" component={SignupScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default App;
