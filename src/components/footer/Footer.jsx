import React from 'react';
import Dictionary from './config/dictionary/es';
import './style.css'

const Footer = () => {
  return (
    <footer>
      <p>{Dictionary.footer.paragraph}</p>
    </footer>
  );
}

export default Footer;