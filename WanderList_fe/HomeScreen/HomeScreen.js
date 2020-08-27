import React, {Component} from 'react'
import {View, TouchableOpacity, Text, StyleSheet, TextInput, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff'
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#999999'
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#000000'
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#555555'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
},
  title: {
      marginBottom: 20,
      fontSize: 30,
      textAlign: 'left',
  },
  subtitle: {
        marginBottom: 20,
        fontSize: 20,
        textAlign: 'left',
    },
})

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <View style={styles.container}>
                      <View stlye = {styles.topContainer}>
                          <Text style={styles.title}>
                              Hi User
                          </Text>
                          <Text style={styles.subtitle}>
                              Where would you like to travel?
                          </Text>
                          <TextInput style={styles.textInput} placeholder="Seach" onChangeText={text => this.setState({seachVal: text})}/>
                      </View>
                      <View style = {styles.bodyContainer}>
                        <Text style={styles.subtitle}> Popular </Text>


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
                      <View stlye = {styles.bottomContainer}>
                        <Text style={styles.subtitle}>Recently Viewed</Text>
                      </View>
              </View>
        )
    }
}


export default HomeScreen;
