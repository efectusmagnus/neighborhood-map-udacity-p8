import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import MuseumsMarker from './MuseumsMarker';
//import axios from 'axios';
// See: https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb
class Map extends Component {
  constructor(props) {
    super(props)
      this.state = {
        museums: []
      }
  }

  render() {
    let animateMarker = this.props.animateMarker;
    // Generate map from react-google-maps
    const MyMap = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = {{lat: 51.718922, lng: 8.757509}}
        defaultZoom = {15}
        onTilesloaded={() =>
          // Add title to iframe
          (document.getElementsByTagName('iframe')[0].title = 'GoogleMaps')
        }
      >
      {this.props.filteredMuseums && this.props.filteredMuseums.map(marker => (
        <MuseumsMarker
          marker={marker}
          key={marker.id}
          animateMarker={animateMarker}
          hasError={this.props.hasError}
        />
      ))}
      </GoogleMap>
    ))
    return(
      <div>
        <MyMap
          containerElement= {<div className="container-element" />}
          mapElement={
           <div className="map-element">
            <iframe
              src="https://www.google.com/maps/embed/v3/place?key=AIzaSyBnR461-IpsYquMTh4jytwZceXMQrbHVeY"
              title="Google Maps" className="my-frame" />
           </div>
          }
        />
      </div>
    );
  }
};

export default Map;
