import React from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Landingpage from './components/landingpage/Landingpage';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <React.Fragment>
        <Switch>
          <Route path = "/" exact component={Landingpage}></Route>
        </Switch>
      </React.Fragment>
      <Footer />
    </Router>
  );
}
export default App;