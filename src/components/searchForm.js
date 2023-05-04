import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchForm = ({ handleSearch }) => {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [numTravelers, setNumTravelers] = useState('');
  const [specialty, setSpecialty] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchParams = { destination, duration, numTravelers, specialty };
    handleSearch(searchParams);
  };

  return (
    
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="destination">
        <Form.Label>Destination</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="duration">
        <Form.Label>Duration</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="numTravelers">
        <Form.Label>Number of Travelers</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter number of travelers"
          value={numTravelers}
          onChange={(e) => setNumTravelers(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="specialty">
        <Form.Label>Specialty</Form.Label>
        <Form.Control
          as="select"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        >
          <option value="">Select Specialty</option>
          <option value="Honeymoon">Honeymoon</option>
          <option value="Beach holiday">Beach holiday</option>
          <option value="Wildlife excursion">Wildlife excursion</option>
          <option value="Family holiday">Family holiday</option>
        </Form.Control>
      </Form.Group> <br></br> 
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchForm;
