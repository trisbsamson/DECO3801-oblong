import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import styles from '../Styles/style.js'

/**
 * Component used to display reward items in the list available on the profile page.
 * 
 */
class ListItem extends Component {
    // main component constructor function - instantiates state variables
    constructor(props) {
        super(props);
        this.state = {
            showingRedeem: false,
            textValue: props.title,
            buttonText: "Redeem"
        }
    }

    // changes the state variables to toggle displaying the 'hidden' and 'visible' states of the redeem code.
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

    // render method - returns JSX components to render to DOM
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
