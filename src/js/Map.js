import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import axios from 'axios';
// See: https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb
class Map extends Component {
  state = {
    venues: []
  }
  componentDidMount() {
    this.getVenues()
  }

  //windowInitMap = this.initMap
  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "LLJCIDDYXOKBAJ4AVOO5AEYPFW15KJ3OVUAWLKKCKDGWJDKI",
      client_secret: "E35XKXD4EEL5QJIEOD5YEVBDBIHUWTCXWXLV1ZOE2CVVP3VT",
      query: "arts",
      near: "Paderborn",
      v: "20180323"
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
    const infowindow = new window.google.maps.infowindow()
    this.state.venues.map(myVenue => {
      const contentString = `${myVenue.venue.name}`
      const marker = new window.google.maps.Marker({
        position: {
          lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng
        },
        title: myVenue.venue.name
      })
      marker.addEventListener('click', function() {
        infowindow.setContent(contentString)
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
};

export default Map;
