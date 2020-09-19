import React, {Component, useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  SearchBar,
  TextInput,
  ListView,
} from 'react-native';
import ListsView from './ListsView';
import SpecificListView from './SpecificListView';
import {createStackNavigator} from '@react-navigation/stack';
import ActivityScreen from '../ActivityScreen/ActivityScreen';
import Header from './Header';

const ListStack = createStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgContainer: {
    aspectRatio: 1,
    alignItems: 'center', // imageHeight & imageWidth are from your image pixel dimensions
  },
  headerImage: {
    height: 200,
    aspectRatio: 1,
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

class LocationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [
        {title: 'First List'},
        {title: 'Second List'},
        {title: 'Also an Activity'},
      ],
    };
  }

  addList() {
    this.setState({listData: this.state.listData.concat({title: 'New List'})});
  }

  render() {
    return (
        <ListStack.Navigator headerMode="none">
          <ListStack.Screen name="listView" component={ListsView} />
          <ListStack.Screen name="activityView" component={ActivityScreen}/>
        </ListStack.Navigator>
    );
  }
}

export default LocationScreen;
