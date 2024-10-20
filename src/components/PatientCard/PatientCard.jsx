import React, { useState } from 'react';
import './PatientCard.css';

const PatientCard = ({ patient, onClose }) => {
  const [medications, setMedications] = useState(patient.pendingMedications);

  const handleDone = (id) => {
    const updatedMeds = medications.filter((med) => med.id !== id);
    setMedications(updatedMeds);
  };

  return (
    <div className="patient-card-overlay">
      <div className="patient-card">
        <h2>{patient.name}</h2>
        <p>Email: {patient.email}</p>
        <p>Phone: {patient.phone}</p>
        <p>Blood Group: {patient.bloodGroup}</p>

        <h3>Pending Medications</h3>
        <ul>
          {medications.map((med) => (
            <li key={med.id} className="medication-item">
              {med.name}
              <button onClick={() => handleDone(med.id)}>Done</button>
            </li>
          ))}
        </ul>

        <button className="submit-btn" onClick={onClose}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PatientCard;
