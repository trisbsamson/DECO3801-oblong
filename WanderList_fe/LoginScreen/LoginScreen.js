import React, {Component} from 'react';
import {AppRegistry, Button, StyleSheet, View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from '../style/style.js'

// const styles = StyleSheet.create({
//   loginContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'stretch',
//     marginLeft: 20,
//     marginRight: 20,
//     flexDirection: 'column'
//   },
//   logintitlePane: {
//     alignItems: 'center',
//   },
//   logintextField: {
//       marginBottom: 40,
//       fontSize: 20,
//   },
//   logintextInput: {
//       borderColor: 'gray',
//       borderWidth: 1,
//       borderRadius: 4,
//       marginBottom: 10,
//       padding: 10,
//   },
//   loginbutton: {
//     alignItems: 'center',
//     backgroundColor: '#196DFF',
//     padding: 10,
//     borderRadius: 4,
//     marginBottom: 10,
//     padding: 12,
//   },
//   disabledButton: {
//     alignItems: 'center',
//     backgroundColor: '#196DFF',
//     padding: 10,
//     borderRadius: 4,
//     marginBottom: 10,
//     padding: 12,
//   },
//   loginLogo: {
//     width: 154,
//     height: 45,
//   },
//   signupTextCont: {
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     justifyContent:'center',
//     marginVertical: 16,
//     flexDirection: 'row'
//   },
//   signupText:{
//     color:'rgba(0,0,0,0.6)',
//   },
//   signupButton:{
//   fontWeight:'500',
//   },
// })


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
                    style={(this.state.usernameVal == "" || this.state.passwordVal == "" ? styles.disabledButton : styles.button)}
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
