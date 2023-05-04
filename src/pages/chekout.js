import React, { useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import { useHistory } from "react-router-dom";

const Checkout = (props) => {
  const [paymentInfo, setPaymentInfo] = useState(null);
  const history = useHistory();

  const handlePayment = (paymentData) => {
    setPaymentInfo(paymentData);
  };

  const handleConfirm = () => {
    // TODO: Make API call to confirm payment
    history.push("/confirmation");
  };

  return (
    <div className="container">
      <h2>Checkout</h2>
      <div className="row">
        <div className="col-md-6">
          <CheckoutForm onPayment={handlePayment} />
        </div>
        <div className="col-md-6">
          <h4>Order Summary</h4>
          <p>Package Name: {props.package.name}</p>
          <p>Package Price: {props.package.price}</p>
          {paymentInfo && (
            <button className="btn btn-primary" onClick={handleConfirm}>
              Confirm Payment
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
