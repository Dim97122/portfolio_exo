import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import GlobalNavbar from '../Navbar/Global_Navbar';
import Home from '../../pages/Home';
import Contact from '../../pages/Contact';
import About from '../../pages/About';
import Works from '../../pages/Works';

const App = () => {
 return (
    <>
      < Router >
        < GlobalNavbar />
        < Switch >
          < Route path="/about" >
            < About />
          </ Route>
          < Route path="/contact">
            < Contact />
          </Route>
          < Route path={`/works`}>
            < Works />
          </ Route >
          < Route exact path="/">
            < Home />
          </ Route>
        </ Switch >
      </ Router >
    </>
 );
}
export default App;
