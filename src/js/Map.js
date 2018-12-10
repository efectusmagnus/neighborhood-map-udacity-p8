import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

// See: https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb
class Map extends Component {
  render() {
    const GoogleMapExample = withGoogleMaps(props => (
      <GoogleMap
        defaultCenter = {{lat: 40.756795, lng: -73.954298}}
        defaultZoom = {13}
      >
      </GoogleMap>
    ))
    return(
      <div>
        <GoogleMapExample
          containerElement= {<div style={{height: `100vh`, width: `100vw`}}/>}
          mapElement={<div style={{height: `100%`}} />}
        />
      </div>
    );
  }
};

export default Map;
