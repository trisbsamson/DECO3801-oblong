import React, {Component} from 'react';
import {AppRegistry, Button, StyleSheet, View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from '../Styles/style.js'

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {usernameVal: "",
                      passwordVal: "",
                      rememberMeCheck: false}
    }

    render() {
        return (
            <View style={styles.loginContainer}>
                <View style={styles.logintitlePane}>
                    <Image
                        style = {styles.loginLeafLogo}
                        source={require('../Images/leaf_icon.png')}
                    />
                    <Text style={styles.logintextField}>
                    WanderLists
                    </Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <TouchableOpacity>
                    <Image
                        style = {styles.loginLogo}
                        source={require('../Images/login_twitter_sm.png')}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 'auto'}}>
                    <Image
                        style = {styles.loginLogo}
                        source={require('../Images/login_fb_sm.png')}
                    />
                    </TouchableOpacity>
                </View>
                <TextInput style={styles.logintextInput} placeholder="Username or email" onChangeText={text => this.setState({usernameVal: text})}/>
                <TextInput style={styles.logintextInput} placeholder="Password" secureTextEntry={true} onChangeText={text => this.setState({passwordVal: text})}/>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                    <CheckBox
                        value={this.state.rememberMeCheck}
                        onChange={() => this.setState({ rememberMeCheck: !this.state.rememberMeCheck})}
                    />
                    <Text> Remember Me </Text>
                    <Text style={{marginLeft: 'auto'}}> Forgot Password </Text>
                </View>
                <TouchableOpacity
                    style={(this.state.usernameVal == "" || this.state.passwordVal == "" ? styles.disabledButton : styles.loginbutton)}
                    disabled = {(this.state.usernameVal == "" || this.state.passwordVal == "")}
                    onPress={() =>
                    this.props.navigation.navigate('AppContents', {name: 'User'})
                    }
                >
                    <Text style={{color: "#fff"}}>Log In</Text>
                </TouchableOpacity>
                <View style ={styles.signupTextCont}>
                    <Text style = {styles.signupText}>Don't have an account yet? </Text>
                    <TouchableOpacity onPress ={() =>this.props.navigation.navigate('SignupScreen')}>
                    <Text style = {styles.signupButton}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default LoginScreen;
