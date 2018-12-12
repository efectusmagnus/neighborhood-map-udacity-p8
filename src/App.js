import React, { Component } from 'react';
import './App.css';
import Map from './js/Map';
import SlideMenu from './js/SlideMenu';
import ListError from './js/ListError';
import MapError from './js/MapError';
import escapeRegExp from 'escape-string-regexp';

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
      this.onHandleClick = this.onHandleClick.bind(this)
      this.showHide = this.showHide.bind(this)
    }
    componentDidMount() {
      // Fetch data from Foursquare
      fetch('https://api.foursquare.com/v2/venues/search?ll=51.718922,8.757509&categoryId=4bf58dd8d48988d181941735&client_id=LLJCIDDYXOKBAJ4AVOO5AEYPFW15KJ3OVUAWLKKCKDGWJDKI&client_secret=E35XKXD4EEL5QJIEOD5YEVBDBIHUWTCXWXLV1ZOE2CVVP3VT&v=20180323')
      .then(response => response.json())
      .then(data => this.setState({museums: data.response.venues}))
      .catch(error => this.setState({hasError: true}))
    }
    // This is for the <input class="museumFilter">
    updateQuery(query) {
      this.setState({query: query})
    }
    // This is for the <li class="listMuseum">
    onHandleClick(e, key) {
      let animateMarker = this.state.museums.filter(mu => mu.id === key)
      this.setState({
        animateMarker: animateMarker
      })
    }
  // This is for the hamburger menu
  showHide() {
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
    // Apply style to menu list
    let openOrClose = "menuList hideList";
    if (this.state.openMenu === true) {
      openOrClose = "menuList showList"
    }
    return(
      <div className="App">
        <div className="skin">
          <div key="menu-togle">
            <button className="hamburger">
              <span className="before"></span>
              <span className="middle"></span>
              <span className="after"></span>
            </button>
          </div>
          <header key="site-header">
            <a className="logo" href="/">Home</a>
            <h1 tabIndex="0">Musea Finder</h1>
            <h2 tabIndex="0">Paderborn</h2>
            <input
              className="museum-filter"
              aria-label="Filter the list of museums"
              placeholder="Filter Museums"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
              type="text"
              />
            <div className="menuList"></div>
          </header>
          {(filteredMuseums)
            ?
            <SlideMenu
              museums={this.state.museums}
              filteredMuseums={filteredMuseums}
              onHandleClick={this.onHandleClick}
              hasError={this.state.hasError}
            />
            :
            <ListError />
          }
        </div>
        <MapError>
          <Map
            museums={this.state.museums}
            filteredMuseums={filteredMuseums}
            onMarkerClick={this.toggleInfoWindow}
            onHandleClick={this.onHandleClick}
            animateMarker={this.state.animateMarker}
            hasError={this.state.hasError}
          />
        </MapError>
      </div>
    );
  }
}
export default App;


/*class App extends Component {
  render() {
    return(
      <div className="App">
        <Map />
      </div>
    )
  }
}
 export default App;*/
