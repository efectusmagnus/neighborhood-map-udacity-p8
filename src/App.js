import React, { Component } from 'react';
import Map from './js/Map';
import MuseumsList from './js/MuseumsList';
import Footer from './js/Footer'
import MapError from './js/MapError';
import ListError from './js/ListError';
import escapeRegExp from 'escape-string-regexp';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        museums: [],
        query: '',
        animateMarker: '',
        openMenu: false,
        hasError: false
      }
    //Bind `this` to event-handler functions
    this.onListItemClick = this.onListItemClick.bind(this)
    this.onShowHide = this.onShowHide.bind(this)
  }
  componentDidMount() {
    // Fetch data from Foursquare
    fetch('https://api.foursquare.com/v2/venues/search?ll=51.718922,8.757509&categoryId=4bf58dd8d48988d181941735&client_id=LLJCIDDYXOKBAJ4AVOO5AEYPFW15KJ3OVUAWLKKCKDGWJDKI&client_secret=E35XKXD4EEL5QJIEOD5YEVBDBIHUWTCXWXLV1ZOE2CVVP3VT&v=20180323&radius=5000')
    .then(response => response.json())
    .then(data => this.setState({museums: data.response.venues}))
    .catch(error => this.setState({hasError: true}))
  }

  // This is for the <input class="museums-filter">
  // Set the query state to the value typed by the user
  updateQuery(query) {
    this.setState({query: query})
  }
  // Click on an item of the menu list to animate its marker
  onListItemClick(e, key) {
    const animateMarker = this.state.museums.filter(m => m.id === key)
    this.setState({
      animateMarker: animateMarker
    })
  }
  // This is for the hamburger menu
  // Open/close the navigation menu
  onShowHide() {
    const openMenu = this.state.openMenu;
    this.setState({
      openMenu: !openMenu
    })
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
    let openOrClose = "navToLeft"
    let leftOrRight = "mapToLeft"
    let positiveOrNegative = "-1"
    if (this.state.openMenu) {
      openOrClose = "navToRight"
      leftOrRight = "mapToRight"
      positiveOrNegative = "0"
    }

    return(
      <div className="App">
        <main role="main">
          <header>
            <button
              autoFocus
              className="hamburger-btn"
              aria-label="Open the navigation menu with the museum's locations"
              onClick={this.onShowHide}
              tabIndex="0"
              >&#9776;
            </button>
          </header>
          <nav id={openOrClose} className="sidenav">
            <button
              autoFocus
              tabIndex={positiveOrNegative}
              className="closebtn"
              aria-label="Close the navigation menu"
              onClick={this.onShowHide}
              >&times;
            </button>
            <h1 tabIndex={positiveOrNegative}>Musea Finder Paderborn</h1>
            <input
              autoFocus
              tabIndex={positiveOrNegative}
              className="museums-filter"
              aria-label="Filter the list of museums"
              placeholder="Filter Museums"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
              type="text"
            />
            {(filteredMuseums)
              ?
              <MuseumsList
                tabIndex={this.props.positiveOrNegative}
                museums={this.state.museums}
                filteredMuseums={filteredMuseums}
                onListItemClick={this.onListItemClick}
                hasError={this.state.hasError}
              >
                {this.props.children}
              </MuseumsList>
              :
              <ListError />
            }
          </nav>
          <section id={leftOrRight} className="map-container" role="application">
            <MapError>
              <Map
                tabIndex="0"
                museums={this.state.museums}
                filteredMuseums={filteredMuseums}
                onListItemClick={this.onListItemClick}
                animateMarker={this.state.animateMarker}
                hasError={this.state.hasError}
              />
            </MapError>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
