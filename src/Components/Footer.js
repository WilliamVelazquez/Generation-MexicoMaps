import React from 'react';
import Logo from './Logo';
import Band from './Band';
//import Mexico from './Mexico'
import './Footer.css'

const Footer = () => (
    <footer>
      <div className="Footer">
        <Band
          //color='#005677'
          color='#4B6495'
          height='50px'
        />
        <div className="FooterLogo">
          <Logo
            color="#00B3A1"
            height='50'
          />
        </div>

        <div className="About">
          <h3>About Generation</h3>
          <p>
            Worldwide, more than 75 million young people are unemployed. But many employers can’t find people with the skills they need for entry-level jobs. Generation is a nonprofit founded in 2014 by McKinsey & Company to help bridge this gap—at speed and scale.
          </p>
          <p className={"Author"}>
            Developed by William Velázquez
          </p>
        </div>
      </div>
    </footer>
);

export default Footer;
