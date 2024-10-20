import React from 'react';
import './MedicalHistoryPopup.css';

const MedicalHistoryPopup = ({ patient, onClose }) => {
  return (
    <div className="popup">
      <h2>Medical History for {patient.name}</h2>
      <ul>
        {patient.medicalHistory.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default MedicalHistoryPopup;
