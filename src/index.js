import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
//import GoogleMapsContainer from './Test'
import { BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

const PageNotFound = ({location}) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
    <p>The page you were looking for was moved or does not exist.</p>
  </div>
)

ReactDOM.render(
  <BrowserRouter>
  <Router>
      <Switch>
        <Route path="/" alt="home page" exact component={ App } />
        <Redirect component={ PageNotFound } to="/" />
      </Switch>
    </Router>
  </BrowserRouter>,
  document.getElementById('root'));
//ReactDOM.render(<GoogleMapsContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
