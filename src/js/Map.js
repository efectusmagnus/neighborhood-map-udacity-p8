import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
//import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import MuseumsMarker from './MuseumsMarker';
//import axios from 'axios';
// See: https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb
class Map extends Component {
  /*state = {
    venues: []

  }
  componentDidMount() {
    this.getVenues()
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "LLJCIDDYXOKBAJ4AVOO5AEYPFW15KJ3OVUAWLKKCKDGWJDKI",
      client_secret: "E35XKXD4EEL5QJIEOD5YEVBDBIHUWTCXWXLV1ZOE2CVVP3VT",
      query: "arts",
      near: "Paderborn",
      v: "20180323",
      photo_id: ""
    }
    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      this.setState({
        venues: response.data.response.groups[0].items
      })
      .catch(error => {
        console.log("ERROR!" + error)
      })
    })
  }
  initMap = () => {
    // Create an infowindow
    const infowindow = new window.google.maps.infowindow()
    // Display dynamic markers
    this.state.venues.map(myVenue => {
      const contentString = `${myVenue.venue.name}`
      // Create a marker
      const marker = new window.google.maps.Marker({
        position: {
          lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng
        },
        title: myVenue.venue.name
      })
      // Click on a marker
      marker.addEventListener('click', function() {
        // Change the content of the infowindow
        infowindow.setContent(contentString)
        // Open an infowindow
        infowindow.open(marker)
      })
    })
  }
  render() {
    const MyMap = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = {{lat: 51.718922, lng: 8.757509}}
        defaultZoom = {16}
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
};*/
  render() {
    let animateMarker = this.props.animateMarker;
    // Generate map from react-google-maps
    const MyMap = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = {{lat: 51.718922, lng: 8.757509}}
        defaultZoom = {16}
        /*onTilesLoaded={() =>
          // Add title to iframe
          (document.getElementByTagName('iframe')[0].title = 'GoogleMaps')
        }*/
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
          mapElement={<div style={{height: `100%`}} />}
        />
      </div>
    );
  }
};

export default Map;
