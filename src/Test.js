import React from 'react';
import { Map, InfoWindow, Marker } from 'react-google-maps';

import './App.css';
//import Map from './js/Map';
import SlideMenu from './js/SlideMenu';
import ListError from './js/ListError';
import MapError from './js/MapError';
import escapeRegExp from 'escape-string-regexp';
import museumIcon from './images/map-icon-32.png';

class GoogleMapsContainer extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    museums: [],
    query: '',
    animateMarker: '',
    openMenu: false,
    hasError: false,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  }
  // Bind `this` to event-handler functions
  this.onHandleClick = this.onHandleClick.bind(this)
  this.showHide = this.showHide.bind(this)
  this.onMarkerClick = this.onMarkerClick.bind(this);
  this.onMapClick = this.onMapClick.bind(this);
  }

  componentDidMount() {
    // Fetch data from Foursquare
    fetch('https://api.foursquare.com/v2/venues/search?ll=51.718922,8.757509&categoryId=4bf58dd8d48988d181941735&client_id=LLJCIDDYXOKBAJ4AVOO5AEYPFW15KJ3OVUAWLKKCKDGWJDKI&client_secret=E35XKXD4EEL5QJIEOD5YEVBDBIHUWTCXWXLV1ZOE2CVVP3VT&v=20180323&radius=5000')
    .then(response => response.json())
    .then(data => this.setState({museums: data.response.venues}))
    .catch(error => this.setState({hasError: true}))
  }

  // This is for the <input class="museums-filter">
  updateQuery(query) {
    this.setState({query: query})
  }
  // This is for the <li class="museums-filter">
  // Set the query state to the value typed by the user
  onHandleClick(e, key) {
    let animateMarker = this.state.museums.filter(m => m.id === key)
    this.setState({
      animateMarker: animateMarker
    })
  }
  // This is for the hamburger menu
  // Open/close the navigation menu
  showHide() {
    const openMenu = this.state.openMenu;
    this.setState({
      openMenu: !openMenu
    })
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if(this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {
    // Filter the museum's markers
    let filteredMuseums;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      filteredMuseums = this.state.museums.filter((museum) => match.test(museum.name))
    } else {
      filteredMuseums = this.state.museums
    }

    // Apply style to navigation menu and the map to open or close the menu
    let openOrClose = "navToLeft";
    let leftOrRight = "mapToLeft"
    if (this.state.openMenu === true) {
      openOrClose = "navToRight";
      leftOrRight = "mapToRight";
    }
    let marker = this.props.marker;
    return(
      <MapError>
        <Map
          museums = { this.state.museums }
          filteredMuseums = { filteredMuseums }
          /*onHandleClick = { this.onHandleClick }*/
          onClick = { this.onMapClick }
          /*animateMarker = { this.state.animateMarker }*/
          /*defaultZoom = { 11 }*/
          /*defaultCenter = {{lat: 51.718922, lng: 8.757509}}*/
        >
          <Marker
            //key={ marker.title }
            className="museum-icon"
            icon={ museumIcon }
            position={{ lat: marker.location.lat, lng: marker.location.lng }}
            onClick = { this.onMarkerClick }
            /*animation={ this.state.animation}*/
            title = { marker.name }
          />
          <InfoWindow
            className ="info-window"
            marker = { this.state.activeMarker }
            visible = { this.state.showingInfoWindow }
          >
            <h3>{marker.name}</h3>
            <p>{marker.location.address}</p>
            <p>{marker.location.postalCode}</p>
            <p className="credits">Credits to
            <a href="https://foursquare.com"> Foursquare</a></p>
          </InfoWindow>
        </Map>
      </MapError>
    )
  }
}

export default GoogleMapsContainer;
