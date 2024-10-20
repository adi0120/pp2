import React, { useState } from 'react';
import './DeliveryPopup.css';
import patients from '../../data/patients.json';

const DeliveryPopup = ({ onClose }) => {
  const [patientId, setPatientId] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleSearch = () => {
    const patient = patients.find((p) => p.id === patientId);
    setSelectedPatient(patient || null);
  };

  const handleDelivered = (medId) => {
    const updatedMeds = selectedPatient.pendingMedications.filter(
      (med) => med.id !== medId
    );
    setSelectedPatient({ ...selectedPatient, pendingMedications: updatedMeds });
  };

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <h2>Pending Deliveries</h2>

        <input
          type="text"
          placeholder="Enter Patient ID"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        {selectedPatient ? (
          <>
            <h3>{selectedPatient.name}</h3>
            <ul>
              {selectedPatient.pendingMedications.map((med) => (
                <li key={med.id} className="medication-item">
                  {med.name}
                  <button
                    className="delivered-btn"
                    onClick={() => handleDelivered(med.id)}
                  >
                    Delivered
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>No patient found.</p>
        )}

        <button className="submit-btn" onClick={onClose}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default DeliveryPopup;
