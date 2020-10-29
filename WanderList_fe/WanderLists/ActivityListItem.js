import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import styles from '../Styles/style.js'

class ActivityListItem extends Component {
    constructor(props) {
        super(props);
    }

    changeScreen() {
        console.log(this.props)
        this.props.navigation.navigate("activityView",
        {
            activityID: this.props.activityID,
            bucketListID: this.props.listID,
            completed: this.props.completed,
            reloadListsFunc: this.props.reloadListsFunc
        });
    }

    activateActivity() {
        this.props.navigation.navigate("qrScanner",
        {
            activityID: this.props.activityID,
            bucketListID: this.props.listID,
            reloadListsFunc: this.props.reloadListsFunc
        });
    }

    render() {
        return (
            <TouchableOpacity
            style={styles.listItemActivity}
            onPress={() => this.changeScreen()}>
                <Text style={styles.textFieldActivity}>{this.props.title}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 'auto', marginRight: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 5}}>
                        <Image
                            style = {styles.leafIcon}
                            source={require('../Images/leaf_icon.png')}
                        />
                        <Text style={{fontSize: 16}}> {this.props.susRating}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            style = {styles.leafIcon}
                            source={require('../Images/star_icon.png')}
                        />
                        <Text style={{fontSize: 16}}> {this.props.funRating}</Text>
                    </View>
                </View>
                
                {!this.props.completed && <TouchableOpacity
                style={styles.listCompleteActivityButton}
                onPress={() => this.activateActivity()}
                activeOpacity={0}>
                    <Text style={styles.copyTextField}>Complete</Text>
                </TouchableOpacity>}
                
            </TouchableOpacity>
        );
    }
}

export default ActivityListItem;
