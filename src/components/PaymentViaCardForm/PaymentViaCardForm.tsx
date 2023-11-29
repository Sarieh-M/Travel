import {useState} from "react";
import { NavLink } from "react-router-dom";
import "./PaymentViaCardForm.css";
import CustomInput from "./CustomInput";

const MasterCardIcon = require('../../assets/MasterCardIcon.png');
const VisaIcon = require('../../assets/VisaIcon.png');


interface PaymentViaCardFormProps {
  onSubmit: (cardNumber: string, expirationDate: string, cvv: string) => void;
}

const PaymentViaCardForm: React.FC<PaymentViaCardFormProps> = ({ onSubmit }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };

  const handleExpirationDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpirationDate(e.target.value);
  };

  const handleCVVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCVV(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(cardNumber, expirationDate, cvv);
  };
  return (
    <div className="paymentviacardform-container">
      <h2>Payment Via Card</h2>
      <form className="paymentviacardform">
        <div className="cardnumber-container">
          <CustomInput
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="Card number"
            logo1={MasterCardIcon}
            logo2={VisaIcon}
          />
        </div>
        <div className='date-cvv'>
          <input 
          type="text"
          id="expirationDate"
          value={expirationDate}
          onChange={handleExpirationDateChange}
          placeholder="Expiration date MM/YY"
          required/>
          <input 
          type="text"
          id="cvv"
          value={cvv}
          onChange={handleCVVChange}
          placeholder="CVV"
          required/>
        </div>
        <button type="submit" onSubmit={handleSubmit}>Submit Payment</button>
      </form>
      <p>
        Or pay with <NavLink id='switchtoUPI' to="/paymentupi">Paytm & UP</NavLink>
      </p>
    </div>
  );
};

export default PaymentViaCardForm;
