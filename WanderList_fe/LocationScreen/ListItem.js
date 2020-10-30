import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import styles from '../Styles/style.js'

/**
 * List item component for elements in the Locations list
 * 
 */
class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  changeScreen() {
    this.props.parentComp.setState({movedFromRoot: true});
    this.props.navigation.navigate('specificLocationView', {
      locationName: this.props.name,
      locationID: this.props.locationID,
      fromHomeScreen: false
    });
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.listItemLocation}
        onPress={() => this.changeScreen()}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.titleText}>{this.props.name}</Text>
          <TouchableOpacity style={styles.menuIconButton}>
            <Image
              source={require('../Images/menu_icon.png')}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.subTitleText}>{this.props.distFromUser} km away</Text>
      </TouchableOpacity>
    );
  }
}

export default ListItem;
