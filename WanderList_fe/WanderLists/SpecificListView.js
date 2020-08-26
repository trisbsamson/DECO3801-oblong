import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, FlatList, Dimensions} from 'react-native';
import ListItem from './ListItem';
import MapComponent from './MapComponent'


const styles = StyleSheet.create({
  container: {
    flex: 1,
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

const listData = [
    {title: 'First List'},
    {title: 'Second List'},
    {title: 'Also an Activity'},
];
const renderItem = ({ item }) => (
    <ListItem title={item.title} />
);
class SpecificListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listTitle: props.route.params.listTitle,
            listData: [
                {title: 'First Activity', key: 'a'},
                {title: 'Second Activity', key: 'b'},
                {title: 'Also an Activity', key: 'c'},],
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <MapComponent/>
                <View>
                    <Text style={styles.listTitle}> {this.state.listTitle} </Text>
                    <FlatList data={this.state.listData} renderItem={renderItem}/>
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

export default SpecificListView;
