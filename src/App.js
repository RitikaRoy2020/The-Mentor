import React from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Landingpage from './components/landingpage';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import SignupPage from './components/signup';

function App() {
  return (
    <Router>
      <Navigation />
      <React.Fragment>
        <Switch>
          <Route path = "/" exact component={Landingpage}></Route>
          <Route path = "/signup" component={SignupPage}></Route>
        </Switch>
      </React.Fragment>
      <Footer />
    </Router>
  );
}
export default App;