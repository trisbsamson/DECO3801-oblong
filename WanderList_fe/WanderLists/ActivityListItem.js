import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import styles from '../Styles/style.js'

class ActivityListItem extends Component {
    constructor(props) {
        super(props);
    }

    changeScreen() {
        console.log(this.props)
        this.props.navigation.navigate("activityView",
        {
            activityID: this.props.activityID
        });
    }

    activateActivity() {
        this.props.navigation.navigate("qrScanner",
        {
            activityID: this.props.activityID,
        });
    }

    render() {
        return (
            <TouchableOpacity
            style={styles.listItemActivity}
            onPress={() => this.changeScreen()}>
                <Text style={styles.textFieldActivity}>{this.props.title}</Text>
                {!this.props.completed && <TouchableOpacity
                style={styles.copyButton}
                onPress={() => this.activateActivity()}
                activeOpacity={0}>
                    <Text style={styles.copyTextField}>Complete</Text>
                </TouchableOpacity>}
                
            </TouchableOpacity>
        );
    }
}

export default ActivityListItem;
