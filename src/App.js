import React, { Component } from 'react';
import Login from './containers/Login';
import Signup from './containers/Signup';
import { Provider } from 'react-redux';
import store from './store'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export class App extends Component {
    render() {
        return (
            <div >   
            <Provider store={store}>

<Router>
      <div>
        <nav>
          <ul>
            <li>
              {/* <Link to="/Home"></Link> */}
            </li>
            
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Signup">Signp</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
    
          <Route path="/Signup">
            <Signup/>
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
            </Provider>
            </div>
        )
    }
}

export default App
