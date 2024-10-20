import React, { useState, useEffect } from 'react';
import Header from '../components2/Header2/Header2';
import SearchBar from '../components2/SearchBar2/SearchBar2';
import PatientCard from '../components2/PatientCard2/PatientCard2';
import patientData from '../data/patients.json'; // Importing the data
import './NurseDash.css';

const NurseDashboard = () => {
  const [patients, setPatients] = useState(patientData); // Load all patient data
  const [filteredPatients, setFilteredPatients] = useState(patients);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter patients based on search input
  useEffect(() => {
    const filtered = patients.filter(
      (patient) =>
        patient.name.toLowerCase().includes(searchTerm) ||
        patient.id.toLowerCase().includes(searchTerm)
    );
    setFilteredPatients(filtered);
  }, [searchTerm, patients]);

  return (
    <div className="nurse-dashboard">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="patient-list">
        {filteredPatients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </div>
    </div>
  );
};

export default NurseDashboard;
