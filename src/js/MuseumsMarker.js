import React, { Component } from 'react';
import { Marker } from 'react-google-maps';
import MuseumsPopup from './MuseumsPopup';
import museumIcon from '../images/map-icon-32.png';

export default class MuseumsMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoWindowIsOpen: false,
      animation: ""
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e, key) {
    let markerClick = e;
    let infoWindowIsOpen = this.infoWindowIsOpen;
    this.setState({
      infoWindowIsOpen: !infoWindowIsOpen
    })
  }
  render() {
    let infoWindowIsOpen = this.state.infoWindowIsOpen;
    let animateMarker = this.props.animateMarker;
    let animation = this.state.animation;
    if (animateMarker && infoWindowIsOpen === false) {
      animateMarker.map(m => {
        if (m.id === this.props.id) {
          this.setState({
            infoWindowIsOpen: !infoWindowIsOpen,
            animation: 4
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
        icon={museumIcon}
        position={{lat: marker.location.lat, lng: marker.location.lng}}
        animation={this.state.animation}
      >
        <React.Fragment>
          {this.state.infoWindowIsOpen === true && (
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
