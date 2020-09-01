import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, FlatList} from 'react-native';
import ListItem from './ListItem'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameBlock: {
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 30
  },
  listTitle: {
    fontSize: 18,
    margin: 10,
    fontWeight: "700"
  },
  rankBlock:{
      marginBottom: 30,
      alignItems: 'center'
  },
  profileImage: {
      width: 120,
      height: 120,
      borderRadius: 120/ 2,
      marginBottom: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  nameText: {
      fontSize: 30,
  },
  nameSubText: {
      fontSize: 15
  }
})

const renderItem = ({ item}, navigation) => (
    <ListItem title={item.title} navigation={navigation} redeemCode={item.redeemCode}/>
);

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [
                {title: "UQ Lakes Boat Ride", key: "a", redeemCode: "204195"},
                {title: "Free Burger @ Burger Urge", key: "b", redeemCode: "105124"},
                {title: "$10 Jug at Redroom", key: "c", redeemCode: "420385"},
                {title: "Half-price Tickets at Schonell Theatre", key: "d", redeemCode: "350382"},
                {title: "Free Burger @ Burger Urge", key: "e", redeemCode: "230495"},
                {title: "A third activity", key: "f", redeemCode: "583739"}
            ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.nameBlock}>
                    <Image
                        source={require('../Images/profile_placeholder.jpg')}
                        style={styles.profileImage}
                    />
                    <Text style={styles.nameText}>
                        John Doe
                    </Text>
                    <Text style={styles.nameSubText}>
                        St Lucia, QLD
                    </Text>
                </View>
                <View style={styles.rankBlock}>
                    <Text>
                        Level 1
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
