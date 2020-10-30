import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../Styles/style';

/**
 * Component for the location cards on the home screen.
 * 
 */
class CardListItem extends Component {
    constructor(props) {
        super(props);
    }

    navToLocation() {
        this.props.navigation.navigate("Browse Locations")
    }

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