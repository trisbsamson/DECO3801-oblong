import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import styles from '../Styles/style';

/**
 * This is the list item in the activity list for each location. 
 * It handles navigation upon selecting an activity to view or add to list.
 * 
 */
class ActivityListItem extends Component {
  // main component constructor function - boilerplate
  constructor(props) {
    super(props);
  }

  // after touching this activity, navigates to the ActivityScreenAdd component with this activity ID as an argument
  changeScreen() {
    this.props.navigation.navigate("activityView",
        {
            activityID: this.props.activityID
        });
  }

  // render method - returns JSX components to render to DOM
  render() {
    return (
      <TouchableOpacity
        style={styles.listItemActivity}
        onPress={() => this.changeScreen()}>
        <Text style={styles.textFieldActivity}>{this.props.title}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 'auto', marginRight: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 5}}>
              <Image
                  style = {styles.leafIcon}
                  source={require('../Images/leaf_icon.png')}
              />
              <Text style={{fontSize: 16}}> {this.props.item.susRating}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                  style = {styles.leafIcon}
                  source={require('../Images/star_icon.png')}
              />
              <Text style={{fontSize: 16}}> {this.props.item.funRating}</Text>
          </View>
      </View>
        <TouchableOpacity
          style={styles.listCompleteActivityButton}
          onPress={() => this.props.activateModalFunc(true, this.props.activityID)}
          activeOpacity={0}>
          <Text style={styles.copyTextField}>+ List</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

export default ActivityListItem;
