import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../Styles/style';

class CardListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={styles.cardItemContainer} onPress={() => this.props.navigation.navigate("Browse Locations", {id: this.props.locID, name: this.props.name})}>
                <Image source={{uri:this.props.imageURL}} style={styles.cardItemImage}/>
                <Text style={styles.cardItemLabel}>{this.props.name}</Text>
            </TouchableOpacity>
        )
        
    }
};

export default CardListItem;