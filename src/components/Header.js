import React from 'react';

import './Header.scss';

const Header = () => {
  return (
      <nav id="header__nav">
        <a 
          href="/" 
          id="header__logo"
        >
        </a>
        <a
          className="header__link"
          href="https://www.redsquareagency.com/work"
        >Work</a>
      </nav>
  );
}

export default Header;