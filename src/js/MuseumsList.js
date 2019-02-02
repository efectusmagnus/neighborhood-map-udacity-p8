import React, { Component } from 'react'

class MuseumsList extends Component {

  listItemClick(e, key) {
    this.props.onListItemClick(e, key)
  }

  render() {
    let filteredMuseums = this.props.filteredMuseums

    return(
      <nav key="drawer" className="nav">
        {filteredMuseums &&
          <ul className="nav-list">{filteredMuseums.map(museum => (
            <li
              id={museum.id}
              key={museum.id}
              className="list-item"
              //role="menuitem"
              tabIndex="0"
              onClick={(e, key) => this.listItemClick(e, museum.id)}
              onKeyPress={(e, key) => this.listItemClick(e, museum.id)}
            >{museum.name}
            </li>))}
          </ul>
        }
      </nav>
    );
  }
}

export default MuseumsList
