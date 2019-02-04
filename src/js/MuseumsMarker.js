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
  onMarkerClick(e, key) {
    const openInfoWindow = this.state.openInfoWindow
    this.setState({
      openInfoWindow: !openInfoWindow,
      animation: 4
    })
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
      animateMarker.filter(m => m.id === this.props.id)
      .map(m => this.setState({
        openInfoWindow: !openInfoWindow,
        animation: 4
      }))
    }

    const marker = this.props.marker;

    return(
      <Marker
        autoFocus
        tabIndex="0"
        key={marker.title}
        className="museum-icon"
        title={marker.name}
        icon={this.state.imgSrc}
        alt="museum's icon"
        style={{width: 32, height: 41}}
        position={{lat: marker.location.lat, lng: marker.location.lng}}
        onClick={(e, key) => this.onMarkerClick(e, this.props.marker.id)}
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
