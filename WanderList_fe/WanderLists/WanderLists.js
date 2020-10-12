import React, {Component, forwardRef} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ListItem from './ListItem';
import SpecificListView from './SpecificListView'
import ListsView from './ListsView';
import ActivityScreen from '../ActivityScreen/ActivityScreen';
import QRScanner from '../QRScanner/QRScanner';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../Styles/style.js'

const ListStack = createStackNavigator();
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addListButton: {
    alignItems: 'center',
    backgroundColor: '#196DFF',
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    padding: 12,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 'auto',
  },
  textField: {
    marginBottom: 20,
    fontSize: 20,
  },
  map: {
      width: 390,
      height: 300,
      marginBottom: 20,
  },
  listTitle: {
      padding: 10,
      fontSize: 18
  }
});*/

class WanderLists extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
      //const thisNav = this.props.navigation;
        return (
              <ListStack.Navigator headerMode="none" initialRouteName="listsView">
                <ListStack.Screen name="listsView">
                  {props => <ListsView {...props} parentNav={this.props.navigation} />}
                </ListStack.Screen>
                <ListStack.Screen name="specificListView" component={SpecificListView}/>
                <ListStack.Screen name="activityView" component={ActivityScreen}/>
                <ListStack.Screen name="qrScanner" component={QRScanner}/>
              </ListStack.Navigator>
        );
    }
}

export default WanderLists;
