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
                website: ""
            },
            listNameModalVisible: false,
        }
    }

    loadActivityData(obj) {
        console.log("OBJECT: ")
        console.log(obj);
        var activityDetails = {};
        activityDetails['name'] = obj['title'];
        activityDetails['description'] = obj['description'];
        activityDetails['points'] = obj['points'];
        activityDetails['website'] = obj['website'];
        activityDetails['imageurl'] = obj['imageurl'];
        console.log(activityDetails);
        this.setState({loading: false, activityDetails: activityDetails});
         
    }

    openQRScanner() {
        this.props.navigation.navigate("qrScanner",
        {
            activityID: this.props.route.params.activityID
        });
    }

    hideModal() {
        this.setListNameModalVisible(false);
    }

    setListNameModalVisible = (visible) => {
        this.setState({listNameModalVisible: visible});
    }

    //loads in the activity data from the backend
    componentDidMount() {
        console.log("Loading activity: " + this.props.route.params.activityID)
        //previous route gives and activity id, retrieve from server
        let url = "https://deco3801-oblong.uqcloud.net/wanderlist/activity/" + this.props.route.params.activityID
        fetch(url, {method: "GET"})
        .then(response => response.json())
        .then(object => {this.loadActivityData(object)});
    }

    render() {
        return (
            <View style={styles.container}>
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
                        style={styles.addToWL}>
                        <Text style={{color: '#000'}}>Go To Website</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.addListButton}
                        onPress={() =>this.openQRScanner()}>
                        <Text style={{color: '#fff'}}>Complete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default ActivityScreen;
