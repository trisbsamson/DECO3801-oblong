import React, {Component} from 'react'
import {Modal, Text, TextInput, View, TouchableOpacity, StyleSheet} from 'react-native'
import styles from '../Styles/style.js'

class AddListModal extends Component {
    constructor(props) {
        super(props)
        this.state = {textInputVal: ""}
    }

    addList() {
        if(this.state.textInputVal != "") {

            var queryString = "https://deco3801-oblong.uqcloud.net/wanderlist/bucketlist/";
            fetch(queryString, {
                method: 'POST',
                body: JSON.stringify({
                    "name": this.state.textInputVal,
                    "user_id": 1
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => console.log("Response: " + response.status))
            .then(this.props.queryLists())
            .catch((error) => {console.error(error);});
            this.props.hideModalFunc();
        }
    }

    render() {
        return (<Modal
            transparent={true}
            visible={this.props.listNameModalVisible}>
            <View style={styles.addListModalContainerWanderlist}>
                <View style={styles.addListModalWanderlist}>
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
