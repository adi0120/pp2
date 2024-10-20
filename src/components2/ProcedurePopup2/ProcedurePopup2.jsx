import React, { useState } from 'react';
import './ProcedurePopup2.css';

const ProcedurePopup = ({ onClose }) => {
  const [procedures, setProcedures] = useState([]);

  const handleAddProcedure = (procedure) => {
    setProcedures([...procedures, procedure]);
  };

  return (
    <div className="popup">
      <h2>Add Procedure</h2>
      <input type="text" placeholder="Search for procedure" onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleAddProcedure(e.target.value);
          e.target.value = ''; // Clear input
        }
      }} />
      <textarea placeholder="Description" rows="4"></textarea>
      <ul>
        {procedures.map((proc, index) => (
          <li key={index}>{proc}</li>
        ))}
      </ul>
      <button onClick={onClose}>Submit</button>
    </div>
  );
};

export default ProcedurePopup;
