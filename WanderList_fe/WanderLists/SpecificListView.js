import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, FlatList, Dimensions, ScrollView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ActivityListItem from './ActivityListItem';
import Icon from 'react-native-vector-icons/Feather';
import MapComponent from './MapComponent';
import styles from '../Styles/style.js'

const renderItem = ({ item }, navigation, reloadListsFunc, listID) => (
    <ActivityListItem title={item.title} activityID={item.activityId} navigation={navigation} completed={item.completed} reloadListsFunc={reloadListsFunc} listID={listID} funRating={item.funRating} susRating={item.susRating}/>
);

/**
 * Component which shows the contents of a specific WanderList. Shows their position on a Google map using the MapComponent, 
 * and displays a filterable list of activities to be completed and already completed.
 * 
 */
class SpecificListView extends Component {
    // main component constructor function - instantiates state variables
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

    // processes the API response containing lists belonging to a specific WanderList
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
                    key: i.toString(),
                    activityId: obj[i]['activity_id'],
                    lat: parseFloat(obj[i]['latitude']),
                    long: parseFloat(obj[i]['longitude']),
                    funRating: parseFloat(obj[i]['avg_fun_rating']).toFixed(1),
                    susRating: parseFloat(obj[i]['avg_sustainability_rating']).toFixed(1),
                    completed: false,
                    tags: tags
                });
            } else {
                completedListData.push({
                    title: obj[i]['title'],
                    subtitle: "subtitle goes here",
                    key: i.toString(),
                    activityId: obj[i]['activity_id'],
                    lat: parseFloat(obj[i]['latitude']),
                    long: parseFloat(obj[i]['longitude']),
                    funRating: parseFloat(obj[i]['avg_fun_rating']).toFixed(1),
                    susRating: parseFloat(obj[i]['avg_sustainability_rating']).toFixed(1),
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

    // depending on the currently selected filter options, filters the completed and incomplete activity lists for rendering.
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

    // sends an API request to get the actiivties belonging to the current WanderList
    loadListData() {
        // do the fetch here once api works
        fetch("https://deco3801-oblong.uqcloud.net/wanderlist/get_bucketlist_activities/" + this.state.listID.toString())
        .then(response => response.json())
        .then(object => {this.loadLists(object)});
    }

    // on component initialisation, send the API request to load list data.
    componentDidMount() {
        this.loadListData();
    }

    // render method - returns JSX components to render to DOM
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
                    <FlatList style={{maxHeight: 200}} data={this.state.filteredIncompleteListData} renderItem={(item) => renderItem(item, this.props.navigation, this.loadListData.bind(this), this.state.listID)}/>
                    <Text style={styles.completeStatusText}> Completed</Text>
                    <FlatList style={{maxHeight: 180}} data={this.state.filteredCompletedListData} renderItem={(item) => renderItem(item, this.props.navigation, this.loadListData.bind(this), this.state.listID)}/>
                    
                </View>
            </View>
        );
    }
}

export default SpecificListView;
