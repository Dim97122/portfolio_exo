import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from '../Navbar';
import Home from '../../pages/Home';
import Documentation from '../../pages/Documentation';
import About from '../../pages/About';
import Book from '../Book';

const App = () => {
 return (
    <>
      < Router >
        < Navbar />
        < Switch >
          < Route path="/about" >
            < About />
          </ Route>
          < Route path="/documentation">
            < Documentation />
          </Route>
          < Route exact path="/">
            < Home />
          </ Route>
          < Route path={`/books/:bookSlug`}>
            < Book />
          </ Route >
        </ Switch >
      </ Router >
    </>
 );
}
export default App;
