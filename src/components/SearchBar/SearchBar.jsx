import React, { useState } from 'react';
import './SearchBar.css';
import PatientCard from '../PatientCard/PatientCard';
import patients from '../../data/patients.json';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleSearch = (e) => setQuery(e.target.value);

  const filteredPatients = patients.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.id.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search by ID or Name"
        value={query}
        onChange={handleSearch}
      />
      <ul className="search-results">
        {filteredPatients.map((patient) => (
          <li
            key={patient.id}
            onClick={() => setSelectedPatient(patient)}
            className="search-item"
          >
            {patient.name}
          </li>
        ))}
      </ul>

      {selectedPatient && (
        <PatientCard
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}
    </div>
  );
};

export default SearchBar;
