import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, FlatList} from 'react-native';
import ListItem from './ListItem'
import styles from '../Styles/style.js'
import UserDataStore from '../UserDataStore/UserDataStore';

const renderItem = ({ item}, navigation) => (
    <ListItem title={item.title} navigation={navigation} redeemCode={item.redeemCode}/>
);

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            userName: "",
            userLocation: "",
            userLevel: "",
            userData: {
                name: "",
                id: -1,
                imageurl: " "
            }
        };
    }

    loadUserInfo(obj) {
        this.setState({
            userName: obj['name'],
            userLocation: obj['location'],
            userLevel: obj['rank'],
            profilePicURL: obj['imageurl']
        });
    }

    loadRewards(obj) {
        var listData = [];
        var i;
        for(i = 0; i < obj.length; i++) {
            listData.push({
                title: obj[i]['name'], 
                key: i.toString(), 
                redeemCode: "12345", 
                redeemed: obj[i]['redeemed']
            });
        }
        this.setState({listData: listData});
    }

    getUserDetails() {
        // need to update this to use an actual user_id
        fetch("https://deco3801-oblong.uqcloud.net/wanderlist/user/2")
        .then(response => response.json())
        .then(obj => this.loadUserInfo(obj));
    }

    getRewards() {
        fetch("https://deco3801-oblong.uqcloud.net/wanderlist/get_all_user_rewards/" + this.state.userData.id)
        .then(response => response.json())
        .then(obj => this.loadRewards(obj));
    }

    componentDidMount() {
        this.setState({userData: UserDataStore.getUserData()}, () => this.getRewards());
        this.getUserDetails();
    }

    render() {
        return (
            <View style={styles.container}>
             <View style={styles.header}>
                <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                  <Image
                    source={{uri:'https://cdn.iconscout.com/icon/free/png-256/hamburger-menu-462145.png'}}
                    style={{ width: 30, height: 30 }}
                  />
                </TouchableOpacity>
             </View>
                <View style={styles.nameBlock}>
                    <Image
                        source={{uri:this.state.userData.imageurl}}
                        style={styles.profileImage}
                    />
                    <Text style={styles.nameText}>
                        {this.state.userData.name}
                    </Text>
                    <Text style={styles.nameSubText}>
                        {this.state.userLocation}
                    </Text>
                </View>
                <View style={{marginTop: 'auto'}}>
                    <Text style={styles.listTitle}> Your Rewards </Text>
                    <FlatList style={{height: 300}} data={this.state.listData} renderItem={(item) => renderItem(item, this.props.navigation)}/>
                </View>
            </View>
        );
    }
}

export default Profile;
