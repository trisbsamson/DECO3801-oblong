import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, FlatList, Dimensions} from 'react-native';
import AddToBucketListModal, {AddToBucketList} from './AddToBucketListModal';
import styles from '../Styles/style.js'

const { width, height } = Dimensions.get('window');

class ActivityScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            listTitle: props.route.params.listTitle,
            listData: [],
            listID: props.route.params.listID,
            activityDetails: {
                name: "",
                description: "",
                points: 0,
                website: "",
                id: ""
            },
            addToListModalVisible: false,
        }
    }

    loadActivityData(obj) {
        
        var activityDetails = {};
        activityDetails['id'] = obj['id'];
        activityDetails['name'] = obj['title'];
        activityDetails['description'] = obj['description'];
        activityDetails['points'] = obj['points'];
        activityDetails['website'] = obj['website'];
        activityDetails['imageurl'] = obj['imageurl'];
        console.log(activityDetails);
        this.setState({loading: false, activityDetails: activityDetails});
         
    }

    changeScreen() {
        console.log(this.state.activityDetails)
        this.props.navigation.navigate('addToList', {
            activityID: this.state.activityDetails["id"]
        });

        
    }

    hideModal() {
        this.setAddToListModalVisible(false);
    }

    setAddToListModalVisible = (visible) => {
        this.setState({addToListModalVisible: visible});
    }

    //loads in the activity data from the backend
    componentDidMount() {
        //previous route gives and activity id, retrieve from server
        let url = "https://deco3801-oblong.uqcloud.net/wanderlist/activity/" + this.props.route.params.activityID
        fetch(url, {method: "GET"})
        .then(response => response.json())
        .then(object => {this.loadActivityData(object)});
    }

    render() {
        return (
            <View style={styles.container}>
                <AddToBucketListModal addToListModalVisible={this.state.addToListModalVisible} activityID={this.props.route.params.activityID} hideModalFunc={this.hideModal.bind(this)}/>
                <View style={styles.titlePanel}>
                    <Text style={styles.activityTitle}>{this.state.activityDetails.name}</Text>
                    <View style={styles.subtitle}>
                        <Text style={{fontSize: 16}}> {this.state.activityDetails.points} Points </Text>
                    </View>
                </View>
                <Image
                    source={{uri:this.state.activityDetails.imageurl}}
                    style={styles.mainImage}
                />
                <View style={styles.descriptionPane}>
                    <Text style={{fontSize: 16}}>{this.state.activityDetails.description}</Text>
                </View>
                <View style={styles.buttonPane}>
                    <TouchableOpacity
                        style={styles.gotoWebsiteButton}>
                        <Text style={{color: '#000'}}>Go To Website</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.addListButton}
                        onPress={() =>this.setAddToListModalVisible(true)}>
                        <Text style={{color: '#fff'}}>Add to List</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default ActivityScreen;
