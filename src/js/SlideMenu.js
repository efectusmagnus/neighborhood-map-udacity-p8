import React, { Component } from 'react';

class SlideMenu extends Component {
  constructor(props) {
    super(props)
  }
  handleClick(e,key) {
    console.log("The click functions");
    this.props.onHandleClick(e, key)
  }

  render() {
    let filteredMuseums = this.props.filteredMuseums;
    let museums = this.props.museums;
    return(

      <nav key="drawer" className="nav">
        {filteredMuseums &&
          <ul className="nav-list">{filteredMuseums.map(museum =>
            <li
              id={museum.id}
              key={museum.id}
              className="list-item"
              tabIndex={this.props.openMenu ? "-1" : "0"}
              onClick={(e, key) => this.handleClick(e, museum.id)}
            >{museum.name}
            </li>)}
          </ul>
        }
      </nav>
    );
  }
}

export default SlideMenu;
