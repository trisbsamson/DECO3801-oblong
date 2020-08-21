import React, {Component} from 'react';
import {Button, StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
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
})


class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {usernameVal: "",
                      passwordVal: ""}
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titlePane}>
                    <Text style={styles.textField}>
                    WanderLists
                    </Text>
                </View>
                <TextInput style={styles.textInput} placeholder="Username or email" onChangeText={text => this.setState({usernameVal: text})}/>
                <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} onChangeText={text => this.setState({passwordVal: text})}/>
                <TouchableOpacity
                    style={(this.state.usernameVal == "" || this.state.passwordVal == "" ? styles.disabledButton : styles.button)}
                    disabled = {(this.state.usernameVal == "" || this.state.passwordVal == "")}
                    onPress={() =>
                    this.props.navigation.navigate('Home', {name: 'User'})
                    }
                >
                    <Text style={{color: "#fff"}}>Log In</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default LoginScreen;
