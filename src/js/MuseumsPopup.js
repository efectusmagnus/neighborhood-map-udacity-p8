import React, { Component } from 'react';
import { InfoWindow} from 'react-google-maps';

function MuseumsPopup(props) {
  let marker = props.marker
  let image = marker.categories[0].icon.prefix
  return(
    <InfoWindow>
      <h3>{marker.name}</h3>
      <p>{marker.location.address}</p>
      <p>{marker.location.postalCode}</p>
      <p className="credits">Credits to
      <a href="https://foursquare.com"> Foursquare</a></p>
      <img alt={marker.name} src={(marker.categories[0].icon.prefix.prefix) + (marker.id)+(marker.categories[0].icon.sufix)} />
    </InfoWindow>
  )
}

export default MuseumsPopup;
