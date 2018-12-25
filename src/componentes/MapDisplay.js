import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'
import NoMapDisplay from './NoMapDisplay'
const MAP_KEY ="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnR461-IpsYquMTh4jytwZceXMQrbHVeY"
const FS_CLIENT = "blabla";
const FS_SECRET = "blabla2";
const FS_VERSION = "2018blabla";
class MapDisplay extends Component {
  state = {
    map: null,
    markers: [],
    markerProps: null,
    activeMarker: null,
    activeMarkerProps: null,
    showingInfoWindow: false
  }
  componentDidMount = () => {
    /*this.setState({
      ...this.state.filterLocations(this.state.all, "")
  });*/
}
componentWillReceiveProps = (props) => {
  this.setState({firstDrop: false})

  // Change in the number of locations, so update the markers
  if (this.state.markers.length !== props.locations.length) {
    this.closeInfoWindow()
    this.updateMarkers(props.locations)
    this.setState({activeMarker: null})

    return;
  }

  // The selected item is not the same as the active marker, so close the info window
  if (!props.selectedIndex || (this.state.activeMarker &&
    (this.state.markers[props.selectedIndex] !== this.state.activeMarker))) {
      this.closeInfoWindow()
    }
  // Make sure there is a selected index
  if (props.selectedIndex === null || typeof(props.selectedIndex) === "undefined") {
    return;
  }
  // Treat the marker as clicked
  this.onMarkerClick(this.state.markerProps[props.selectedIndex], this.state.markers[props])
}
mapReady = (props, map) => {
  // Save the map reference in state and prepare this location markers
  this.setState({map})
  this.updateMarkers(this.props.locations)
}
closeInfoWindow = () => {
  // Display any active marker animation
  this.state.activeMarker && this
  .state
  .activeMarker
  .setAnimation(null)
  this.setState({
    showingInfoWindow: false,
    activeMarker: null,
    activeMarkerProps: null
  })
}
updateMarkers = (locations) => {
  // If all locations have been filtered, then we're done
  if (!locations) {
    return;
    // For any existing markers remove them from the map
    this.state.markers.forEach(marker.setMap(null))
  }
  // Iterate over the locations to create parallel references to marker properties
  // and the markers themselves that can be used for reference in interactions.
  // Add the markers to the map along the way
  let markerProps = [];
  let markers = locations.map((location, index) => {
    let mProps = {
      key: index,
      index: index,
      name: location.name,
      position: location.pos,
      url: location.url
    };
    markerProps.push(mProps);
    let animation = this.props.google.maps.Animation.DROP;
    let marker = new this.props.google.maps.Marker({
      position: location.pos,
      map: this.state.map,
      animation: animation
    });
    marker.addListener('click', () => {
      this.onMarkerClick(mProps, marker, null)
    });
    return marker;
  })
  this.setState({markers, markerProps})
}
  render() => {
    const style={
      width: '100%',
      height: '100%'
    }
    const center={
      lat: this.props.lat,
      lng: this.props.lon
    }
    return(
      <Map
        role="application"
        aria-label="map"
        onReady={this.mapReady}
        google={this.props.google}
        zoom="this.props.zoom"
        style={style}
        initilCenter={center}
      </Map>
    )
  }
}

export default GoogleApiWrapper({apikey: MAP_KEY})(MapDisplay)
