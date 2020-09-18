import React, {Component} from 'react';
import {AppRegistry, Button, StyleSheet, View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

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
})


class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {usernameVal: "",
                      passwordVal: "",
                      rememberMeCheck: false}
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titlePane}>
                    <Text style={styles.textField}>
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
                <TextInput style={styles.textInput} placeholder="Username or email" onChangeText={text => this.setState({usernameVal: text})}/>
                <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} onChangeText={text => this.setState({passwordVal: text})}/>
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
            </View>
        );
    }
}

export default LoginScreen;
