import React, { Component } from 'react'

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
      window.location.reload()
      return(
        <div className="error-message">
          <svg
            class="img project-main-cover"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 221.4 94"
            aria-label="owl">
            <svg class="img welcome" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <desc>A owl looking at the left</desc>
              <text x="72%" y="35%" fill="black" fontSize="1em">Reload</text>
            </svg>
            <path class="corp" d="M141.6 64.8C141.4 79.7 127.7 94 111.1 94c-16.3 0-30.6-13.7-30.5-29.2 0-15.9 15.1-25.1 15.9-25.6 2.1-2.9 4.3-5.8 6.4-8.7 1.7 3.3 3.4 6.7 5.2 10 0.8 0.1 9.9 0.2 11 0.2 2.5-2.8 4.9-5.7 7.4-8.5 1.7 3.7 3.4 7.3 5.1 11C133.5 45.1 141.7 53.2 141.6 64.8z"/><circle class="w-eye" cx="102.3" cy="53.9" r="4.7"/><circle class="w-eye" cx="122.2" cy="53.9" r="4.7"/><circle class="gray" cx="100.8" cy="53.9" r="2"/><circle class="gray" cx="120.4" cy="53.6" r="2"/><polygon class="nose" points="112 67.2 109.2 62.4 114.8 62.4 "/><path class="wing" d="M92.9 66.3c0.1 8.5-2.8 14.8-4.3 17.7 -1.4-1.3-7.6-7.7-8-18 -0.4-10.5 5.5-17.4 6.8-18.8C89.1 50.1 92.8 56.9 92.9 66.3z"/><path class="wing" d="M129.3 63.7c0-8.6 3.3-14.9 4.9-17.6 1.3 1.4 7.3 8 7.4 18.2 0.1 10.1-5.5 16.7-6.8 18.2C133.1 79.9 129.3 73.1 129.3 63.7z"/><path class="gray" d="M92.2 84.6c-0.5 1.6 0.3 2.1-0.1 4 0 0.2-0.5 2.8-1.6 2.9 -0.8 0.1-1.9-1.2-2.5-3.2 -0.1-1.2-0.1-2.7 0.6-4.4 0.2-0.5 1.4-3.5 3-3.3 0.7 0.1 1.4 0.7 1.6 1.4C93.4 82.9 92.7 83.3 92.2 84.6z"/><ellipse class="gray" cx="95.3" cy="86.1" rx="2.4" ry="4.8"/><ellipse class="gray" cx="100.4" cy="86.2" rx="2.6" ry="5.2"/><ellipse class="gray" cx="124" cy="85.5" rx="2.5" ry="4.2"/><path class="gray" d="M131.9 86c0.2 1.2 0.3 1.9 0.1 2.6 -0.1 0.5-0.4 2.1-1.4 2.4 -1.3 0.4-3.7-1.6-4.3-4 -0.5-2 0.2-4.8 1.8-5.3 1-0.3 2.2 0.4 2.8 1C131.5 83.4 131.6 84.3 131.9 86z"/><path class="gray" d="M136.8 85.1c0.4 1.3 0.2 2.3 0.1 2.9 -0.2 1.1-0.4 2.2-1.3 2.6 -0.9 0.4-2.1-0.4-2.6-1 -0.2-0.2-0.7-0.8-1-2.6 -0.2-1.2-0.6-4.3 0.7-4.9 0.7-0.3 1.5 0 1.9 0.2C136.2 83 136.6 84.4 136.8 85.1z"/><rect y="85.9" class="gray" width="221.4" height="1.8"/><path class="bubble" d="M221 29.5c0 15.7-16.6 28.4-37 28.4 -10.1 0-19.3-3.1-26-8.2l-12.3 5.9 3-17.6c-1.1-2.7-1.7-5.6-1.7-8.6 0-15.7 16.6-28.5 37-28.5C204.5 1.1 221 13.8 221 29.5z"/>
          </svg>
          <h1>
            The page is trying to reload the map correctly.
          </h1>
          <p>Please wait or try later.</p>
        </div>
      )
    }
    return this.props.children;
  }
}
export default MapError;
