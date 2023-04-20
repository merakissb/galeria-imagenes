import React from 'react';
import Dictionary from './config/dictionary/es';
import './styles.css'

const Header = () => {
  return (
    <header>
      <h1>{Dictionary.title}</h1>
    </header>
  );
}

export default Header;