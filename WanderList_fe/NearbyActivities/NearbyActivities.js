import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  },
  textField: {
      marginBottom: 20,
      fontSize: 20,
  },
})


class NearbyActivities extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textField}>
                    Nearby Activities
                </Text>
                <TouchableOpacity
                    title="Return Home"
                    style={styles.button}
                    onPress={() =>
                    this.props.navigation.navigate('Home', {name: 'User'})
                    }
                >
                    <Text> Return Home </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default NearbyActivities;
