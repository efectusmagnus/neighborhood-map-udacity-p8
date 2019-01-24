import React, { Component } from 'react'
import { Marker } from 'react-google-maps'
import MuseumsPopup from './MuseumsPopup'
import museumsIcon from '../images/museums-icon_v8.png'
import mouseOverIcon from '../images/museums-icon-mouse-over_v8.png'

class MuseumsMarker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openInfoWindow: false,
      animation: '',
      imgSrc: museumsIcon
    }
    //Bind `this` to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMarkerMouseOver = this.onMarkerMouseOver.bind(this);
    this.onMarkerMouseOut = this.onMarkerMouseOut.bind(this);
  }
  // Open the InfoWindow with a click on the Marker
  onMarkerClick() {
    const openInfoWindow = this.state.openInfoWindow

    this.setState({
      openInfoWindow: !openInfoWindow
    });
  }
  // Inspiration of mouse over effect from:
  // http://blog.sodhanalibrary.com/2016/07/change-image-source-on-mouse-hover.html#.XEjnD817ncs
  // Show orange icon when mouse over
  onMarkerMouseOver() {
      this.setState({
        imgSrc: mouseOverIcon
      });
  }
  // Show black icon when mouse out
  onMarkerMouseOut() {
    this.setState({
      imgSrc: museumsIcon
    });
  }

  render() {
    const openInfoWindow = this.state.openInfoWindow
    const animateMarker = this.props.animateMarker

    if (animateMarker && openInfoWindow === false) {
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
        icon={this.state.imgSrc}
        style={{'height': "20em"}}
        position={{lat: marker.location.lat, lng: marker.location.lng}}
        onClick={this.onMarkerClick}
        onMouseOver={this.onMarkerMouseOver}
        onMouseOut={this.onMarkerMouseOut}
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
