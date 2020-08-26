import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ListItem from './ListItem';
import SpecificListView from './SpecificListView'


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
});

const renderItem = ({ item}, navigation) => (
    <ListItem title={item.title} navigation={navigation}/>
);
class ListsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [
                {title: 'First List', key: 'a'},
                {title: 'Second List', key: 'b'},
                {title: 'Also an Activity', key: 'c'},
            ]
        }
    }

    addList(){
        this.setState({listData: this.state.listData.concat({title: 'New List', key: 'newKey'})});
    }

    render() {
        return (
                <View style={styles.container}>
                    <View>
                        <Text style={styles.listTitle}> Your Lists </Text>
                        <FlatList data={this.state.listData} renderItem={(item) => renderItem(item, this.props.navigation)}/>
                        <TouchableOpacity
                            style={styles.addListButton}
                            onPress={() =>this.addList()}>
                                <Text style={{color: '#fff'}}>New List</Text>
                            </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        title="Back to home"
                        style={styles.button}
                        onPress={() =>
                        this.props.navigation.navigate('Home', {name: 'User'})
                        }
                    >
                        <Text> Back Home </Text>
                    </TouchableOpacity>
                </View>
        );
    }
}

export default ListsView;
