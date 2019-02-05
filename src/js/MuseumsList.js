import React, { Component } from 'react'

class MuseumsList extends Component {

  listItemClick(e, key) {
    this.props.onListItemClick(e, key)
  }
  // Source: "https://www.w3schools.com/jsref/event_key_keycode.asp"
  listItemPressEnter(e, key) {
    // Cancel the default action, if needed
    e.preventDefault()
    // Number 13 is the "Enter" key on the keyboard
    if (e.which === 13 || e.keyCode === 13) {
      // Trigger the button element with the enter key
      this.props.onListItemClick(e, key)
    }
  }
  render() {
    let filteredMuseums = this.props.filteredMuseums

    return(
      <div className="list-ctn">
        {filteredMuseums &&
          <ul role="menubar" className="nav-list">{filteredMuseums.map(museum => (
            <li
              id={museum.id}
              key={museum.id}
              className="list-item"
              role="menuitem"
              tabIndex="0"
              onClick={(e, key) => this.listItemClick(e, museum.id)}
              onKeyPress={(e, key) => this.listItemPressEnter(e, museum.id)}
            >{museum.name}
            </li>))}
          </ul>
        }
      </div>
    );
  }
}

export default MuseumsList
