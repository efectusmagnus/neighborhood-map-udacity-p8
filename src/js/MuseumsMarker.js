import React, { Component } from 'react'
import { Marker } from 'react-google-maps'
import MuseumsPopup from './MuseumsPopup'
import museumIcon from '../images/map-icon-32.png'

class MuseumsMarker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: false,
      animation: '',
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }
  onMarkerClick = (e, key) => {
    const openInfoWindow = this.state.openInfoWindow
    this.setState({
      showingInfoWindow: !showingInfoWindow
    });
  }

  render() {
    const openInfoWindow = this.state.openInfoWindow
    const animateMarker = this.props.animateMarker
    const animation = this.state.animation
    if (animateMarker && infoWindowOpen === false) {
      animateMarker.map(m => {
        if (m.id === this.props.id) {
          this.setState({
            openInfoWindow: !openInfoWindow,
            animation: 4,
          })
        }
      })

    }
    const marker = this.props.marker;

    return(
      <Marker
        key={marker.title}
        className="museum-icon"
        title={marker.name}
        icon={museumIcon}
        position={{lat: marker.location.lat, lng: marker.location.lng}}
        //onClick={this.onMarkerClick}
        onClick={(e, key) => this.onMarkerClick(e, this.props.marker.id)}
        animation={this.state.animation}
      >
        <React.Fragment>
          {this.state.openInfoWindow === true && (
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

export default MuseumsMarker;
