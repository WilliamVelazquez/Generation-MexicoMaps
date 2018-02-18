import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Band from './Band'
import Mexico from './Mexico'
import GoogleMapContent from './GoogleMapContent'

import './Content.css'
/*
* Use this component as a launching-pad to build your functionality.
*/
//class Container extends Component {
const Content = () => (
  <div>
    <Band
      color='#4B6495'
      height='50px'
    />
    <div className="Container">
      <Header />
      <div className="InfoText">
        <h2>Where is Generation?</h2>
        <p>Today, Generation is active in seven countries—64 cities and 140+ sites—with diverse social, economic and labor-market contexts.</p>
        <div className="Mexico">
          <Mexico
            color='#DBDDE2'
            height='145'
          />
        </div>
        <h2>Mexico Stores Location</h2>
      </div>
      <div>
        <GoogleMapContent />
      </div>
    </div>

    <Footer />
  </div>
);

export default Content;
