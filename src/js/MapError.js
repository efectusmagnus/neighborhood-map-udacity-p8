import React, { Component } from 'react';

// https://reactjs.org/docs/react-component.html#static-getderivedstatefromerror
class MapError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapError: false
    };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { mapError: true};
  }
  render() {
    if (this.state.mapError) {
      return(
        <div>
          <h1>There is a problem with the loading.</h1>
          <p>Reload the page or try again later.</p>
        </div>
      )
    }
    return this.props.children;
  }
}
export default MapError;
