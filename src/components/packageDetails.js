import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const PackageDetails = ({ packageInfo }) => {
  const [roomType, setRoomType] = useState('');
  const [boardBasis, setBoardBasis] = useState('');

  const handleRoomTypeChange = (e) => {
    setRoomType(e.target.value);
  };

  const handleBoardBasisChange = (e) => {
    setBoardBasis(e.target.value);
  };

  const handleBookNowClick = () => {
    // handle book now click logic here
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{packageInfo.title}</Card.Title>
        <Card.Text>{packageInfo.description}</Card.Text>
        <Card.Text>Duration: {packageInfo.duration}</Card.Text>
        <Card.Text>Price: {packageInfo.price}</Card.Text>
        <Row>
          <Col>
            <label>Room Type:</label>
            <select onChange={handleRoomTypeChange}>
              <option value="">Select Room Type</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Super Deluxe">Super Deluxe</option>
              <option value="Suite">Suite</option>
            </select>
          </Col>
          <Col>
            <label>Board Basis:</label>
            <select onChange={handleBoardBasisChange}>
              <option value="">Select Board Basis</option>
              <option value="Full Board">Full Board</option>
              <option value="Half Board">Half Board</option>
              <option value="Bed and Breakfast">Bed and Breakfast</option>
            </select>
          </Col>
        </Row>
        <Button onClick={handleBookNowClick}>Book Now</Button>
      </Card.Body>
    </Card>
  );
};

export default PackageDetails;
