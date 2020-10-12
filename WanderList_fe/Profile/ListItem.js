import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import styles from '../Styles/style.js'
/*
const styles = StyleSheet.create({
    textField: {
        color: '#fff'
    },
    listItem: {
        paddingLeft: 20,
        paddingRight: 12,
        padding: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    redeemButton: {
        backgroundColor: '#196DFF',
        marginLeft: 'auto',
        padding: 5,
        color: '#fff',
        borderRadius: 3,
        width: 80,
        alignItems: 'center'
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
    copyTextField: {
        color: '#000'
    },
    codeField: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 3,
        padding: 10,
        alignItems: 'center',
        fontSize: 16,
        marginLeft: 'auto'
    },
    listText: {
        paddingBottom: 12,
        paddingTop: 12,
    }
});*/

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingRedeem: false,
            textValue: props.title,
            buttonText: "Redeem"
        }
    }

    redeemItem() {
        if(!this.state.showingRedeem) {
            this.setState({
                showingRedeem: true,
                textValue: this.props.redeemCode,
                buttonText: "Copy"
            });
        } else {
            this.setState({
                showingRedeem: false,
                textValue: this.props.title,
                buttonText: "Redeem"
            });
        }

    }

    render() {
        return (
            <View style={styles.listItemProfile}>
                <Text style={this.state.showingRedeem ? styles.codeField : styles.listTextProfile}>
                    {this.state.textValue}
                </Text>
                <TouchableOpacity
                style={this.state.showingRedeem ? styles.copyButton : styles.redeemButton}
                onPress={() => this.redeemItem()}
                activeOpacity={0}>
                    <Text style={this.state.showingRedeem ? styles.copyTextField : styles.textFieldProfile}>{this.state.buttonText}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ListItem;
