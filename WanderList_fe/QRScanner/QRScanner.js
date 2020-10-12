import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import styles from '../Styles/style.js'

class QRScanner extends Component {
    constructor(props) {
        super(props);
        this.state = {topText: "Scan Activity QR Code"};
    }
  onSuccess = e => {
    this.checkActivityComplete(e.data);
  };

  checkActivityComplete(qrCode) {
    var queryString = "https://deco3801-oblong.uqcloud.net/wanderlist/complete_activity/";
    fetch(queryString, {
        method: 'POST',
        body: JSON.stringify({
            "user_id": 1,
            "activity_id": this.props.route.activityID,
            "qr_code": qrCode
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => console.log("Response: " + response.status));

  }

  back() {
      this.props.navigation.goBack();
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.off}
        topContent={
          <Text style={styles.centerText}>
            {this.state.topText}
          </Text>
        }
        bottomContent={
            <TouchableOpacity
                style={styles.goBackButton}
                onPress={() =>this.back()}>
                <Text style={{color: '#000'}}>Back</Text>
            </TouchableOpacity>
        }
        bottomViewStyle={styles.bottomContainer}
      />
    );
  }
}

export default QRScanner;
