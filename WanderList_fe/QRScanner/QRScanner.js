import React, { Component } from 'react';

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
          completeMode: 0
        };
    }
  onSuccess = e => {
    this.checkActivityComplete(e.data);
    //this.props.navigation.goBack();
  };

  setCompleteMode(response) {
    if(response.status == 500) { // invalid QR code
      this.setState({completeMode: 1});
    } else if(response.status == 200) {
      response.json()
      .then((data) => {
        if(data == "qr codes do not match") { // QR Code mismatch
          this.setState({completeMode: 2});
        } else if(data == "already completed") { // Activity already completed
          this.setState({completeMode: 3});
        } else { // Activity successfully completed
          this.setState({completeMode: 4});
        }
      })
      console.log("Complete mode: " + this.state.completeMode);
    }
  }

  checkActivityComplete(qrCode) {
    var bdy = JSON.stringify({
      "user_id": 1,
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
        <ActivityCompleteModal activityCompleteModalVisible={this.state.activityCompleteModalVisible} completeMode={this.state.completeMode} hideModalFunc={this.hideModal.bind(this)}/>
        <QRCodeScanner
          onRead={this.onSuccess}
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
                  onPress={() =>this.testingOpenRatingScreen()}>
                  <Text style={{color: '#000'}}>Back</Text>
              </TouchableOpacity>
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
