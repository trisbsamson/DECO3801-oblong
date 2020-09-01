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
    width: 100,
    marginLeft: 'auto',
    marginRight: 20
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
      fontSize: 18,
      fontWeight: "700",
  },
  list: {
      marginBottom: 10,
      backgroundColor: '#ccc',
      padding: 10,
      paddingBottom: 0
  }
});

const renderItem = ({ item}, navigation) => (
    <ListItem title={item.title} subtitle={item.subtitle} navigation={navigation}/>
);
class ListsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [
                {title: 'First List', subtitle: "blah blah subtitle", key: 'a'},
                {title: 'Second List', subtitle: "blah blah subtitle", key: 'b'},
                {title: 'Best List', subtitle: "blah blah subtitle", key: 'c'},
            ]
        }
    }

    loadLists(obj) {
        console.log(obj);

        var listData = [];

        var i;
        for(i = 0; i < obj.length; i++) {
            listData.push({title: obj[i]['name'], subtitle: "subtitle goes here", key: obj[i]['id'].toString()})
        }
        this.setState({listData: listData});
    }

    componentDidMount() {
        fetch("https://deco3801-oblong.uqcloud.net/wanderlist/get_bucketlists/1")
        .then(response => response.json())
        .then(obj => this.loadLists(obj));
    }



    addList(){
        this.setState({listData: this.state.listData.concat({title: 'New List', key: 'newKey'})});
    }

    render() {
        return (
                <View style={styles.container}>
                    <View>
                        <Text style={styles.listTitle}> Your Lists </Text>
                        <FlatList style={styles.list} data={this.state.listData} renderItem={(item) => renderItem(item, this.props.navigation)}/>
                        <TouchableOpacity
                            style={styles.addListButton}
                            onPress={() =>this.addList()}>
                            <Text style={{color: '#fff'}}>Add List</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        );
    }
}

export default ListsView;
