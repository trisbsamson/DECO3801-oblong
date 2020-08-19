import React, {Component} from 'react';
import {Button, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textField: {
      marginBottom: 20,
      fontSize: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  },
})


class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textField}>
                    Login
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                    this.props.navigation.navigate('Home', {name: 'User'})
                    }
                >
                    <Text>Enter App</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default LoginScreen;
