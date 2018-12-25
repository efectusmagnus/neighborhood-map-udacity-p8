import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import MuseumsPopup from './MuseumsPopup';
import museumIcon from '../images/map-icon-32.png';

class MuseumsMarker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      //infoWindowOpen: false,
      animation: '',
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    //this.handleClick = this.handleClick.bind(this)
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      //activeMarker: marker,
      showingInfoWindow: true
    });
  }
  handleClick(e, key) {
    let markerClick = e;
    let infoWindowOpen = this.state.infoWindowOpen;
    this.setState({
      infoWindowOpen: !infoWindowOpen
    })
  }
  render() {
    let infoWindowOpen = this.state.infoWindowOpen;
    let animateMarker = this.props.animateMarker;
    let animation = this.state.animation;
    if (animateMarker && infoWindowOpen === false) {
      animateMarker.map(m => {
        if (m.id === this.props.id) {
          this.setState({
            infoWindowOpen: !infoWindowOpen,
            animation: 4,
          })
        }
      })

    }
    let marker = this.props.marker;
    /*if (this.props.animateMarker.id === marker.id) {

    }*/
    return(
      <Marker
        key={marker.title}
        className="museum-icon"
        title={marker.name}
        icon={museumIcon}
        position={{lat: marker.location.lat, lng: marker.location.lng}}
        //onClick={this.onMarkerClick}
        onClick={(e, key) => this.handleClick(e, this.props.marker.id)}
        animation={this.state.animation}
      >
        <React.Fragment>
          {this.state.infoWindowOpen === true && (
            <React.Fragment>{
              this.props.hasError === false && (
              <MuseumsPopup marker={marker} />)
            }</React.Fragment>
          )}
        </React.Fragment>
      </Marker>
    )
  }
}
/*class MuseumsMarker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      //infoWindowOpen: false,
      animation: '',
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    //this.handleClick = this.handleClick.bind(this)
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      //activeMarker: marker,
      showingInfoWindow: true
    });
  }
  handleClick(e, key) {
    let markerClick = e;
    let infoWindowOpen = this.state.infoWindowOpen;
    this.setState({
      infoWindowOpen: !infoWindowOpen
    })
  }
  render() {
    let infoWindowOpen = this.state.infoWindowOpen;
    let animateMarker = this.props.animateMarker;
    let animation = this.state.animation;
    if (animateMarker && infoWindowOpen === false) {
      animateMarker.map(m => {
        if (m.id === this.props.id) {
          this.setState({
            infoWindowOpen: !infoWindowOpen,
            animation: 4,
          })
        }
      })

    }
    let marker = this.props.marker;
    if (this.props.animateMarker.id === marker.id) {

    }
    return(
      <Marker
        key={marker.title}
        className="museum-icon"
        title={marker.name}
        icon={museumIcon}
        position={{lat: marker.location.lat, lng: marker.location.lng}}
        //onClick={this.onMarkerClick}
        onClick={(e, key) => this.handleClick(e, this.props.marker.id)}
        animation={this.state.animation}
      >
        <React.Fragment>
          {this.state.infoWindowOpen === true && (
            <React.Fragment>{
              this.props.hasError === false && (
              <MuseumsPopup marker={marker} />)
            }</React.Fragment>
          )}
        </React.Fragment>
      </Marker>
    )
  }
}*/
export default MuseumsMarker;
