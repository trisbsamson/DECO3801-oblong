import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, FlatList, Dimensions} from 'react-native';
import ActivityListItem from './ActivityListItem';
import MapComponent from './MapComponent'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 'auto',
  },
  textField: {
      marginBottom: 20,
      fontSize: 20,
  },
  map: {
      width: 390,
      height: 300,
      marginBottom: 20,
  },
  listItem: {

  },
  listTitle: {
      padding: 10,
      fontSize: 18,
      fontWeight: "700"
  }
});

const renderItem = ({ item }, navigation) => (
    <ActivityListItem title={item.title} activityID={item.id} navigation={navigation}/>
);
class SpecificListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            listTitle: props.route.params.listTitle,
            listData: [],
            listID: props.route.params.listID
        }
    }

    loadLists(obj) {
        //console.log(obj);
        var listData = [];
        var i;
        for(i = 0; i < obj.length; i++) {
            listData.push({title: obj[i]['title'],
                            subtitle: "subtitle goes here",
                            key: obj[i]['activity_id'].toString(),
                            id: obj[i]['activity_id'],
                            lat: parseFloat(obj[i]['latitude']),
                            long: parseFloat(obj[i]['longitude'])});
        }
        this.setState({listData: listData});
    }

    printresp(response) {
        console.log(response);
    }

    componentDidMount() {
        // do the fetch here once api works
        fetch("https://deco3801-oblong.uqcloud.net/wanderlist/get_bucketlist_activities/" + this.state.listID.toString())
        .then(response => response.json())
        .then(object => {this.loadLists(object)});
    }

    render() {
        return (
            <View style={styles.container}>
                <MapComponent listData={this.state.listData}/>
                <View>
                    <Text style={styles.listTitle}> {this.state.listTitle} </Text>
                    <FlatList data={this.state.listData} renderItem={(item) => renderItem(item, this.props.navigation)}/>
                </View>
            </View>
        );
    }
}

export default SpecificListView;
