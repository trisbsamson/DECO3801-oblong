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
  Dimensions,
  FlatList
} from 'react-native';
import Category from './Category';
import CardListItem from './CardListItem'
import styles from '../Styles/style.js'
const image = { uri: "https://www.eait.uq.edu.au/filething/get-styled/landscape_image_600x400/47399/20190804-open-day-web-87.jpg?itok=ymQSMZ6U" };
const imageUQ = { uri:'https://upload.wikimedia.org/wikipedia/commons/6/67/Richards_Building_5%2C_St_Lucia_Campus%2C_UQ%2C_Brisbane_03.jpg'};
const burgicon = { uri:'https://cdn.iconscout.com/icon/free/png-256/hamburger-menu-462145.png'};
const { height, width } = Dimensions.get('window')

const renderCardListItem = ({item}, navigation) => (
    <CardListItem locID={item.key} name={item.name} navigation={navigation}/>
);

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  changeScreen() {
      console.log("YO");
  }

  processLocationData(obj) {
    var listData = [];
    var i;
    for(i = 0; i < obj.length; i++) {
        listData.push({
            key: obj[i]["id"],
            name: obj[i]["name"]
        });
    }
    this.setState({
        locationsList: listData
    });
  }

  loadLocationData() {
    fetch("https://deco3801-oblong.uqcloud.net/wanderlist/location/", {
        method: "GET"
    })
    .then(response => response.json())
    .then(obj => this.processLocationData(obj));
  }

  componentDidMount() {
      this.loadLocationData();
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
                              <Text style={styles.titleHome}>Hi User</Text>
                              <Text style={styles.subtitleHome}>
                                  Where would you like to travel?
                              </Text>
                              {/*<TextInput style={styles.textInputHome} placeholder="Search" onChangeText={text => this.setState({seachVal: text})}/>*/}
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
                          <View style ={{flex: 1, paddingTop: 10}}>
                              <Text style = {{fontSize:24, fontWeight: '700', paddingHorizontal:20, paddingVertical: 10, marginBottom: 20}}>
                                  Locations Near You
                              </Text>
                              <View style={{marginTop: 20}}>
                                  {/*<ScrollView>
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
                                  </ScrollView>*/}
                                  
                              </View>
                          </View>
                      </ScrollView>
                      <FlatList data={this.state.locationsList} renderItem={(item) => renderCardListItem(item, this.props.navigation)}>
                            
                    </FlatList> 
              </View>
        )
    }
}

export default HomeScreen;
