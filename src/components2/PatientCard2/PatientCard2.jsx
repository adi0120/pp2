import React, { useState } from 'react';
import MedicationPopup from '../MedicationPopup2/MedicationPopup2';
import ProcedurePopup from '../ProcedurePopup2/ProcedurePopup2';
import MedicalHistoryPopup from '../MedicalHistoryPopup/MedicalHistoryPopup';
import './PatientCard2.css';

const PatientCard = ({ patient }) => {
  const [showMedicationPopup, setShowMedicationPopup] = useState(false);
  const [showProcedurePopup, setShowProcedurePopup] = useState(false);
  const [showHistoryPopup, setShowHistoryPopup] = useState(false);

  return (
    <div className="patient-card">
      <h2>{patient.name}</h2>
      <p>ID: {patient.id}</p>
      <p>Blood Group: {patient.bloodGroup}</p>
      <p>Room: {patient.room.number} ({patient.room.type})</p>
      <div className="buttons">
        <button onClick={() => setShowMedicationPopup(true)}>Medication</button>
        <button onClick={() => setShowProcedurePopup(true)}>Procedure</button>
        <button onClick={() => setShowHistoryPopup(true)}>Medical History</button>
      </div>
      {showMedicationPopup && (
        <MedicationPopup onClose={() => setShowMedicationPopup(false)} patient={patient} />
      )}
      {showProcedurePopup && (
        <ProcedurePopup onClose={() => setShowProcedurePopup(false)} patient={patient} />
      )}
      {showHistoryPopup && (
        <MedicalHistoryPopup onClose={() => setShowHistoryPopup(false)} patient={patient} />
      )}
    </div>
  );
};

export default PatientCard;
