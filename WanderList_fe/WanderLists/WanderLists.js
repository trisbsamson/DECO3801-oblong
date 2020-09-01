import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ListItem from './ListItem';
import SpecificListView from './SpecificListView'
import ListsView from './ListsView'
import { createStackNavigator } from '@react-navigation/stack';

const ListStack = createStackNavigator();

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
  listItem: {

  },
  listTitle: {
      padding: 10,
      fontSize: 18
  }
});

class WanderLists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [
                {title: 'First List'},
                {title: 'Second List'},
                {title: 'Also an Activity'},
            ]
        }
    }

    addList(){
        this.setState({listData: this.state.listData.concat({title: 'New List'})});
    }

    render() {
        return (
                <ListStack.Navigator headerMode="none">
                    <ListStack.Screen name="listView" component={ListsView}/>
                    <ListStack.Screen name="specificListView" component={SpecificListView}/>
                </ListStack.Navigator>
        );
    }
}

export default WanderLists;
