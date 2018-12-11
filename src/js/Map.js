import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

// See: https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb
class Map extends Component {
  render() {
    const MyMap = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = {{lat: 51.718922, lng: 8.757509}}
        defaultZoom = {13}
      >
      </GoogleMap>
    ))
    return(
      <div>
        <MyMap
          containerElement= {<div style={{height: `80vh`, width: `99vw`}}/>}
          mapElement={<div style={{height: `100%`}} />}
        />
      </div>
    );
  }
};

export default Map;
