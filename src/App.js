import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Component/NoMatch/NoMatch';
import Contact from './Component/Contact/Contact';
import Sajek from './Component/Sajek/Sajek';
import Sreemongol from './Component/Sreemongol/Sreemongol';
import Sundorbon from './Component/Sundorbon/Sundorbon';
import Login from './Component/Login/Login';
import Booking from './Component/Booking.js/Booking';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Header from './Component/Header/Header';
import CoxsBazar from './Component/CoxsBazar/CoxsBazar';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
          <Route path="/header">
            <Header/>
          </Route>
          <Route exact path="/">
            <Header/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path="/coxsbazar">
            <CoxsBazar/>
          </Route>
          <Route path="/sajek">
            <Sajek/>
          </Route>
          <Route path="/sreemongol">
            <Sreemongol/>
          </Route>
          <Route path="/sundorbon">
            <Sundorbon/>
          </Route>
          <PrivateRoute path="/booking">
            <Booking/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
