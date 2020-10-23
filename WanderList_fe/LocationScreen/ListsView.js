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
import styles from '../Styles/style.js'


const renderItem = ({item}, navigation, parentComp) => (
  <ListItem
    name={item.name}
    subtitle={item.subtitle}
    locationID={item.key}
    navigation={navigation}
    parentComp={parentComp}
  />
);
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
            subtitle: "5 km away"
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
    const unsub = this.props.parentNav.addListener('focus', () => {
      if(this.state.movedFromRoot) {
          this.props.navigation.popToTop();
          this.props.navigation.navigate("AppContents", {screen: 'Location Screen', initial: false});
      }
  });
    this.loadLocationData();
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
