import React, { Component } from 'react'

class MuseumsList extends Component {

  handleClick(e,key) {
    this.props.onHandleClick(e, key)
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
              tabIndex={this.props.openMenu ? "-1" : "0"}
              onClick={(e, key) => this.handleClick(e, museum.id)}
            >{museum.name}
            </li>))}
          </ul>
        }
      </nav>
    );
  }
}

export default MuseumsList
