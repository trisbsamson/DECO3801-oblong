import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../Styles/style';

/**
 * Component for the location cards on the home screen.
 * 
 */
class CardListItem extends Component {
    // main component constructor function - boilerplate
    constructor(props) {
        super(props);
    }

    // navigates to the Locations page - needs fixed to go to a specific location
    navToLocation() {
        this.props.navigation.navigate("Browse Locations")
    }

    // render method - returns JSX components to render to DOM
    render() {
        return (
            <TouchableOpacity style={styles.cardItemContainer} onPress={() => this.navToLocation()}>
                <Image source={{uri:this.props.imageURL}} style={styles.cardItemImage}/>
                <Text style={styles.cardItemLabel}>{this.props.name}</Text>
            </TouchableOpacity>
        )
        
    }
};

export default CardListItem;