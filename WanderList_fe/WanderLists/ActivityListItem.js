import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

const styles = StyleSheet.create({
    textField: {
        fontSize: 15
    },
    copyButton: {
        backgroundColor: '#fff',
        marginLeft: 'auto',
        padding: 5,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 3,
        width: 80,
        alignItems: 'center'
    },
    listItem: {
        backgroundColor: '#fff',
        paddingRight: 12,
        padding: 6,
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
});

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
        this.props.navigation.navigate("qrScanner");
    }

    render() {
        return (
            <TouchableOpacity
            style={styles.listItem}
            onPress={() => this.changeScreen()}>
                <Text style={styles.textField}>{this.props.title}</Text>
                <TouchableOpacity
                style={styles.copyButton}
                onPress={() => this.activateActivity()}
                activeOpacity={0}>
                    <Text style={styles.copyTextField}>Complete</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }
}

export default ActivityListItem;
