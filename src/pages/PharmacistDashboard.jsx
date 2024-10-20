import React from 'react';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import SideMenu from '../components/SideMenu/SideMenu';
import Footer from '../components/Footer/Footer';



const PharmacistDashboard = () => (
    <div className="dashboard">
      <Header />  {/* Move Header above SideMenu */}
      <div className="main-content">
        <SideMenu />
        <div className="content">
          <SearchBar />
          {/* Add the main content of your dashboard here */}
          <Footer />
        </div>
      </div>
    </div>
  );

export default PharmacistDashboard;
