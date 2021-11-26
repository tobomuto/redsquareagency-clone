import React from 'react';

import './Header.scss';

const Header = () => {
  return (
      <nav id="header__nav">
        <div className="header__container">
          <a 
            href="/" 
            id="header__logo"
          >
          </a>
          <a
            className="header__link"
            href="https://www.redsquareagency.com/work"
          >Work</a>
        </div>
      </nav>
  );
}

export default Header;