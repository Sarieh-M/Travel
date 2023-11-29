import React from "react";
import { NavLink } from "react-router-dom";
import './PaymentUPIForm.css';
import ScreenshotInput from './ScreenshotInput';

const PaymentUPI: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="paymentupi-container">
      <form className="paymentupi-form" onSubmit={handleSubmit}>
        <label id='first_label' htmlFor="companyNumber">Company number</label>
        <input type="text" id="companyNumber" placeholder="(225) 555-0118"/>
        <label id='second_label' htmlFor="screenshot">Add screenshot</label>
        <ScreenshotInput/>
      </form>
      <div className="switch-to-card-payment">
        <p>Or pay with:</p>
        <NavLink className="paymentcard_navlink" to="/paymentviacard">Visa card or Mastercard</NavLink>
      </div>
    </div>
  );
};

export default PaymentUPI;
