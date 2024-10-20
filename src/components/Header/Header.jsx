import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <img src="/logo.png" alt="Clinic Logo" className="logo" />
    <h1 className="header-title">Pharmacist Dashboard</h1>
    <button className="logout-btn">Logout</button>
  </header>
);

export default Header;
