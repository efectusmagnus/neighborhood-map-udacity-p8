/*import React from 'react';

const ListError = () => {
  return(
    <div>
      <h1 className="list-error">There is a problem with the loading</h1>
      <p>List of Foursquare did not load. Try again later</p>
    </div>
  )
}

export default ListError;*/

import React from 'react';

// https://reactjs.org/docs/react-component.html#static-getderivedstatefromerror
class ListError extends React.Component {
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
          <h1 className="list-error">There is a problem with the loading</h1>
          <p>List of Foursquare did not load. Try again later</p>
        </div>
      )
    }
    return this.props.children;
  }
}
export default ListError;
