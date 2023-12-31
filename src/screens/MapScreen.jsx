import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';


export const MapScreen = () => {
  const {params: {coords, locationDescription}} = useRoute();
  const {latitude, longitude}=coords;

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        minZoomLevel={15}

      >
        <Marker
          title="Here"
          coordinate={{
            latitude,
            longitude,
          }}
       
          description={locationDescription}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});


export default MapScreen;