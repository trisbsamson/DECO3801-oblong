import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, FlatList, Modal, TextInput} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {NavigationActions} from 'react-navigation';
import ListItem from './ListItem';
import SpecificListView from './SpecificListView'
import AddListModal from './AddListModal'
import styles from '../Styles/style.js'
import UserDataStore from '../UserDataStore/UserDataStore';

const renderItem = ({ item}, navigation, parentComp) => (
    <ListItem title={item.title} id={item.key} activityCount={item.activityCount} navigation={navigation} parentComp={parentComp}/>
);

/**
 * Main component for this navigation path. Shows a list of WanderLists belonging to this user. Also allows users to add a list with the AddListModal.
 * 
 */
class ListsView extends Component {
    // main component constructor function - instantiates state variables
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            listNameModalVisible: false,
            movedFromRoot: false,
            userData: {}
        }
    }

    // processes the API response of the list of WanderLists for this user and puts the items into a state variable to be rendered.
    loadLists(obj) {
        var listData = [];
        var i;
        console.log(obj)
        for(i = 0; i < obj.length; i++) {
            listData.push({title: obj[i]['name'], activityCount: obj[i]['activity_count'], key: obj[i]['id'].toString()})
        }
        
        this.setState({listData: listData});
    }

    // calls the API to get a list of WanderLists belonging to this user
    queryLists() {
        fetch("https://deco3801-oblong.uqcloud.net/wanderlist/get_bucketlist_belonging_to_user/" + this.state.userData.id)
        .then(response => response.json())
        .then(obj => this.loadLists(obj));
    }

    // on instantiation of the component, adds an event listener to the parent of this component. 
    // This ensures that whenever we navigate to this branch of the drawer navigator we go to the root.
    componentDidMount() {
        const unsub = this.props.parentNav.addListener('focus', () => {
            if(this.state.movedFromRoot) {
                this.props.navigation.popToTop();
                this.props.navigation.navigate("AppContents", {screen: 'WanderLists', initial: false});
            }
        });
        this.setState({userData: UserDataStore.getUserData()}, () => this.queryLists());
    }

    // hides the AddListModa
    hideModal() {
        this.setListNameModalVisible(false);
    }

    // sets the visibility of the AddListModal
    setListNameModalVisible = (visible) => {
        
        this.setState({listNameModalVisible: visible});
    }

    // render method - returns JSX components to render to DOM
    render() {
        const {listNameModalVisible} = this.state;
        return (
                <View style={styles.container}>
                        <AddListModal queryLists={this.queryLists.bind(this)} listNameModalVisible={this.state.listNameModalVisible} hideModalFunc={this.hideModal.bind(this)} userID={this.state.userData.id}/>
                            <View style={styles.header}>
                                <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                                  <Image
                                    source={{uri:'https://cdn.iconscout.com/icon/free/png-256/hamburger-menu-462145.png'}}
                                    style={{ width: 30, height: 30 }}
                                  />
                                </TouchableOpacity>
                                <Text style={styles.listTitle_WanderLists}>Your Lists</Text>
                            </View>
                        <FlatList style={styles.list} data={this.state.listData} renderItem={(item) => renderItem(item, this.props.navigation, this)}/>
                        <TouchableOpacity
                            style={styles.addListButton}
                            onPress={() =>this.setListNameModalVisible(true)}>
                            <Text style={{color: '#fff'}}>New List</Text>
                        </TouchableOpacity>
                </View>
        );
    }
}

export default ListsView;
