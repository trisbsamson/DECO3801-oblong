import React, {Component} from 'react'
import {View, TouchableOpacity, Text, StyleSheet, TextInput, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
},
  textField: {
      marginBottom: 20,
      fontSize: 20,
  },
})

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <View style={styles.container}>
                    <Text style={styles.textField}>
                        Home Page
                    </Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                        this.props.navigation.navigate('NearbyActivities')
                        }
                    >
                        <Text> Nearby Activities </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                        this.props.navigation.navigate('WanderLists')
                        }
                    >
                    <Text> Your Lists </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                        this.props.navigation.navigate('Profile')
                        }
                    >
                    <Text> Profile </Text>
                    </TouchableOpacity>
              </View>
        )
    }
}


export default HomeScreen;
