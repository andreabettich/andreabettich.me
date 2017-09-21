import React from 'react';
import Logo from './Logo';
import ContactInfoBox from '../contactbox/ContactInfoBox';

const Header = props => {
  return (
    <div className="header grid-container">
      <div className="grid-x grid-padding-x">
        <div className="small-2 cell">
          <Logo />
        </div>
        <div className="small-10 cell">
          <ContactInfoBox />
        </div>
      </div>
    </div>
  );
};

export default Header;
