import './Service.css'

interface MyComponentProps {
  index: number;
  imageLink: string;
  text: string;
}
const rightarrow = require('../../assets/rightarrow.png');
const leftarrow = require('../../assets/leftarrow.png');
const Service: React.FC<MyComponentProps> = ({ index, imageLink, text }) => {
  const isOdd = index % 2 !== 0;

  return (
    <div className="service_container">
      {isOdd ? (
        <>
          <h2>{text}</h2>
          <img src={rightarrow} alt="Right Arrow" className="arrow" />
          <img src={imageLink} alt="service" className="picture" />
        </>
      ) : (
        <>
          <img src={imageLink} alt="service" className="picture" />
          <img src={leftarrow} alt="Left Arrow" className="arrow" />
          <h2>{text}</h2>
        </>
      )}
    </div>
  );
};

export default Service;