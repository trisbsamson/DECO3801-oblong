import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import styles from '../style/style.js'

// const styles = StyleSheet.create({
//     textFieldActivity: {
//         fontSize: 15,
//         margin: 5
//     },
//     copyButton: {
//         backgroundColor: '#fff',
//         marginLeft: 'auto',
//         padding: 5,
//         borderColor: '#000',
//         borderWidth: 1,
//         borderRadius: 3,
//         width: 80,
//         alignItems: 'center'
//     },
//     listItemActivity: {
//         backgroundColor: '#fff',
//         paddingRight: 12,
//         padding: 6,
//         paddingLeft: 20,
//         flexDirection: 'row',
//         alignItems: 'center'
//     },
// });

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
