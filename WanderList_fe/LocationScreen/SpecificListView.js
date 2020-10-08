import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import ActivityListItem from './ActivityListItem';
import styles from '../style/style.js'


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//     marginTop: 'auto',
//   },
//   textField: {
//     marginBottom: 20,
//     fontSize: 20,
//   },
//   map: {
//     width: 390,
//     height: 300,
//     marginBottom: 20,
//   },
//   listItem: {},
//   listTitle: {
//     padding: 10,
//     fontSize: 18,
//     fontWeight: '700',
//   },
// });

const renderItem = ({item}) => <ActivityListItem title={item.title} />;
class SpecificListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      listTitle: props.route.params.listTitle,
      listData: [
        {title: 'First Activity', key: 'a'},
        {title: 'Second Activity', key: 'b'},
        {title: 'Also an Activity', key: 'c'},
      ],
    };
  }
  printresp(response) {
    console.log(response);
  }
  componentDidMount() {
    // do the fetch here once api works
    fetch(
      'https://deco3801-oblong.uqcloud.net/wanderlist/get_bucketlist_activities/1',
    )
      .then((response) => response.json())
      .then((object) => {
        this.printresp(object);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapComponent />
        <View>
          <Text style={styles.listTitle}> {this.state.listTitle} </Text>
          <FlatList data={this.state.listData} renderItem={renderItem} />
        </View>
      </View>
    );
  }
}

export default SpecificListView;
