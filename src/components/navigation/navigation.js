import React from 'react';
import './style.scss';

function Navigation(props) {
  return (
    <nav className="navigation">
      <div className="navigation__links">
        <a href="url" className="navigation__item">
          Home
        </a>
        <a href="url" className="navigation__item">
          About me
        </a>
        <a href="url" className="navigation__item">
          Skills
        </a>
        <a href="url" className="navigation__item">
          Portfolio
        </a>
        <a href="url" className="navigation__item">
          Contacts
        </a>
      </div>
      <div className="lang">
        <button className="lang__button">Ru</button>
        <span>|</span>
        <button className="lang__button lang__button-active">Eng</button>
      </div>
      <img
        onClick={props.onClose}
        className="navigation__close"
        width={22}
        height={22}
        src="./img/close.svg"
        alt="Close"
      />
    </nav>
  );
}

export default Navigation;
