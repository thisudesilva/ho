import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchForm from './components/searchForm';
import PackageList from './components/PackageList';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import axios from 'axios';

const App = () => {
  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    axios.get('/api/packages').then((res) => {
      setPackages(res.data);
      setFilteredPackages(res.data);
    });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = packages.filter((pkg) =>
      pkg.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPackages(filtered);
  };

  const handleAddToCart = (pkg) => {
    setCart([...cart, pkg]);
  };

  const handleRemoveFromCart = (pkg) => {
    const updatedCart = cart.filter((item) => item._id !== pkg._id);
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleCancelCheckout = () => {
    setShowCheckout(false);
  };

  return (
    <Container>
      <Row className="my-3">
        <Col>
          <SearchForm handleSearch={handleSearch} />
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <PackageList packages={filteredPackages} handleAddToCart={handleAddToCart} />
        </Col>
        <Col md={4}>
          <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} handleCheckout={handleCheckout} />
        </Col>
      </Row>
      {showCheckout && (
        <CheckoutForm cart={cart} handleCancelCheckout={handleCancelCheckout} />
      )}
    </Container>
  );
};

export default App;
