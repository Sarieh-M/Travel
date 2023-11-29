import "./Styling/ContactPage.css";
import ContactBox from '../components/contactbox/ContactBox';
import { ContactInfo } from "../components/contactbox/contactData";

const contactInfo: ContactInfo = {
  phoneNumbers: ['(225) 555-0118', '(808) 555-0111'],
  address: '2715 Ash Dr. San Jose, South Dakota 83475',
  emailAddresses: ['curtis.weaver@example.com', 'jackson.graham@example.com'],
  instagramUsername: 'username',
};

const ContactPage: React.FC = () => {
  const telescope = require("../assets/staff.png");
  return (
    <div className="contact_page_container">
      <img className="staff_image" src={telescope} alt="Beach Telescope" />
      <div className="contact_information_container">
        <ContactBox contactInfo={contactInfo}/>
      </div>
    </div>
  );
};

export default ContactPage;