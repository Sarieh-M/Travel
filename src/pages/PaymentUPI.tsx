import './Styling/PaymentUPI.css'
import PaymentUPIForm from '../components/PaymentUPIForm/PaymentUPIForm';
const upi = require("../assets/upi.png");
const PaymentUPI: React.FC = () => {
  return (
    <div className="paymentupi_page_container">
      <h1 className="paymentupi_page_text_overlay">Payment with Paytm & UPI</h1>
      <img className="UPI_image" src={upi} alt="UPI" />
      <div className="UPI_form_container">
        <PaymentUPIForm/>
      </div>
    </div>
  );
};

export default PaymentUPI;
