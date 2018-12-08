import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // The `renderMap` loads the script
  renderMap = () => {
    loadScript("htpps://maps.googleapis.com/maps/api/js?key=MY-API-KEY&callback=initMap")
  }
  initMap = () => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -37.397, lng: 150.644},
      zoom: 8
    });
  }

  render() {
    return(
      <main>
        <div id="map"></div>
      </main>
    )
  }
}
// Use the loadScript function by passing a parameter to it

/**
Create a function called loadScript so that we can write a function using the
`function` keyword without any problems.
This `function` will take a parameter called the `url`
The below function is the same as:
`<script
  src="htpps://maps.googleapis.com/maps/api/js?key=MY-API-KEY&callback=initMap"
  async defer></script>`
 We are accessing the properties of our tags and gives them another value
*/
function loadScript(url) {
  // Select the first tag
  const index = window.document.getElementByTagName('script')[0]
  // Create the script tag
  const script = window.document.createElement('script')
  script.src = url
  script.async = true
  script.defer = true
  // Instead of appendChild, we use insertBefore, so that we select the index or
  // the reference or the first script tag(`script: newNode` and `index: referenceNode`).
  index.parentNode.insertBefore(script, index)
}

export default App;
