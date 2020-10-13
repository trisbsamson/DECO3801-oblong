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
                {/*  Pending url coming from backend  */}
                <Image source={{uri:"https://oztrekk.com/wp-content/uploads/2018/12/queensland_campus.jpg"}} style={styles.cardItemImage}/>
                <Text style={styles.cardItemLabel}>{this.props.name}</Text>
            </TouchableOpacity>
        )
        
    }
};

export default CardListItem;