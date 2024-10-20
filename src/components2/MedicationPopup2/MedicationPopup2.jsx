import React, { useState } from 'react';
import './MedicationPopup2.css';

const MedicationPopup = ({ onClose, patient }) => {
  const [medications, setMedications] = useState(patient.pendingMedications || []);
  const [newMedication, setNewMedication] = useState('');

  const handleAddMedication = () => {
    if (newMedication.trim()) {
      setMedications([...medications, { id: Date.now(), name: newMedication }]);
      setNewMedication('');
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Add Medications</h2>
        <input
          type="text"
          value={newMedication}
          onChange={(e) => setNewMedication(e.target.value)}
          placeholder="Enter medication name"
        />
        <button onClick={handleAddMedication}>Add</button>
        <ul>
          {medications.map((med, index) => (
            <li key={index}>{med.name}</li>
          ))}
        </ul>
        <button className="submit-button" onClick={onClose}>Submit</button>
      </div>
    </div>
  );
};

export default MedicationPopup;
