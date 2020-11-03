import React, {Component} from 'react'
import {Modal, Text, TextInput, View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import UserDataStore from '../UserDataStore/UserDataStore';
//import styles from '../Styles/style.js'

/**
 * Specific custom styles for this component only.
 */
const styles = StyleSheet.create({
  cancelButton: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
    padding: 10,
    marginTop: 'auto',
    marginLeft: 'auto',
    width: 80
  },
  addListModalContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)'
  },
  addListModal: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 3,
      padding: 10,
      height: 250,
      width: 200
  },
  modalTextField: {
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 4,
      marginBottom: 10,
      padding: 10,
      marginTop: 10
  },
  list: {
      
  },
  listItem: {
      margin: 10
  }
});


const renderItem = ({ item}, navigation, addToListFunc) => (
    <TouchableOpacity style={styles.listItem} onPress={() => addToListFunc(item.key)}><Text>{item.title}</Text></TouchableOpacity>
);

/**
 * This is the component for the modal box which allows the user to add activities to their bucketlists.
 * 
 */
class AddToBucketListModal extends Component {
    // main component constructor function - instantiates state variables
    constructor(props) {
        super(props)
        this.state = {textInputVal: ""}
    }

    // function sends a POST request to the API to add an activity to a list
    addToList(listID) {
        // TODO: send request to add to the specified list
        fetch("https://deco3801-oblong.uqcloud.net/wanderlist/bucketlist_activity/", {
            method: 'POST',
            body: JSON.stringify({
                "bucketlist_id": listID,
                "activity_id": this.props.activityID,
                "completed": false
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        this.props.hideModalFunc();
    }

    // route processes the API response of WanderLists to generate a list of WanderLists we can add activities to.
    loadLists(obj) {
        var listData = [];
        var i;
        for(i = 0; i < obj.length; i++) {
            listData.push({title: obj[i]['name'], subtitle: "subtitle goes here", key: obj[i]['id'].toString()})
        }
        
        this.setState({listData: listData});
    }

    // requests a list of available WanderLists then calls a function to process the response
    queryLists() {
        fetch("https://deco3801-oblong.uqcloud.net/wanderlist/get_bucketlist_belonging_to_user/" + this.state.userData.id)
        .then(response => response.json())
        .then(obj => this.loadLists(obj));
    }

    // when loading the component, query the lists so they can be rendered
    componentDidMount() {
        this.setState({userData: UserDataStore.getUserData()}, () => this.queryLists());
    }

    // render method - returns JSX components to render to DOM
    render() {
        return (<Modal
            transparent={true}
            visible={this.props.addToListModalVisible}>
            <View style={styles.addListModalContainer}>
                <View style={styles.addListModal}>
                    <Text style={{marginBottom: 10}}> Add To WanderList... </Text>
                    <FlatList style={styles.list} data={this.state.listData} renderItem={(item) => renderItem(item, this.props.navigation, this.addToList.bind(this))}/>
                    <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={() => this.props.hideModalFunc()}>
                        <Text> Cancel </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>);

    }
}

export default AddToBucketListModal;
