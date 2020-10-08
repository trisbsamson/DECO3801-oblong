import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, FlatList, Dimensions} from 'react-native';
import styles from '../style/style.js'

const { width, height } = Dimensions.get('window');

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   addListButton: {
//     alignItems: 'center',
//     backgroundColor: '#196DFF',
//     padding: 10,
//     borderRadius: 4,
//     marginBottom: 10,
//     padding: 12,
//     width: 100,
//     marginLeft: 'auto',
//     marginRight: 20
//   },
//   gotoWebsiteButton: {
//       alignItems: 'center',
//       padding: 10,
//       marginBottom: 10,
//       padding: 12,
//       width: 120,
//       marginLeft: 20,
//       backgroundColor: '#fff',
//       borderColor: '#000',
//       borderWidth: 1,
//       borderRadius: 3,
//   },
//   textField: {
//       fontSize: 20,
//   },
//   titlePanel: {
//       marginBottom: 30,
//       marginTop: 15,
//       marginLeft: 20,
//       marginRight: 20
//   },
//   activityTitle: {
//       fontSize: 40,
//       fontWeight: "700",
//       marginBottom: 5
//   },
//   mainImage: {
//       width: width,
//       height: width * (880/1550)
//   },
//   subtitle: {
//       flexDirection: 'row',
//   },
//   descriptionPane: {
//       padding: 20
//   },
//   buttonPane:{
//       marginTop: 'auto',
//       marginBottom: 10,
//       flexDirection: 'row'
//   }
// });

class ActivityScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            listTitle: props.route.params.listTitle,
            listData: [],
            listID: props.route.params.listID,
            activityDetails: {
                name: "",
                description: "",
                points: 0,
                website: "",
                id: ""
            }
        }
    }

    loadActivityData(obj) {
        
        var activityDetails = {};
        activityDetails['id'] = obj[0]['id'];
        activityDetails['name'] = obj[0]['title'];
        activityDetails['description'] = obj[0]['description'];
        activityDetails['points'] = obj[0]['points'];
        activityDetails['website'] = obj[0]['website'];
        console.log(activityDetails);
        this.setState({loading: false, activityDetails: activityDetails});
         
    }

    changeScreen() {
        console.log(this.state.activityDetails)
        this.props.navigation.navigate('addToList', {
            activityID: this.state.activityDetails["id"]
        });

        
      }

    //loads in the activity data from the backend
    componentDidMount() {
        //previous route gives and activity id, retrieve from server
        let url = "https://deco3801-oblong.uqcloud.net/wanderlist/get_activity/" + this.props.route.params.activityID
        fetch(url)
        .then(response => response.json())
        .then(object => {this.loadActivityData(object)});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titlePanel}>
                    <Text style={styles.activityTitle}>{this.state.activityDetails.name}</Text>
                    <View style={styles.subtitle}>
                        <Text style={{fontSize: 16}}> {this.state.activityDetails.points} Points </Text>
                    </View>
                </View>
                <Image
                    source={require('../Images/uq_centre_temp.jpg')}
                    style={styles.mainImage}
                />
                <View style={styles.descriptionPane}>
                    <Text style={{fontSize: 16}}>{this.state.activityDetails.description}</Text>
                </View>
                <View style={styles.buttonPane}>
                    <TouchableOpacity
                        style={styles.gotoWebsiteButton}
                        onPress={() =>this.setListNameModalVisible(true)}>
                        <Text style={{color: '#000'}}>Go To Website</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.addListButton}
                        onPress={() =>this.changeScreen()}>
                        <Text style={{color: '#fff'}}>Add to LIst</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default ActivityScreen;
