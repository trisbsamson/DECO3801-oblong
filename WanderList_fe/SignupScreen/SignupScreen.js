import React, {Component} from 'react';
import {AppRegistry, Button, StyleSheet, View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from '../Styles/style.js'
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'column'
  },
  titlePane: {
    alignItems: 'center',
  },
  textField: {
      marginBottom: 40,
      fontSize: 20,
  },
  textInput: {
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 4,
      marginBottom: 10,
      padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#196DFF',
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    padding: 12,
  },
  disabledButton: {
    alignItems: 'center',
    backgroundColor: '#84C1FF',
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    padding: 12,
  },
  loginLogo: {
    width: 154,
    height: 45,
  },
  signupTextCont: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    justifyContent:'center',
    marginVertical: 16,
    flexDirection: 'row'
  },
  signupText:{
    color:'rgba(0,0,0,0.6)',
  },
  signupButton:{
  fontWeight:'500',
  },
})*/


class SignupScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {usernameVal: "",
                      emailVal: "",
                      passwordVal: ""}
    }

    render() {
        return (
            <View style={styles.containerSignUp}>
                <View style={styles.titlePane}>
                    <Text style={styles.textField}>
                    Sign Up!
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
                <TextInput style={styles.textInput} placeholder="Username" onChangeText={text => this.setState({usernameVal: text})}/>
                <TextInput style={styles.textInput} placeholder="Email" onChangeText={text => this.setState({emailVal: text})}/>
                <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} onChangeText={text => this.setState({passwordVal: text})}/>

                <TouchableOpacity
                    style={(this.state.usernameVal == "" || this.state.passwordVal == "" ? styles.disabledButton : styles.buttonSignUp)}
                    disabled = {(this.state.usernameVal == "" || this.state.passwordVal == "")}
                    onPress={() =>
                    this.props.navigation.navigate('AppContents', {name: 'User'})
                    }
                >
                    <Text style={{color: "#fff"}}>Sign Up</Text>
                </TouchableOpacity>
                <View style ={styles.signupTextCont}>
                    <Text style = {styles.signupText}>Already have an account? </Text>
                    <TouchableOpacity onPress ={() =>this.props.navigation.navigate('Login')}>
                    <Text style = {styles.signupButton}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default SignupScreen;
