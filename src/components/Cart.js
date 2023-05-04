import React from 'react';
import { Table, Button } from 'react-bootstrap';

const Cart = ({ cart, handleRemoveFromCart }) => {
  const cartItems = cart.map((item) => (
    <tr key={item._id}>
      <td>{item.name}</td>
      <td>{item.destination}</td>
      <td>{item.duration} days</td>
      <td>${item.price}</td>
      <td>
        <Button variant="danger" onClick={() => handleRemoveFromCart(item)}>
          Remove
        </Button>
      </td>
    </tr>
  ));

  return (
    <>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Destination</th>
              <th>Duration</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{cartItems}</tbody>
        </Table>
      )}
    </>
  );
};

export default Cart;
