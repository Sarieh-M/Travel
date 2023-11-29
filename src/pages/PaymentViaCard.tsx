import './Styling/PaymentViaCard.css'
import PaymentViaCardForm from '../components/PaymentViaCardForm/PaymentViaCardForm';
const upi = require("../assets/card.png");
const PaymentViaCard: React.FC = () => {

  const handlePaymentSubmit = (cardNumber: string, expirationDate: string, cvv: string) => {
    // Handle the payment submission logic here
    console.log('Card Number:', cardNumber);
    console.log('Expiration Date:', expirationDate);
    console.log('CVV:', cvv);
  };

  return (
    <div className="paymentviacard_page_container">
      <img className="card_image" src={upi} alt="UPI" />
      <div className="card_form_container">
        <PaymentViaCardForm onSubmit={handlePaymentSubmit}/>
      </div>
    </div>
  );
};

export default PaymentViaCard;