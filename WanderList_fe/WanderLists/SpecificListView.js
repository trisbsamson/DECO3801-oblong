import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, FlatList, Dimensions} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ActivityListItem from './ActivityListItem';
import Icon from 'react-native-vector-icons/Feather';
import MapComponent from './MapComponent';
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
//       marginBottom: 20,
//       fontSize: 20,
//   },
//   map: {
//       width: 390,
//       height: 300,
//       marginBottom: 20,
//   },
//   listItem: {

//   },
//   listTitle: {
//       padding: 10,
//       fontSize: 18,
//       fontWeight: "700"
//   },
//   completeStatusText: {
//       fontSize: 16,
//       marginTop: 10,
//       padding: 10,
//       fontStyle: "italic"
//   },
//   topPanel: {
//       flexDirection: 'row',
//       alignItems: 'center'
//   },
//   tagsDropdownButton: {
//       padding: 5,
//       width: 150,
//       marginLeft: 'auto',
//       marginRight: 10,
//       flexDirection: 'row',
//       alignItems: 'center'
//   },
// });

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
            filteredIncompleteListData: [],
            filteredCompletedListData: [],
            listID: props.route.params.listID,
            filters: [],
            tagFilters: []
        }
    }

    loadLists(obj) {
        // two separate lists for incomplete and complete activities
        var incompleteListData = [];
        var completedListData = [];

        // list used to generate filters dropdown
        var uniqueTags = [];
        
        var i;
        for(i = 0; i < obj.length; i++) {
            // load and process tags for this activity
            var tags = [];
            var tagsString = obj[i]['tags'].split(",");
            var j;
            for(j = 0; j < tagsString.length; j++) {
                var tag = tagsString[j].trim();
                tags.push(tag);
                if(!uniqueTags.includes(tag)) {
                    uniqueTags.push(tag);
                }
            }
            // add activity to correspoinding list
            if(!obj[i]['completed']) {
                incompleteListData.push({
                    title: obj[i]['title'],
                    subtitle: "subtitle goes here",
                    key: obj[i]['activity_id'].toString(),
                    id: obj[i]['activity_id'],
                    lat: parseFloat(obj[i]['latitude']),
                    long: parseFloat(obj[i]['longitude']),
                    completed: false,
                    tags: tags
                });
            } else {
                completedListData.push({
                    title: obj[i]['title'],
                    subtitle: "subtitle goes here",
                    key: obj[i]['activity_id'].toString(),
                    id: obj[i]['activity_id'],
                    lat: parseFloat(obj[i]['latitude']),
                    long: parseFloat(obj[i]['longitude']),
                    completed: true,
                    tags: tags
                });
            }
        }
        var tagFilters = [];
        // construct list of tag objects to go in dropdown
        for(i = 0; i < uniqueTags.length; i++) {
            tagFilters.push({label: uniqueTags[i], value: uniqueTags[i]});
        }

        this.setState({incompleteListData: incompleteListData,
                        completedListData: completedListData,
                        tagFilters: tagFilters},
                        () => this.filterActivities());
    }

    filterActivities() {
        if(this.state.filters.length == 0) {
            this.setState({
                filteredIncompleteListData: this.state.incompleteListData,
                filteredCompletedListData: this.state.completedListData
            });
        } else {
            var i;
            var f_incListData = [];
            var f_compListData = [];
            for(i = 0; i < this.state.incompleteListData.length; i++) {
                var j;
                var toInclude = false;
                for(j = 0; j < this.state.filters.length; j++) {
                    if(this.state.incompleteListData[i].tags.includes(this.state.filters[j])) {
                        toInclude = true;
                    }
                }
                if(toInclude) {
                    f_incListData.push(this.state.incompleteListData[i]);
                }
            }

            for(i = 0; i < this.state.completedListData.length; i++) {
                var j;
                var toInclude = false;
                for(j = 0; j < this.state.filters.length; j++) {
                    if(this.state.completedListData[i].tags.includes(this.state.filters[j])) {
                        toInclude = true;
                    }
                }
                if(toInclude) {
                    f_compListData.push(this.state.completedListData[i]);
                }
            }
            
            this.setState({
                filteredIncompleteListData: f_incListData,
                filteredCompletedListData: f_compListData});
        }
        
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
                <MapComponent incompleteListData={this.state.filteredIncompleteListData} completedListData={this.state.filteredCompletedListData}/>
                <View>
                    <View style={styles.topPanel}>
                        <Text style={styles.listTitle}> {this.state.listTitle} </Text>
                        <DropDownPicker
                            items={this.state.tagFilters}
                        
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
                            onChangeItem={item => (this.setState({
                                filters: item // an array of the selected items
                            }, () => this.filterActivities()))}
                        />
                    </View>
                    
                    <FlatList data={this.state.filteredIncompleteListData} renderItem={(item) => renderItem(item, this.props.navigation)}/>
                    <Text style={styles.completeStatusText}> Completed</Text>
                    <FlatList data={this.state.filteredCompletedListData} renderItem={(item) => renderItem(item, this.props.navigation)}/>
                </View>
            </View>
        );
    }
}

export default SpecificListView;
