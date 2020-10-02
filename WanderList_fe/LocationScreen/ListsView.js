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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  bgContainer: {
    // aspectRatio: 1,
    alignItems: 'center',
  },
  headerImage: {
    height: 220,
    marginTop: 10,
    marginBottom: 5,
    // width: 200,
    // aspectRatio: 1,
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  textField: {
    marginBottom: 20,
    fontSize: 20,
  },
});

const renderItem = ({item}, navigation) => (
  <ListItem
    title={item.title}
    subtitle={item.subtitle}
    activityID={item.activityID}
    navigation={navigation}
  />
);
class ListsView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    
    fetch('https://deco3801-oblong.uqcloud.net/wanderlist/get_activity')
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
        <View style={styles.bgContainer}>
          <Image
            style={styles.headerImage}
            resizeMode="contain"
            source={require('../Images/UQ.jpg')}
          />
        </View>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 20,
          }}>
          UQ
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          onChangeText={(text) => this.setState({usernameVal: text})}
        />
        <FlatList
          style={styles.list}
          data={this.state.listData}
          renderItem={(item) => renderItem(item, this.props.navigation)}
        />
      </View>
    );
  }
}

export default ListsView;
