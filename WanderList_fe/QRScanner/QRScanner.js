import React, { Component } from 'react';
import UserDataStore from '../UserDataStore/UserDataStore';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View
} from 'react-native';

import ActivityCompleteModal from './ActivityCompleteModal';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import styles from '../Styles/style.js'

class QRScanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
          topText: "Scan Activity QR Code",
          activityCompleteModalVisible: false,
          completeMode: 0,
          reward: ""
        };
    }
  onSuccess = e => {
    if(!this.state.activityCompleteModalVisible) {
      this.checkActivityComplete(e.data);
    }
    
    //this.props.navigation.goBack();
  };

  setCompleteMode(response) {
    console.log(response.status);
    if(response.status == 500) { // invalid QR code
      this.setState({completeMode: 1});
    } else if(response.status == 200) {
      response.json()
      .then((data) => {
        if(data == "qr codes do not match") { // QR Code mismatch
          this.setState({completeMode: 2});
        } else if(data == "already completed") { // Activity already completed
          this.setState({completeMode: 3});
        }
      })
    } else if(response.status == 201) { // succesful completion
      response.json()
      .then((data) => {
        if(data != "-1") {
          this.setState({completeMode: 4, reward: data});
        } else {
          this.setState({completeMode: 4, reward: ""});
        }
      })
      
    }
  }

  checkActivityComplete(qrCode) {
    var userData = UserDataStore.getUserData();
    var bdy = JSON.stringify({
      "user_id": userData.id,
      "activity_id": this.props.route.params.activityID,
      "qr_code": qrCode,
      "bucketlist_id": this.props.route.params.bucketListID
  });
    var queryString = "https://deco3801-oblong.uqcloud.net/wanderlist/complete_activity/";
    fetch(queryString, {
        method: 'POST',
        body: bdy,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => this.setCompleteMode(response))
    .then(this.setModalVisible(true));
  }

  back() {
      this.props.navigation.goBack();
  }

  hideModal() {
    this.setState({activityCompleteModalVisible: false});
  }

  testingOpenRatingScreen() {
    this.setState({
      completeMode: 4,
      activityCompleteModalVisible: true
    })
  }

  setModalVisible = (visible) => {
    this.setState({activityCompleteModalVisible: visible});
}

  render() {
    return (
      <View style={{flex: 1}}>
        <ActivityCompleteModal 
            activityCompleteModalVisible={this.state.activityCompleteModalVisible} 
            completeMode={this.state.completeMode} 
            hideModalFunc={this.hideModal.bind(this)}
            navigation={this.props.navigation}
            reloadListDataFunc={this.props.route.params.reloadListsFunc}
            reward={this.state.reward}
            bucketListID={this.props.route.params.bucketListID}
            activityID={this.props.route.params.activityID}
        />
        <QRCodeScanner
          onRead={this.onSuccess}
          reactivate={true}
          reactivateTimeout={5000}
          flashMode={RNCamera.Constants.FlashMode.off}
          topContent={
            <Text style={styles.centerText}>
              {this.state.topText}
            </Text>
          }
          bottomContent={
            <View>
              <TouchableOpacity
              style={styles.goBackButton_QR}
              onPress={() =>this.back()}>
              <Text style={{color: '#000'}}>Back</Text>
            </TouchableOpacity>
            </View>
          }
          bottomViewStyle={styles.bottomContainer_QR}
        />
      </View>
    );
  }
}

export default QRScanner;
