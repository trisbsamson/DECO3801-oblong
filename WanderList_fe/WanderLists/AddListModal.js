import React, {Component} from 'react'
import {Modal, Text, TextInput, View, TouchableOpacity, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
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

class AddListModal extends Component {
    constructor(props) {
        super(props)
        this.state = {textInputVal: ""}
    }

    addList() {
        if(this.state.textInputVal != "") {
            var queryString = "https://deco3801-oblong.uqcloud.net/wanderlist/post_list/" + this.state.textInputVal + "/1";
            fetch(queryString, {
                credentials: 'include',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }})
            .then(response => console.log("Response: " + response.status))
            .then(this.props.queryLists())
            .catch((error) => { console.error(error); });
            this.props.hideModalFunc();
        }
    }

    render() {
        return (<Modal
            transparent={true}
            visible={this.props.listNameModalVisible}>
            <View style={styles.addListModalContainer}>
                <View style={styles.addListModal}>
                    <Text> New list name </Text>
                    <TextInput style={styles.modalTextField} onChangeText={text => this.setState({textInputVal: text})}/>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={() => this.props.hideModalFunc()}>
                            <Text> Cancel </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addButton}
                            onPress={() => this.addList()}>
                            <Text style={{color: '#fff'}}> Create </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>);

    }
}

export default AddListModal;
