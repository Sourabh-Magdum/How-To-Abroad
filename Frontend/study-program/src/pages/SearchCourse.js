import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchCourse = () => {
  const [filters, setFilters] = useState({
    country: '',
    degree: '',
    language: ''
  });
  const [programs, setPrograms] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  useEffect(() => {
    axios.get('/api/programs', { params: filters })
      .then(response => setPrograms(response.data))
      .catch(error => console.error(error));
  }, [filters]);

  return (
    <div className="search-course">
      <div className="sidebar">
        <h3>Filters</h3>
        <label>
          Country:
          <input name="country" value={filters.country} onChange={handleInputChange} />
        </label>
        <label>
          Degree:
          <input name="degree" value={filters.degree} onChange={handleInputChange} />
        </label>
        <label>
          Language:
          <input name="language" value={filters.language} onChange={handleInputChange} />
        </label>
      </div>
      <div className="programs">
        <h3>Programs</h3>
        <ul>
          {programs.map(program => (
            <li key={program.id}>{program.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchCourse;