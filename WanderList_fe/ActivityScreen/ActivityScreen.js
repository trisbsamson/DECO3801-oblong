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
        var activityDetails = {};
        activityDetails['name'] = obj[0]['title'];
        activityDetails['description'] = obj[0]['description'];
        activityDetails['guidanceDescription'] = obj[0]['guidance_description'];
        activityDetails['susDescription'] = obj[0]['sustainability_description'];
        activityDetails['points'] = obj[0]['points'];
        activityDetails['website'] = obj[0]['website'];
        activityDetails['imageurl'] = obj[0]['imageurl'];
        activityDetails['funRating'] = obj[0]['fun_rating'].toFixed(1);
        activityDetails['susRating'] = obj[0]['sustainability_rating'].toFixed(1);
        this.setState({loading: false, activityDetails: activityDetails});
         
    }

    openQRScanner() {
        this.props.navigation.navigate("qrScanner",
        {
            activityID: this.props.route.params.activityID,
            bucketListID: this.props.route.params.bucketListID
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
                        <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 15}}>
                            <Image
                                style = {styles.leafIcon}
                                source={require('../Images/leaf_icon.png')}
                            />
                            <Text style={{fontSize: 16}}>  {this.state.activityDetails.susRating}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image
                                style = {styles.leafIcon}
                                source={require('../Images/star_icon.png')}
                            />
                            <Text style={{fontSize: 16}}>  {this.state.activityDetails.funRating}</Text>
                        </View>
                    </View>
                </View>
                <Image
                    source={{uri:this.state.activityDetails.imageurl}}
                    style={styles.mainImage}
                />
                <View style={styles.descriptionPane}>
                    <Text style={styles.activityDescriptionHeadings}>Activity description</Text>
                    <Text style={styles.activityDescriptionBody}>{this.state.activityDetails.description}</Text>
                    <Text style={styles.activityDescriptionHeadings}>Activity guidance</Text>
                    <Text style={styles.activityDescriptionBody}>{this.state.activityDetails.guidanceDescription}</Text>
                    <Text style={styles.activityDescriptionHeadings}>Sustainability</Text>
                    <Text style={styles.activityDescriptionBody}>{this.state.activityDetails.susDescription}</Text>
                </View>
                <View style={styles.buttonPane}>
                    <TouchableOpacity
                        style={styles.addToWL}>
                        <Text style={{color: '#000'}}>Go To Website</Text>
                    </TouchableOpacity>
                    {(!this.props.route.params.completed) && (
                        <TouchableOpacity
                            style={styles.addListButton}
                            onPress={() =>this.openQRScanner()}>
                            <Text style={{color: '#fff'}}>Complete</Text>
                        </TouchableOpacity>
                    )}
                    
                </View>
            </View>
        );
    }
}

export default ActivityScreen;
