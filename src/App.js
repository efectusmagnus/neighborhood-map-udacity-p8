import React, { Component } from 'react';
import ReactDOM from 'react-dom'
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    // this.getVenues()
    this.renderMap()
  }
  // The `renderMap` loads the script
  renderMap = () => {
    loadScript("htpps://maps.googleapis.com/maps/api/js?key=AIzaSyBnR461-IpsYquMTh4jytwZceXMQrbHVeY&callback=initMap")
    window.initMap = this.initMap
  }
/*
  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore"
    const parameters = {
      client_id: "",
      client_secret: "",
      query: "food",
      near: "Sydney"
    }
    axios.get(endPoint + new URLSearchParams(parameters))
     .then(response => {
       console.log(response)
     })
     .catch(error => {
       console.log("ERROR! " + error)
     })
  }*/
  initMap = () => {
    // Define google though the window
    const map = new window.google.maps.Map(document.getElementById('map'), {
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
/** The `script tag to be integrated to react`
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
  var index = window.document.getElementsByTagName("script")[0]
  // Create the script tag
  var script = window.document.createElement("script")
  // script.type = "text/javascript"
  script.src = url
  script.async = true
  script.defer = true
  // Instead of appendChild, we use insertBefore, so that we select the index or
  // the reference or the first script tag(`script: newNode` and `index: referenceNode`).
  index.parentNode.insertBefore(script, index)
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
