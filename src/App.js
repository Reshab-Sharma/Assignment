


import Post from './components/post/Post';
import React, { useEffect,useState} from 'react';
import ReactPaginate from "react-paginate";

import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Postpage from './pages/Postpage';
import './App.css';

function App() 
 {
  
  return (
    <div className="App">
     <Router>

<Switch>
    <Route exact path="/">
      <Home/> 
    </Route>
    <Route path="/postpage/:id">
      <Postpage/>
    </Route>
    
  </Switch>
</Router>
      
     

    </div>
  );
}

export default App;
