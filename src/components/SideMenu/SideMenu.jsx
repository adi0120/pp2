import React, { useState } from 'react';
import './SideMenu.css';
import DeliveryPopup from '../DeliveryPopup/DeliveryPopup';

const SideMenu = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="side-menu">
      <button className="delivery-btn" onClick={() => setShowPopup(true)}>
        Delivery
      </button>

      {showPopup && <DeliveryPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default SideMenu;
