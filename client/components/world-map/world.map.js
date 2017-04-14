import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './world.map.sass';

const GoogleMapComponent = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: 0, lng: 0 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}
  </GoogleMap>
));

export default class WorldMap extends React.Component {
  render() {
    const markers = [];
    return (
      <GoogleMapComponent
        containerElement={
          <div className="map-container"/>
        }
        mapElement={
          <div className="map-element"/>
        }
        markers={markers}
      />
    );
  }
}
