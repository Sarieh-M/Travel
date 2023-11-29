import React from "react";
import "./OurServiceSection.css";
import Service from './Service';
const menuicon = require("../../assets/menuicon.png");

const data = [
  { index: 1, imageLink:  require("../../assets/airplane.png"), text: 'Airplane ticket' },
  { index: 2, imageLink:  require("../../assets/hotel.png"), text: 'Hotel reservation' },
  { index: 3, imageLink:  require("../../assets/visa.png"), text: 'Visa exportation' },
  { index: 4, imageLink:  require("../../assets/tourism.png"), text: 'Tourism trips' }
];


interface DataItem {
  index: number;
  imageLink: string;
  text: string;
}

const OurServiceSection: React.FC = () => {
  const renderServicesFromArray = (data: DataItem[]): JSX.Element[] => {
    return data.map((item) => (
      <Service
        key={item.index}
        index={item.index}
        imageLink={item.imageLink}
        text={item.text}
      />
    ));
  };
  const services = renderServicesFromArray(data);
;
  return (
    <div className="ourservices" id='ourservice-section'>
      <div className="mid-section-header">
        <img src={menuicon} alt="menu" className="mid-section-menu" />
        <h2 className="header-text">Our Services</h2>
      </div>
      <section className="services-section">
      {services}
      </section>
    </div>
  );
};

export default OurServiceSection;
