import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#fff',
    padding: 14,
    paddingLeft: 20,
    height: 75,
    marginBottom: 10,
    borderRadius: 3,
  },
  titleText: {
    fontSize: 16,
  },
  subTitleText: {
    color: '#494949',
  },
  menuIcon: {
    width: 20,
    height: 20,
  },
  menuIconButton: {
    marginLeft: 'auto',
  },
});

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  changeScreen() {
    this.props.parentComp.setState({movedFromRoot: true});
    this.props.navigation.navigate('activityView', {
      activityID: this.props.activityID,
    });
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => this.changeScreen()}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.titleText}>{this.props.title}</Text>
          <TouchableOpacity style={styles.menuIconButton}>
            <Image
              source={require('../Images/menu_icon.png')}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.subTitleText}>{this.props.subtitle}</Text>
      </TouchableOpacity>
    );
  }
}

export default ListItem;
