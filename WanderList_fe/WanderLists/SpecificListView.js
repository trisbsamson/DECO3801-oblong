import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, FlatList} from 'react-native';
import ListItem from './ListItem';

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
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style = {styles.map}
                    source={require('../Images/map_placeholder.png')}
                />
                <View>
                    <Text style={styles.listTitle}> Your Lists </Text>
                    <FlatList data={listData} renderItem={renderItem}/>
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
