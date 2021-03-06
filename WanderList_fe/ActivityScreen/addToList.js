import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, FlatList, Modal, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ListItem from '../WanderLists/ListItem';
import SpecificListView from '../WanderLists/SpecificListView'
import AddListModal from '../WanderLists/AddListModal'
import UserDataStore from '../UserDataStore/UserDataStore';
//import styles from '../Styles/style.js'

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
  addButton: {
    alignItems: 'center',
    backgroundColor: '#196DFF',
    borderRadius: 3,
    padding: 10,
    marginTop: 'auto',
    marginLeft: 'auto',
    width: 80
  },
  cancelButton: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
    padding: 10,
    marginTop: 'auto',
    width: 80
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
  },
  addListModalContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
  },
  addListModal: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 3,
      padding: 10,
      height: 150,
      width: 200
  },
  modalTextField: {
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 4,
      marginBottom: 10,
      padding: 10,
      marginTop: 10
  }
});

const renderItem = ({ item}, navigation) => (
   // <ListItem title={item.title} id={item.key} subtitle={item.subtitle} navigation={navigation}/>

    <TouchableOpacity
        style={styles.addListButton}
        onPress={() => addToList(item.key, item.activityID)}>
        <Text style={{color: '#fff'}}>{item.title}</Text>
    </TouchableOpacity>
);

function addToList(bucketListID, activityID){


    let url = "https://deco3801-oblong.uqcloud.net/wanderlist/add_activity_to_list/" + bucketListID + "/" + activityID
    fetch(url, {
        credentials: 'include',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }})
    .then(response => console.log("Response: " + response.status))
    
    
}

/**
 * Deprecated component for a modal which allows users to add activities to bucketlists.
 * 
 * DEPRECATED.
 * 
 */
class ListsView extends Component {
    // main component constructor function - instantiates state variables
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            listNameModalVisible: false,
            activityID: 0,
        }
    }

    loadLists(obj) {
        console.log(obj);
        var listData = [];
        var i;
        for(i = 0; i < obj.length; i++) {
            listData.push({title: obj[i]['name'], subtitle: "subtitle goes here", key: obj[i]['id'], activityID: this.state.activityID})
        }
        this.setState({listData: listData});
    }

    queryLists() {
        fetch("https://deco3801-oblong.uqcloud.net/wanderlist/get_bucketlist_belonging_to_user/" + this.state.userData.id)
        .then(response => response.json())
        .then(obj => this.loadLists(obj));
    }

    componentDidMount() {
        this.setState({userData: UserDataStore.getUserData()}, this.queryLists());
        console.log(this.props.route.params.activityID)
        this.setState({activityID: this.props.route.params.activityID})
    }

    
    hideModal() {
        this.setListNameModalVisible(false);
    }

    
    renderLists(item){
        <TouchableOpacity
            style={styles.addListButton}
            onPress={() =>this.setListNameModalVisible(true)}>
            <Text style={{color: '#fff'}}>New List</Text>
        </TouchableOpacity>
    }
    

    setListNameModalVisible = (visible) => {
        this.setState({listNameModalVisible: visible});
    }

    // render method - returns JSX components to render to DOM
    render() {
        const {listNameModalVisible} = this.state;
        return (
                <View style={styles.container}>
                    <View>
                        <Text style={styles.listTitle}> Your Lists </Text>
                        <FlatList style={styles.list} data={this.state.listData} renderItem={(item) => renderItem(item)}/>
                        <TouchableOpacity
                            style={styles.addListButton}
                            onPress={() =>this.setListNameModalVisible(true)}>
                            <Text style={{color: '#fff'}}>New List</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        );
    }
}

export default ListsView;
