import React from 'react'
import { InfoWindow } from 'react-google-maps'

function MuseumsPopup(props) {
  let marker = props.marker;
  let image = marker.categories[0].icon.prefix;
  return(
    <InfoWindow>
      <div className="popup-decoration">
      <h3>{marker.name}</h3>
      <p>{marker.location.address}</p>
      <p>{marker.location.postalCode}</p>
      <p className="credits">Credits to
      <a href="https://foursquare.com"> Foursquare</a></p>
    </InfoWindow>
  )
}

export default MuseumsPopup;
