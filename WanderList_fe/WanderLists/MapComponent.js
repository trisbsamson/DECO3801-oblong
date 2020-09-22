import React, {Component} from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = -27.497284;
const LONGITUDE = 153.011932;
const LATITUDE_DELTA = 0.01567;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class MapComponent extends Component {
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

  render() {
    return (
      <View style={styles.container}>
          <MapView
            provider={this.props.provider}
            style={styles.map}
            scrollEnabled={true}
            zoomEnabled={true}
            pitchEnabled={false}
            rotateEnabled={false}
            initialRegion={this.state.region}
          >
            {this.props.incompleteListData.map((item, i) => {
                return (<Marker
                        key={item['id']}
                        title={item['title']}
                        description={item['subtitle']}
                        coordinate={{latitude: item['lat'], longitude: item['long']}}/>)
            })}
            {this.props.completedListData.map((item, i) => {
                return (<Marker
                        key={item['id']}
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  scrollview: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  map: {
    width: width,
    height: 300,
  },
});

export default MapComponent;
