import React from 'react';
import Logo from './Logo';
import Band from './Band';

const Header = () => (
    <div style={{marginBottom: '25px'}}>
      <Logo
        color="#00ADEF"
        height='50'
      />
      <Band
        color='#00ADEF'
        height='10px'
      />
    </div>
);

export default Header;
