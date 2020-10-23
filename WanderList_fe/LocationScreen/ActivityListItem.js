import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import styles from '../Styles/style';

class ActivityListItem extends Component {
  constructor(props) {
    super(props);
  }

  changeScreen() {
    this.props.navigation.navigate("activityView",
        {
            activityID: this.props.activityID
        });
  }

  activateActivity() {}

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
