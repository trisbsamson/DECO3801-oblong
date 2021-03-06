import React, {Component} from 'react';
import {AppRegistry, Button, StyleSheet, View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from '../Styles/style.js'

/**
 * Component for registering new users to the database. Features a few fields for user details.
 * 
 */
class SignupScreen extends Component {
    // main component constructor function - instantiates state variables
    constructor(props) {
        super(props);
        this.state = {usernameVal: "",
                      emailVal: "",
                      passwordVal: ""}
    }
    /**
    * Function to register the user to database
    */
     registerUser() {
            if(this.state.textInputVal != "") {
                var queryString = "https://deco3801-oblong.uqcloud.net/wanderlist/user/";
                    fetch(queryString, {
                        method: 'POST',
                        body: JSON.stringify({
                            "name": this.state.usernameVal,
                            "password": this.state.passwordVal
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                .then(response => console.log("Response: " + response.status))
                .catch((error) => {console.error(error);});
            }
     }
     /**
     * Function calling register and navigating to home page
     */
     registerAndNavigate(){
        this.registerUser();
        this.props.navigation.navigate('AppContents', {name: 'User'});
    }

    // render method - returns JSX components to render to DOM
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
                    this.registerAndNavigate()
                    }>
                    <Text style={{color: "#fff"}}>Sign Up</Text>
                </TouchableOpacity>
                <View style ={styles.signupTextCont}>
                    <Text style = {styles.signupText}>Already have an account? </Text>
                    <TouchableOpacity onPress ={() =>{
                            this.props.navigation.navigate('Login')

                        }}>
                    <Text style = {styles.signupButton}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default SignupScreen;
