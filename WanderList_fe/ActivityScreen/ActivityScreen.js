import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, FlatList, Dimensions} from 'react-native';
import AddToBucketListModal, {AddToBucketList} from './AddToBucketListModal';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addListButton: {
    alignItems: 'center',
    backgroundColor: '#196DFF',
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    padding: 12,
    width: 100,
    marginLeft: 'auto',
    marginRight: 20
  },
  addToWL: {
      alignItems: 'center',
      padding: 10,
      marginBottom: 10,
      padding: 12,
      width: 150,
      marginLeft: 20,
      backgroundColor: '#fff',
      borderColor: '#000',
      borderWidth: 1,
      borderRadius: 3,
  },
  textField: {
      fontSize: 20,
  },
  titlePanel: {
      marginBottom: 30,
      marginTop: 15,
      marginLeft: 20,
      marginRight: 20
  },
  activityTitle: {
      fontSize: 40,
      fontWeight: "700",
      marginBottom: 5
  },
  mainImage: {
      width: width,
      height: width * (880/1550)
  },
  subtitle: {
      flexDirection: 'row',
  },
  descriptionPane: {
      padding: 20
  },
  buttonPane:{
      marginTop: 'auto',
      marginBottom: 10,
      flexDirection: 'row'
  }
});

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
                website: ""
            },
            listNameModalVisible: false,
        }
    }

    loadActivityData(obj) {
        console.log("OBJECT: ")
        console.log(obj);
        var activityDetails = {};
        activityDetails['name'] = obj['title'];
        activityDetails['description'] = obj['description'];
        activityDetails['points'] = obj['points'];
        activityDetails['website'] = obj['website'];
        console.log(activityDetails);
        this.setState({loading: false, activityDetails: activityDetails});
         
    }

    openQRScanner() {
        this.props.navigation.navigate("qrScanner");
    }

    hideModal() {
        this.setListNameModalVisible(false);
    }

    setListNameModalVisible = (visible) => {
        this.setState({listNameModalVisible: visible});
    }

    //loads in the activity data from the backend
    componentDidMount() {
        console.log("Loading activity: " + this.props.route.params.activityID)
        //previous route gives and activity id, retrieve from server
        let url = "https://deco3801-oblong.uqcloud.net/wanderlist/activity/" + this.props.route.params.activityID
        fetch(url, {method: "GET"})
        .then(response => response.json())
        .then(object => {this.loadActivityData(object)});
    }

    render() {
        return (
            <View style={styles.container}>
                <AddToBucketListModal listNameModalVisible={this.state.listNameModalVisible} hideModalFunc={this.hideModal.bind(this)}/>
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
                        style={styles.addToWL}
                        onPress={() =>this.setListNameModalVisible(true)}>
                        <Text style={{color: '#000'}}>Add to WanderList</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.addListButton}
                        onPress={() =>this.openQRScanner()}>
                        <Text style={{color: '#fff'}}>Complete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default ActivityScreen;
