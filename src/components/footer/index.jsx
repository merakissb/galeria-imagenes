import React from 'react';
import Dictionary from './config/dictionary/es';
import './styles.css'

const Footer = () => {
  return (
    <footer>
      <p>{Dictionary.paragraph}</p>
    </footer>
  );
}

export default Footer;