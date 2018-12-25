import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import SlideMenu from './js/SlideMenu';
import ListError from './js/ListError';
import escapeRegExp from 'escape-string-regexp';

class Header extends Component {
  constructor(props) {
    super(props);
      this.state = {
        openMenu: false
      }
    //Bind `this` to event-handler functions
    this.showHide = this.showHide.bind(this)
  }
  // This is for the hamburger menu
  // Open/close the navigation menu
  showHide() {
    const openMenu = this.state.openMenu;
    this.setState({
      openMenu: !openMenu
    })
  }
  // Apply style to navigation menu and the map to open or close the menu
  let openOrClose = "navToLeft";
  //let leftOrRight = "mapToLeft";
  let positiveOrNegative = "-1";
  if (this.state.openMenu === true) {
    openOrClose = "navToRight";
    //leftOrRight = "mapToRight";
    positiveOrNegative = "0";
  }
  render() {
    return(
      <header>
        <button
          autoFocus
          className="hamburger-btn"
          aria-label="Open the navigation menu with the museum's locations"
          onClick={this.showHide}
          tabIndex="0"
          >&#9776;
        </button>
        <nav id={openOrClose} className="sidenav">
          <button
            autoFocus
            tabIndex={positiveOrNegative}
            className="closebtn"
            aria-label="Close the navigation menu"
            onClick={this.showHide}
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
            <SlideMenu
              tabIndex={positiveOrNegative}
              museums={this.state.museums}
              filteredMuseums={filteredMuseums}
              onHandleClick={this.onHandleClick}
              hasError={this.state.hasError}
            />
            :
            <ListError />
          }
        </nav>
      </header>
    )
  }
}
