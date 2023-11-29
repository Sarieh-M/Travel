import React from 'react';
import { ContactInfo } from './contactData';
import './ContactBox.css';

const phone = require('../../assets/phone.png');
const location = require('../../assets/location.png');
const mail = require('../../assets/mail.png');
const instagram = require('../../assets/instagram.png');

export interface ContactBoxProps {
  contactInfo: ContactInfo;
}

const ContactBox: React.FC<ContactBoxProps> = ({ contactInfo }) => {
  return (
    <div className="contact-box">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="phone">
          <img src={phone} alt="Phone Logo" />
          <div className="phone-numbers">
            {contactInfo.phoneNumbers.map((number, index) => (
              <p key={index}>{number}</p>
            ))}
          </div>
        </div>
        <div className="address">
          <img src={location} alt="Map Logo" />
          <p>{contactInfo.address}</p>
        </div>
        <div className="email">
          <img src={mail} alt="Mail Logo" />
          <div className="email-addresses">
            {contactInfo.emailAddresses.map((email, index) => (
              <p key={index}>{email}</p>
            ))}
          </div>
        </div>
        <div className="instagram">
          <img src={instagram} alt="Instagram Logo" />
          <p>@{contactInfo.instagramUsername}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;