import React from 'react'
import {
  GoogleApiWrapper,
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Map,
  Marker
} from 'react-google-maps'
import museumIcon from '../images/map-icon-32.png'

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
      }
      // Bind this event-handler functions
      this.onMarkerClick = this.onMarkerClick.bind(this)
      this.onMapClick = this.onMapClick.bind(this)
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
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
          <Marker
            className="museum-icon"
            //key={ marker.title }
            key={marker.id}
            title={marker.name}
            icon={ museumIcon }
            onClick={ this.onMarkerClick }
            position={{lat: marker.location.lat, lng: marker.location.lng}}
            marker={marker}
            //animateMarker={animateMarker}
            //animation={this.state.animation}
            hasError={this.props.hasError}
          />
        ))}
        <InfoWindow
          marker={ this.state.activeMarker }
          visible={ this.state.showingInfoWindow }
        >
        </InfoWindow>
      </GoogleMap>
    ))
    return(
      <div>
        <MyMap
          containerElement= {<div className="container-element" />}
          mapElement={
           <div className="map-element">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBnR461-IpsYquMTh4jytwZceXMQrbHVeY"
              title="Google Maps" className="my-frame" />
           </div>
          }
        />
      </div>
    );
  }
}

export default GoogleMapsContainer
