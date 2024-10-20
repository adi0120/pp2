import React from 'react';
import './SearchBar2.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase()); // Convert to lowercase for case-insensitive search
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search patients by name or ID"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
