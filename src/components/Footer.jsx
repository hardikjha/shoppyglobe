import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        <FaRegCopyright style={{ marginRight: '5px' }} />
        2025 - ShoppyGlobe
      </p>
      <p>Made by Hardik Kumar</p>
    </footer>
  );
}
