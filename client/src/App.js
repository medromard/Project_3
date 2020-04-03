import React from 'react';
import Home from './pages/Home'
import User from './pages/User'
import userData from './download.json'

import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (

    <Router>
    <div className="App">
    
      <Navbar/>

      <Switch>
        <Route exact path={["/", "/home"]}><Home/></Route>
        <Route exact path={[ "/user"]}><User/></Route>
        
      </Switch>

     
      
      
      
      
      
    </div>
    </Router>
  );
}

export default App;
