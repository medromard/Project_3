import React from 'react';
import Home from './pages/Home'
import User from './pages/User'
import Data from './pages/data'
import ShoeBoard from './components/ShoeBoard'
import Footer from './components/Footer'

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
        <Route exact path={[ "/data"]}><Data/></Route>
        
      </Switch>

     
      <ShoeBoard/>
      <Footer/>
     

      
      
      
      
      
    </div>
    </Router>
  );
}

export default App;
