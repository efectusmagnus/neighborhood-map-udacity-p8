import React, { Component } from 'react';

class SlideMenu extends Component {
  handleClick(e,key) {
    this.props.onHandleClick(e, key)
  }
  render() {
    let filteredMuseums = this.props.filteredMuseums;
    let museums = this.props.museums;
    return(
      <div>
      {filteredMuseums &&
        <ul className="museums-list">{filteredMuseums.map(museum =>
          <li
            key={museum.id}
            className="list-item"
            tabIndex="0"
            onClick={(e, key) => this.handleClick(e, museum.id)}
          >{museum.name}
          </li>)}}
        </ul>
      }
      </div>
    );
  }
}

export default SlideMenu;
