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
class ListsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            listNameModalVisible: false,
            movedFromRoot: false,
            userData: {}
        }
    }

    loadLists(obj) {
        var listData = [];
        var i;
        for(i = 0; i < obj.length; i++) {
            listData.push({title: obj[i]['name'], activityCount: 0, key: obj[i]['id'].toString()})
        }
        
        this.setState({listData: listData});
    }

    queryLists() {
        fetch("https://deco3801-oblong.uqcloud.net/wanderlist/get_bucketlist_belonging_to_user/" + this.state.userData.id)
        .then(response => response.json())
        .then(obj => this.loadLists(obj));
    }
    componentDidMount() {
        const unsub = this.props.parentNav.addListener('focus', () => {
            if(this.state.movedFromRoot) {
                this.props.navigation.popToTop();
                this.props.navigation.navigate("AppContents", {screen: 'WanderLists', initial: false});
            }
        });
        this.setState({userData: UserDataStore.getUserData()}, () => this.queryLists());
    }

    hideModal() {
        this.setListNameModalVisible(false);
    }

    setListNameModalVisible = (visible) => {
        
        this.setState({listNameModalVisible: visible});
    }

    render() {
        const {listNameModalVisible} = this.state;
        return (
                <View style={styles.container}>
                        <AddListModal queryLists={this.queryLists.bind(this)} listNameModalVisible={this.state.listNameModalVisible} hideModalFunc={this.hideModal.bind(this)}/>
                            <View style={styles.header}>
                                <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                                  <Image
                                    source={{uri:'https://cdn.iconscout.com/icon/free/png-256/hamburger-menu-462145.png'}}
                                    style={{ width: 30, height: 30 }}
                                  />
                                </TouchableOpacity>
                                <Text style={styles.listTitle_WanderLists}>Your Lists {this.state.userData.name}</Text>
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
