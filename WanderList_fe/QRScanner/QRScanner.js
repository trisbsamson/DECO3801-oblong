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
    this.setState({topText: "QR Scanned: " + e.data});
  };

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
/*
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    marginTop: 30
  },
  buttonTouchable: {
    padding: 16,
    alignItems: 'center'
    },
    goBackButton: {
        alignItems: 'center',
        padding: 12,
        width: 120,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 3,
        marginTop: 'auto',
        marginBottom: 10,
        marginLeft: 10,
    },
    bottomContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    }
});*/

export default QRScanner;
