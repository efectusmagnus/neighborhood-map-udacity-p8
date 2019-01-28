import React from 'react'
import { InfoWindow } from 'react-google-maps'

function MuseumsPopup(props) {
  const marker = props.marker;

  return(

    <InfoWindow
      role="dialog"
      tabIndex="0"
    >
      <div className="popup-decoration">
        <h3
          className="popup-title"
          tabIndex="0">
          {marker.name ?
            marker.name : "no place's name available "}
        </h3>
        <p
          className="popup-text"
          tabIndex="0">
          {marker.location.address ?
            marker.location.address + ', ': 'no address available, '}
        </p>
        <p
          className="popup-text"
          tabIndex="0">
          {marker.location.postalCode ?
            marker.location.postalCode + '. ': 'no postal code available. '}
        </p>
        <p
          tabIndex="0"
          className="credits">Credits to
          <a href="https://foursquare.com"> Foursquare</a>
        </p>
      </div>
    </InfoWindow>
  )
}

export default MuseumsPopup
