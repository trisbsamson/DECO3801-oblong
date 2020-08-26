import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

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

    changeScreen() {
        this.props.navigation.navigate("specificListView",
        {
            listTitle: this.props.title
        });
    }

    render() {
        return (
            <TouchableOpacity
            style={styles.listItem}
            onPress={() => this.changeScreen()}>
                <Text style={styles.textField}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

export default ListItem;
