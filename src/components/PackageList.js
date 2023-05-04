import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PackageList = ({ packages, handleAddToCart }) => {
  return (
    <>
      {packages.map((packages) => (
        <Card key={packages._id} className="mb-3">
          <Card.Header>{packages.name}</Card.Header>
          <Card.Body>
            <Card.Title>{packages.destination}</Card.Title>
            <Card.Text>{packages.description}</Card.Text>
            <Card.Text>Duration: {packages.duration} days</Card.Text>
            <Card.Text>Price: ${packages.price}</Card.Text>
            <Button variant="primary" onClick={() => handleAddToCart(packages)}>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default PackageList;
