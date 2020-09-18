import React, {Component} from 'react'
import {Modal, Text, TextInput, View, TouchableOpacity, StyleSheet, FlatList} from 'react-native'

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

const renderItem = ({ item}, navigation) => (
    <TouchableOpacity style={styles.listItem}><Text>{item.title}</Text></TouchableOpacity>
);

class AddToBucketListModal extends Component {
    constructor(props) {
        super(props)
        this.state = {textInputVal: ""}
    }

    addToList(listID) {
        // TODO: send request to add to the specified list
    }

    loadLists(obj) {
        //console.log(obj);
        var listData = [];
        var i;
        for(i = 0; i < obj.length; i++) {
            listData.push({title: obj[i]['name'], subtitle: "subtitle goes here", key: obj[i]['id'].toString()})
        }
        this.setState({listData: listData});
    }

    queryLists() {
        fetch("https://deco3801-oblong.uqcloud.net/wanderlist/get_bucketlists/1")
        .then(response => response.json())
        .then(obj => this.loadLists(obj));
    }

    componentDidMount() {
        this.queryLists();
    }

    render() {
        return (<Modal
            transparent={true}
            visible={this.props.listNameModalVisible}>
            <View style={styles.addListModalContainer}>
                <View style={styles.addListModal}>
                    <Text style={{marginBottom: 10}}> Add To WanderList... </Text>
                    <FlatList style={styles.list} data={this.state.listData} renderItem={(item) => renderItem(item, this.props.navigation)}/>
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
