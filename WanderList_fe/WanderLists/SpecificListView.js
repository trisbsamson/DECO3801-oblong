import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, FlatList, Dimensions} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ActivityListItem from './ActivityListItem';
import Icon from 'react-native-vector-icons/Feather';
import MapComponent from './MapComponent';


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
  },
  completeStatusText: {
      fontSize: 16,
      marginTop: 10,
      padding: 10,
      fontStyle: "italic"
  },
  topPanel: {
      flexDirection: 'row',
      alignItems: 'center'
  },
  tagsDropdownButton: {
      padding: 5,
      width: 150,
      marginLeft: 'auto',
      marginRight: 10,
      flexDirection: 'row',
      alignItems: 'center'
  }
});

const renderItem = ({ item }, navigation) => (
    <ActivityListItem title={item.title} activityID={item.id} navigation={navigation} completed={item.completed}/>
);
class SpecificListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            listTitle: props.route.params.listTitle,
            listData: [],
            incompleteListData: [],
            completedListData: [],
            listID: props.route.params.listID,
            filters: []
        }
    }

    loadLists(obj) {
        var incompleteListData = [];
        var completedListData = [];
        var i;
        for(i = 0; i < obj.length; i++) {
            if(!obj[i]['completed']) {
                incompleteListData.push({
                    title: obj[i]['title'],
                    subtitle: "subtitle goes here",
                    key: obj[i]['activity_id'].toString(),
                    id: obj[i]['activity_id'],
                    lat: parseFloat(obj[i]['latitude']),
                    long: parseFloat(obj[i]['longitude']),
                    completed: false
                });
            } else {
                completedListData.push({
                    title: obj[i]['title'],
                    subtitle: "subtitle goes here",
                    key: obj[i]['activity_id'].toString(),
                    id: obj[i]['activity_id'],
                    lat: parseFloat(obj[i]['latitude']),
                    long: parseFloat(obj[i]['longitude']),
                    completed: true
                });
            }
        }
        this.setState({incompleteListData: incompleteListData,
                        completedListData: completedListData});
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
                <MapComponent incompleteListData={this.state.incompleteListData} completedListData={this.state.completedListData}/>
                <View>
                    <View style={styles.topPanel}>
                        <Text style={styles.listTitle}> {this.state.listTitle} </Text>
                        <DropDownPicker
                            items={[
                                {label: 'Sports', value: 'sport'},
                                {label: 'Food', value: 'food'},
                                {label: 'Art', value: 'art'},
                            ]}
                        
                            multiple={true}
                            multipleText="Filter"
                            min={0}
                            max={10}
                        
                            defaultValue={this.state.filters}
                            placeholder="Filter"
                            containerStyle={styles.tagsDropdownButton}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            onChangeItem={item => this.setState({
                                filters: item // an array of the selected items
                            })}
                        />
                    </View>
                    
                    <FlatList data={this.state.incompleteListData} renderItem={(item) => renderItem(item, this.props.navigation)}/>
                    <Text style={styles.completeStatusText}> Completed</Text>
                    <FlatList data={this.state.completedListData} renderItem={(item) => renderItem(item, this.props.navigation)}/>
                </View>
            </View>
        );
    }
}

export default SpecificListView;
