import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native'

const styles = StyleSheet.create({
    textField: {

    },
    listItem: {
        backgroundColor: '#DDDDDD',
        padding: 14,
    },
});

class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.listItem}>
                <Text style={styles.textField}>{this.props.title}</Text>
            </View>
        );
    }
}

export default ListItem;
