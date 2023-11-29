import './Footer.css';

const facebookIcon = require('../../assets/facebookicon.png');
const twitterIcon = require('../../assets/twittericon.png');
const instagramIcon = require('../../assets/instagramicon.png');
const phoneIcon = require('../../assets/phoneicon.png');
const mailIcon = require('../../assets/mailicon.png');

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div className='footer_socialmedia'>
        <a href="https://www.facebook.com"><img src={facebookIcon} className='footer-image' alt="Facebook" /></a>
        <a href="https://www.twitter.com"><img src={twitterIcon} className='footer-image' alt="Twitter" /></a>
        <a href="https://www.instagram.com"><img src={instagramIcon} className='footer-image' alt="Instagram" /></a>
        <span>@username</span>
      </div>
      <div className='footer_phone'>
        <img src={phoneIcon} className='footer-image' alt="Phone" />
        <span>(225) 555-0118</span>
      </div>
      <div className='footer_mail'>
        <a href="mailto:mail@example.com"><img src={mailIcon} className='footer-image' alt="Mail" /></a>
        <span>mail@example.com</span>
      </div>
    </div>
  );
};

export default Footer;
