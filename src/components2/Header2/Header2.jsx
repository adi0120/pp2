import React from 'react';
import './Header2.css';

const Header = () => (
  <div className="header">
    <img src="/path/to/logo.png" alt="Clinic Logo" className="logo" />
    <h1 className="title">Nurse Dashboard</h1>
    <button className="logout-button">Logout</button>
  </div>
);

export default Header;
