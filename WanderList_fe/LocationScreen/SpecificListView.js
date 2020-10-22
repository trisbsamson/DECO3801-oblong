import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions
} from 'react-native';
import ActivityListItem from './ActivityListItem';
import styles from '../Styles/style.js'
import DropDownPicker from 'react-native-dropdown-picker';
import AddToBucketListModal from '../ActivityScreen/AddToBucketListModal';

const renderItem = ({item}, navigation, activateModalFunc) => <ActivityListItem title={item.title} navigation={navigation} activityID={item.id} activateModalFunc={activateModalFunc}/>;


class SpecificListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      listTitle: props.route.params.locationName,
      listData: [
        {title: 'First Activity', key: 'a'},
        {title: 'Second Activity', key: 'b'},
        {title: 'Also an Activity', key: 'c'},
      ],
      filters: [],
      tagFilters: [],
      addToListModalVisible: false,
      addToListModalActivity: null
    };
  }
  printresp(response) {
    console.log(response);
  }

  processActivityData(obj) {
    var activityListData = [];
    var uniqueTags = [];

    var i;
    for(i = 0; i < obj.length; i++) {
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
      activityListData.push({
        title: obj[i]['title'],
        subtitle: "",
        key: obj[i]['id'].toString(),
        id: obj[i]['id'],
        completed: false,
        tags: tags
      });
    }
    var tagFilters = [];
    // construct list of tag objects to go in dropdown
    for(i = 0; i < uniqueTags.length; i++) {
        tagFilters.push({label: uniqueTags[i], value: uniqueTags[i]});
    }

    this.setState({activityListData: activityListData,
                    tagFilters: tagFilters},
                    () => this.filterActivities());
  }

  loadActivityData() {
    console.log("Loading from: " + this.props.route.params.locationID);
    fetch("https://deco3801-oblong.uqcloud.net/wanderlist/get_activity_by_location/" + this.props.route.params.locationID, {
        method: "GET"
    })
    .then(response => response.json())
    .then(obj => this.processActivityData(obj));
  }

  filterActivities() {
    if(this.state.filters.length == 0) {
        this.setState({
            filteredActivityListData: this.state.activityListData
        });
    } else {
        var i;
        var f_activityListData = [];
        for(i = 0; i < this.state.activityListData.length; i++) {
            var j;
            var toInclude = false;
            for(j = 0; j < this.state.filters.length; j++) {
                if(this.state.activityListData[i].tags.includes(this.state.filters[j])) {
                    toInclude = true;
                }
            }
            if(toInclude) {
              f_activityListData.push(this.state.activityListData[i]);
            }
        }

        this.setState({
            filteredActivityListData: f_activityListData
          });
    }
    
}

  componentDidMount() {
    this.loadActivityData();
  }

  hideModal() {
    this.setAddToListModalVisible(false);
  }

  setAddToListModalVisible = (visible, activityID) => {
    this.setState({
      addToListModalVisible: visible,
      addToListModalActivity: activityID
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <AddToBucketListModal addToListModalVisible={this.state.addToListModalVisible} activityID={this.state.addToListModalActivity} hideModalFunc={this.hideModal.bind(this)}/>
        <View style={styles.topPanel}>
            <TouchableOpacity onPress={this.props.navigation.openDrawer}>
              <Image
                source={{uri:'https://cdn.iconscout.com/icon/free/png-256/hamburger-menu-462145.png'}}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
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
        <FlatList data={this.state.filteredActivityListData} renderItem={(item) => renderItem(item, this.props.navigation, this.setAddToListModalVisible.bind(this))} />
      </View>
    );
  }
}

export default SpecificListView;
