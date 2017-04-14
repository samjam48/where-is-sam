import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { connect } from 'react-redux';
import _ from 'lodash';
import './world.map.sass';

const GoogleMapComponent = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: 30, lng: 0 }}
    onClick={props.onMapClick} >

    {props.markers.map((marker, index) => (
      <Marker onRightClick={() => props.onMarkerRightClick(index)}
        {...marker}
      />
    ))}
  </GoogleMap>
));

class WorldMap extends React.Component {
  mapIcon(index) {
    if (index === this.props.itinerary.length - 1) {
      // http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png
      return 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png';
    }

    return 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
  }

  render() {
    const markers = this.props.itinerary.map((x, i) => ({
      position: {
        lat: x.lat,
        lng: x.lng,
      },
      icon: this.mapIcon(i),
      key: 'marker-' + i,
    }));

    return (
      <GoogleMapComponent
        containerElement={ <div className="map-container"/> }
        mapElement={ <div className="map-element"/> }
        markers={markers}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itinerary: state.map.get('itinerary').toArray(),
  };
};

const mapDispatchToProps = (dispatch) => {
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorldMap);
