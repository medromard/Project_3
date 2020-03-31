import React from 'react';
import M from 'react-materialize';
import ParallaxComp from "../components/ParallaxComp";
import Grid from '../components/Grid';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

function Home () {
    return (
        <div>
        <ParallaxComp/>
        <Grid/>
        </div>
    )
}

export default Home;

