import React, {Component} from 'react'
import {View, TouchableOpacity, Text, StyleSheet, TextInput, Button, ImageBackground} from 'react-native';
const image = { uri: "https://www.eait.uq.edu.au/filething/get-styled/landscape_image_600x400/47399/20190804-open-day-web-87.jpg?itok=ymQSMZ6U" };

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
    backgroundColor: 'grey',
    padding: 20,
    alignSelf: 'stretch',
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
  image: {
    width: 600,
    padding: 20
  },
  textInput: {
    backgroundColor: 'white',
  }
})

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <View style={styles.container}>
                      <View stlye = {styles.topContainer}>

                          <ImageBackground source={image} style={styles.image}>
                              <Text style={styles.title}>Hi User</Text>
                              <Text style={styles.subtitle}>
                                  Where would you like to travel?
                              </Text>
                              <TextInput style={styles.textInput} placeholder="Seach" onChangeText={text => this.setState({seachVal: text})}/>
                          </ImageBackground>
                      </View>

                      <View style = {styles.bodyContainer}>
                        <Text style={styles.subtitle}> Popular </Text>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex: 0.5,width: 1, height: 50, margin: 10, backgroundColor: 'powderblue'}} />
                            <View style={{flex: 0.5,width: 1, height: 50, marginLeft: 10,marginBottom: 10, marginTop:10, backgroundColor: 'skyblue'}} />
                        </View>
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
