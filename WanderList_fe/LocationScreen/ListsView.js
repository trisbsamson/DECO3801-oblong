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
    title={item.title}
    subtitle={item.subtitle}
    activityID={item.activityID}
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
    console.log(obj);
    
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

  componentDidMount() {
    const unsub = this.props.parentNav.addListener('focus', () => {
      if(this.state.movedFromRoot) {
          this.props.navigation.popToTop();
          this.props.navigation.navigate("AppContents", {screen: 'Location Screen', initial: false});
      }
  });
    fetch('https://deco3801-oblong.uqcloud.net/wanderlist/activity')
      .then((response) => response.json())
      .then((obj) => this.loadLists(obj));
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
        <Header title="Location" style={styles.headerContainer} navigation={this.props.navigation} />
        <View style={styles.titlePanel_LocationScreen}>
          <Text
            style={styles.activityTitle_LocationScreen}>
            University of Queensland
          </Text>
        </View>
        
        <View style={styles.bgContainer}>
          <Image
            style={styles.headerImage}
            source={require('../Images/UQ.jpg')}
          />
        </View>
        
        <FlatList
          style={styles.list}
          data={this.state.listData}
          renderItem={(item) => renderItem(item, this.props.navigation, this)}
        />
      </View>
    );
  }
}

export default ListsView;
