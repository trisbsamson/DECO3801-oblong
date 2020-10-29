import React, {Component} from 'react'
import {Modal, Text, TextInput, View, TouchableOpacity, StyleSheet, Image} from 'react-native'
import style from '../Styles/style.js'
import styles from '../Styles/style.js'

class ActivityCompleteModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textInputVal: "",
            susRating: 0,
            funRating: 0
        }
    }

    sendRatingFunc() {
        var bdy = JSON.stringify({
            "activity_id": this.props.activityID,
            "bucketlist_id": this.props.bucketListID,
            "sustainability_rating": this.state.susRating,
            "fun_rating": this.state.funRating
        });
        console.log(bdy);
        var queryString = "https://deco3801-oblong.uqcloud.net/wanderlist/rate_activity";
        fetch(queryString, {
            method: 'POST',
            body: bdy,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {console.log(response.status); response.json().then(data => console.log(data))});
          
        this.finishFunc();
    }

    finishFunc() {
        this.props.hideModalFunc();
        this.props.reloadListDataFunc();
        this.props.navigation.goBack();
    }

    render() {
        return (<Modal
            transparent={true}
            visible={this.props.activityCompleteModalVisible}>
                    {(this.props.completeMode == 1) && (
                        <View style={styles.activityCompleteModalContainer}>
                            <View style={styles.activityCompleteModal_1}>
                                <Text style={{fontSize: 16}}>Error: The QR Code is invalid</Text>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <TouchableOpacity
                                        style={styles.activityCompleteModalButton_1}
                                        onPress={() => this.props.hideModalFunc()}>
                                        <Text> Try Again </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                    {(this.props.completeMode == 2) && (
                        <View style={styles.activityCompleteModalContainer}>
                            <View style={styles.activityCompleteModal_1}>
                                <Text style={{fontSize: 16}}>Error: The QR Code doesn't match this activity</Text>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <TouchableOpacity
                                        style={styles.activityCompleteModalButton_1}
                                        onPress={() => this.props.hideModalFunc()}>
                                        <Text> Try Again </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                    {(this.props.completeMode == 3) && (
                        <View style={styles.activityCompleteModalContainer}>
                            <View style={styles.activityCompleteModal_1}>
                                <Text style={{fontSize: 16}}>You've already completed this activity in another WanderList</Text>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <TouchableOpacity
                                        style={styles.cancelButton}
                                        onPress={() => this.props.hideModalFunc()}>
                                        <Text> Cancel </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.addButton} onPress={() => this.finishFunc()}>
                                        <Text style={{color: '#fff'}}> Finish </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                    {(this.props.completeMode == 4) && (
                        <View style={styles.activityCompleteModalContainer}>
                            <View style={styles.activityCompleteModal}>
                                <Text style={{fontSize: 16}}>Thanks for completing this activity!</Text>
                                {this.props.reward != "" && 
                                <View>
                                    <Text style={{fontSize: 16, marginBottom: 10}}>You earned the reward: </Text>
                                    <View style={{alignItems: 'center', marginBottom: 10}}>
                                    <Text style={{fontSize: 16, fontWeight: '700'}}>{this.props.reward}</Text>
                                    </View>
                                </View>}
                                <Text style={{fontSize: 16}}>What did you think?</Text>
                                <View style={styles.ratingsArea}>
                                    <Text style={{fontSize: 16, paddingBottom: 5}}>Sustainability</Text>
                                    <View style={styles.ratingGrid}>
                                        <TouchableOpacity style={styles.ratingButton} activeOpacity={1.0} onPress={() => this.setState({susRating: 1})}>
                                            <Image
                                                style = {this.state.susRating > 0 ? styles.ratingImage_selected : styles.ratingImage_notSelected}
                                                source={require('../Images/leaf_icon.png')}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.ratingButton} activeOpacity={1.0} onPress={() => this.setState({susRating: 2})}>
                                            <Image
                                                style = {this.state.susRating > 1 ? styles.ratingImage_selected : styles.ratingImage_notSelected}
                                                source={require('../Images/leaf_icon.png')}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.ratingButton} activeOpacity={1.0} onPress={() => this.setState({susRating: 3})}>
                                            <Image
                                                style = {this.state.susRating > 2 ? styles.ratingImage_selected : styles.ratingImage_notSelected}
                                                source={require('../Images/leaf_icon.png')}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.ratingButton} activeOpacity={1.0} onPress={() => this.setState({susRating: 4})}>
                                            <Image
                                                style = {this.state.susRating > 3 ? styles.ratingImage_selected : styles.ratingImage_notSelected}
                                                source={require('../Images/leaf_icon.png')}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.ratingButton} activeOpacity={1.0} onPress={() => this.setState({susRating: 5})}>
                                            <Image
                                                style = {this.state.susRating > 4 ? styles.ratingImage_selected : styles.ratingImage_notSelected}
                                                source={require('../Images/leaf_icon.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{fontSize: 16, paddingBottom: 4}}>Overall</Text>
                                    <View style={styles.ratingGrid}>
                                        <TouchableOpacity style={styles.ratingButton} activeOpacity={1.0} onPress={() => this.setState({funRating: 1})}>
                                            <Image
                                                style = {this.state.funRating > 0 ? styles.ratingImage_selected : styles.ratingImage_notSelected}
                                                source={require('../Images/star_icon.png')}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.ratingButton} activeOpacity={1.0} onPress={() => this.setState({funRating: 2})}>
                                            <Image
                                                style = {this.state.funRating > 1 ? styles.ratingImage_selected : styles.ratingImage_notSelected}
                                                source={require('../Images/star_icon.png')}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.ratingButton} activeOpacity={1.0} onPress={() => this.setState({funRating: 3})}>
                                            <Image
                                                style = {this.state.funRating > 2 ? styles.ratingImage_selected : styles.ratingImage_notSelected}
                                                source={require('../Images/star_icon.png')}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.ratingButton} activeOpacity={1.0} onPress={() => this.setState({funRating: 4})}>
                                            <Image
                                                style = {this.state.funRating > 3 ? styles.ratingImage_selected : styles.ratingImage_notSelected}
                                                source={require('../Images/star_icon.png')}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.ratingButton} activeOpacity={1.0} onPress={() => this.setState({funRating: 5})}>
                                            <Image
                                                style = {this.state.funRating > 4 ? styles.ratingImage_selected : styles.ratingImage_notSelected}
                                                source={require('../Images/star_icon.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    
                                </View>
                                
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <TouchableOpacity
                                        style={styles.cancelButton}
                                        onPress={() => this.props.hideModalFunc()}>
                                        <Text> Cancel </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.addButton} onPress={() => this.sendRatingFunc()}>
                                        <Text style={{color: '#fff'}}> Finish </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
        </Modal>);

    }
}

export default ActivityCompleteModal;
