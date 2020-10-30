import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SearchBar,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ListItem from './ListItem';
import SpecificListView from './SpecificListView';
import Header from './Header';
import styles from '../Styles/style.js';
import UserDataStore from '../UserDataStore/UserDataStore';


const renderItem = ({item}, navigation, parentComp) => (
  <ListItem
    name={item.name}
    distFromUser={item.distFromUser}
    locationID={item.key}
    navigation={navigation}
    parentComp={parentComp}
  />
);
/**
 * Main list viewed at the root of this navigation path. Shows a list of available locations and filters.
 * 
 */
class ListsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movedFromRoot: false
    };
  }

  loadLists(obj) {    
    var listData = [];

    var i;
    for (i = 0; i < obj.length; i++) {
      listData.push({
        title: obj[i]['title'],
        activityID: obj[i]['id'],
        subtitle: 'Description',
        key: obj[i]['id'].toString(),
      });
    }
    
    this.setState({listData: listData});
  }

  processLocationData(obj) {
    var listData = [];
    var i;
    for(i = 0; i < obj.length; i++) {
        listData.push({
            key: obj[i]["id"].toString(),
            name: obj[i]["name"],
            distFromUser: this.computeDistanceFromUser(obj[i]['latitude'], obj[i]['longitude']).toFixed(0)
        });
    }
    this.setState({
        locationsList: listData
    });
  }

  computeDistanceFromUser(lat, long) {
    var latUser = this.state.userData.latitude;
    var longUser = this.state.userData.longitude;
    const R = 6371;
    const phi_1 = lat * Math.PI / 180;
    const phi_2 = latUser * Math.PI / 180;
    const delPhi = (latUser - lat) * Math.PI / 180;
    const delLambda = (longUser - long) * Math.PI / 180;

    const a = Math.sin(delPhi / 2) * Math.sin(delPhi / 2) + Math.cos(phi_1) * Math.cos(phi_2) * Math.sin(delLambda / 2) * Math.sin(delLambda / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c;

    return d;
  }

  loadLocationData() {
    fetch("https://deco3801-oblong.uqcloud.net/wanderlist/location/", {
        method: "GET"
    })
    .then(response => response.json())
    .then(obj => this.processLocationData(obj));
  }

  componentDidMount() {
    const unsub = this.props.parentNav.addListener('focus', () => {
      if(this.state.movedFromRoot) {
          this.props.navigation.popToTop();
          this.props.navigation.navigate("AppContents", {screen: 'Location Screen', initial: false});
      }
  });
    this.setState({userData: UserDataStore.getUserData()}, () => this.loadLocationData());
  }

  addList() {
    this.setState({
      listData: this.state.listData.concat({
        title: 'New Activity',
        key: 'newKey',
      }),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {/*<Header title="Location" style={styles.headerContainer} navigation={this.props.navigation} />*/}
        <View style={styles.header}>
            <TouchableOpacity onPress={this.props.navigation.openDrawer}>
              <Image
                source={{uri:'https://cdn.iconscout.com/icon/free/png-256/hamburger-menu-462145.png'}}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
            <Text style={styles.listTitle_WanderLists}>Browse Locations</Text>
        </View>
        <FlatList
          style={styles.list}
          data={this.state.locationsList}
          renderItem={(item) => renderItem(item, this.props.navigation, this)}
        />
      </View>
    );
  }
}

export default ListsView;
