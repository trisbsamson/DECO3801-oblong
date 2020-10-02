import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
import Category from './Category';
const image = { uri: "https://www.eait.uq.edu.au/filething/get-styled/landscape_image_600x400/47399/20190804-open-day-web-87.jpg?itok=ymQSMZ6U" };
const imageUQ = { uri:'https://upload.wikimedia.org/wikipedia/commons/6/67/Richards_Building_5%2C_St_Lucia_Campus%2C_UQ%2C_Brisbane_03.jpg'};
const burgicon = { uri:'https://cdn.iconscout.com/icon/free/png-256/hamburger-menu-462145.png'};
const { height, width } = Dimensions.get('window')
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
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
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
      marginBottom: 5,
      fontSize: 30,
      textAlign: 'left',
      fontWeight: '700'
  },
  subtitle: {
        marginBottom: 20,
        fontSize: 20,
        textAlign: 'left',
        color: '#000'
    },
  topContainerBackgroundImage: {
    width: width,
    height: 250,
    padding: 15
  },
  image1: {
    resizeMode: "cover",
    flex: 1,
    padding: 15
  },
  textInput: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    fontSize:15,
    borderRadius: 5,
    paddingLeft: 20
  },
  populars:{
    flex: 0.5,
    width: 1,
    height: 200,
    margin: 5,
    backgroundColor: 'white'}

})

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  changeScreen() {
      console.log("YO");
  }
    render() {
        return (
                <View style={styles.container}>
                      <View stlye = {styles.topContainer}>
                          <ImageBackground source={image} style={styles.topContainerBackgroundImage}>
                          <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                              <Image
                                source={{uri:'https://cdn.iconscout.com/icon/free/png-256/hamburger-menu-462145.png'}}
                                style={{ width: 30, height: 30, marginBottom: 10 }}
                              />
                          </TouchableOpacity>
                              <Text style={styles.title}>Hi User</Text>
                              <Text style={styles.subtitle}>
                                  Where would you like to travel?
                              </Text>
                              <TextInput style={styles.textInput} placeholder="Search" onChangeText={text => this.setState({seachVal: text})}/>
                          </ImageBackground>
                      </View>

                      {/*
                      <View style = {styles.bodyContainer}>
                          <Text style={styles.subtitle}> Popular </Text>
                          <View style={{flex: 1, flexDirection: 'row'}}>
                              <View style={styles.populars}>
                                  <ImageBackground source={imageUQ} style={styles.image1}/>
                              </View>
                              <View style={styles.populars}>
                                  <ImageBackground source={imageUQ} style={styles.image1}/>
                              </View>
                          </View>
                      </View>
*/}
                      <ScrollView
                          scollEventTrottle ={16}
                      >
                          <View style ={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
                              <Text style = {{fontSize:24, fontWeight: '700', paddingHorizontal:20, paddingVertical: 10}}>
                                  Popular
                              </Text>
                              <View style={{height:170, marginTop: 20}}>
                                  <ScrollView
                                      horizontal = {true}
                                      showsHorizontalScrollIndicator = {false}
                                  >
                                      <Category source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Richards_Building_5%2C_St_Lucia_Campus%2C_UQ%2C_Brisbane_03.jpg'}}
                                          name = "University of Queensland"
                                          onPress={() => this.changeScreen()}
                                       />
                                       <Category source={{uri: 'https://www.uq.edu.au/images/thumb_uq.jpg'}}
                                           name = "UQ"
                                        />
                                        <Category source={{uri: 'https://photos.travelblog.org/Photos/30828/137882/f/970955-UQ-Campus-St-Lucia-0.jpg'}}
                                            name = "UQ again"
                                         />
                                  </ScrollView>
                              </View>
                              <View style = {{marginTop: 20, paddingHorizontal: 20}}>
                                  <Text style={{fontSize:24, fontWeight:'700'}}>
                                      Recently Viewed
                                  </Text>
                                  <Text>
                                      Great places you've recently viewed!
                                  </Text>
                                      <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                        <Image
                                            style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                            source={{uri:'https://esdnews.com.au/wp-content/uploads/2018/11/UQ.jpg'}}
                                        />
                                    </View>
                              </View>
                          </View>
                      </ScrollView>
{/*
                      <View stlye = {styles.bottomContainer}>
                          <Text style={styles.subtitle}>Recently Viewed</Text>
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
                      */}

              </View>
        )
    }
}

export default HomeScreen;
