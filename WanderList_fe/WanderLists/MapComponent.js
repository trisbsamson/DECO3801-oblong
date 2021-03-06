import React, {Component} from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import styles from '../Styles/style.js'

const { width, height } = Dimensions.get('window');

// constant values to place the map in the screen and figure out extents.
const ASPECT_RATIO = width / height;
const LATITUDE = -27.497284;
const LONGITUDE = 153.011932;
const LATITUDE_DELTA = 0.01567;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

/**
 * Component which renders the Map visible on each WanderList view page. Shows the location of each activity on the map.
 * Uses the Google Maps API and react-native-maps library
 */
class MapComponent extends Component {
  // main component constructor function - instantiates state variables
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }

  // render method - returns JSX components to render to DOM
  render() {
    return (
      <View style={styles.mapContainer}>
          <MapView
            provider={this.props.provider}
            style={styles.mapActivity}
            scrollEnabled={true}
            zoomEnabled={true}
            pitchEnabled={false}
            rotateEnabled={false}
            initialRegion={this.state.region}
          >
            {this.props.incompleteListData.map((item, i) => {
                return (<Marker
                        key={item['key']}
                        title={item['title']}
                        description={item['subtitle']}
                        coordinate={{latitude: item['lat'], longitude: item['long']}}/>)
            })}
            {this.props.completedListData.map((item, i) => {
                return (<Marker
                        key={item['key']}
                        title={item['title']}
                        description={item['subtitle']}
                        coordinate={{latitude: item['lat'], longitude: item['long']}}
                        pinColor={'navy'}/>)
            })}
          </MapView>
      </View>
    );
  }
}

MapComponent.propTypes = {
  provider: ProviderPropType,
};

export default MapComponent;
