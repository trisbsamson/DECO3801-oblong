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
import ActivityScreenAdd from '../ActivityScreen/ActivityScreenAdd';
import AddToList from '../ActivityScreen/addToList';
import Header from './Header';
import { CommonActions, useNavigation } from '@react-navigation/native'
//import styles from '../Styles/style.js'

const ListStack = createStackNavigator();

/**
 * Root component of the 'Browse Locations' route. Consists of a stack navigator for each level of this navigation path.
 * 
 */
class LocationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [
        {title: 'First List'},
        {title: 'Second List'},
        {title: 'Also an Activity'},
      ]
    };
  }

  addList() {
    this.setState({listData: this.state.listData.concat({title: 'New List'})});
  }

  render() {
    return (
        <ListStack.Navigator headerMode="none">
          <ListStack.Screen name="listsView">
                  {props => <ListsView {...props} parentNav={this.props.navigation} parentComp={this}/>}
          </ListStack.Screen>
          <ListStack.Screen name="specificLocationView">
                {props => <SpecificListView {...props} parentNav={this.props.navigation} parentComp={this}/>}
            </ListStack.Screen>
          <ListStack.Screen name="activityView" component={ActivityScreenAdd}/>
          <ListStack.Screen name="addToList" component={AddToList}/>
        </ListStack.Navigator>
    );
  }
}

export default LocationScreen;
