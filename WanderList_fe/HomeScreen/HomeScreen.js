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
import CardListItem from './CardListItem';
import UserDataStore from '../UserDataStore/UserDataStore';
import styles from '../Styles/style.js'
const image = { uri: "https://www.eait.uq.edu.au/filething/get-styled/landscape_image_600x400/47399/20190804-open-day-web-87.jpg?itok=ymQSMZ6U" };
const imageUQ = { uri:'https://upload.wikimedia.org/wikipedia/commons/6/67/Richards_Building_5%2C_St_Lucia_Campus%2C_UQ%2C_Brisbane_03.jpg'};
const burgicon = { uri:'https://cdn.iconscout.com/icon/free/png-256/hamburger-menu-462145.png'};
const { height, width } = Dimensions.get('window')

const renderCardListItem = ({item}, navigation) => (
    <CardListItem locID={item.key} name={item.name} imageURL={item.imageURL} navigation={navigation}/>
);

/**
 * This is the component for the main homescreen of the app. The screen features a user-specific greeting,
 * and a list of nearby location cards to view.
 * 
 */
class HomeScreen extends Component {
    // main component constructor function - instantiates state variables
    constructor(props) {
        super(props);
        this.state = {
            userData: {}
        };
    }

    // processes the API response to generate a list of locations to be rendered
    processLocationData(obj) {
        var listData = [];
        var i;
        for(i = 0; i < obj.length; i++) {
            listData.push({
                key: obj[i]["id"].toString(),
                name: obj[i]["name"],
                imageURL: obj[i]["imageurl"]
            });
        }
        this.setState({
            locationsList: listData
        });
    }

  /**
  * Gets data of locations and processes data to be set on home screen
  */
  loadLocationData() {
    fetch("https://deco3801-oblong.uqcloud.net/wanderlist/location/", {
        method: "GET"
    })
    .then(response => response.json())
    .then(obj => this.processLocationData(obj));
  }

  /**
  * Main function to call to set state and load the location data onto the home screen
  */
  componentDidMount() {
      this.setState({userData: UserDataStore.getUserData()});
      this.loadLocationData();
  }

    // render method - returns JSX components to render to DOM
    render() {
        return (
                <View style={styles.container}>
                    <View stlye = {styles.topContainer}>
                        <ImageBackground source={image} style={styles.topContainerBackgroundImage}>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <Image
                            source={{uri:'https://cdn.iconscout.com/icon/free/png-256/hamburger-menu-462145.png'}}
                            style={{ width: 30, height: 30, marginBottom: 10 }}
                            />
                        </TouchableOpacity>
                            <Text style={styles.titleHome}>Hi {this.state.userData.name}</Text>
                            <Text style={styles.subtitleHome}>
                                Where would you like to travel?
                            </Text>
                        </ImageBackground>
                    </View>
                    <View style ={{flex: 1, paddingTop: 10}}>
                        <Text style = {{fontSize:24, fontWeight: '700', paddingHorizontal:20, paddingVertical: 10, marginBottom: 20}}>
                            Locations Near You
                        </Text>
                        <FlatList data={this.state.locationsList} renderItem={(item) => renderCardListItem(item, this.props.navigation)}/>
                    </View>
                </View>
        )
    }
}

export default HomeScreen;
