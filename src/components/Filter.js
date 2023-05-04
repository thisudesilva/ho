import React, { useState } from 'react';

const PackageFilter = ({ handleFilterChange }) => {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [numTravelers, setNumTravelers] = useState('');
  const [specialty, setSpecialty] = useState('');

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleNumTravelersChange = (e) => {
    setNumTravelers(e.target.value);
  };

  const handleSpecialtyChange = (e) => {
    setSpecialty(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filters = { destination, duration, numTravelers, specialty };
    handleFilterChange(filters);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Destination:
          <input type="text" value={destination} onChange={handleDestinationChange} />
        </label>
        <label>
          Duration:
          <input type="text" value={duration} onChange={handleDurationChange} />
        </label>
        <label>
          Number of Travelers:
          <input type="number" value={numTravelers} onChange={handleNumTravelersChange} />
        </label>
        <label>
          Specialty:
          <input type="text" value={specialty} onChange={handleSpecialtyChange} />
        </label>
        <button type="submit">Filter Packages</button>
      </form>
    </div>
  );
};

export default PackageFilter;
