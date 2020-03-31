import React from 'react';
import Home from './pages/Home'

import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";



function App() {
  return (

    <Router>
    <div className="App">
    
      <Navbar/>

      <Switch>
        <Route exact path={["/", "/home"]}><Home/></Route>
        
      </Switch>
      
      
      
      
      
    </div>
    </Router>
  );
}

export default App;
