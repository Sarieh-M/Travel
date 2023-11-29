import Welcome from "../components/Welcome/Welcome";
import "./Styling/LandingPage.css";
const LandingPage: React.FC = () => {
  
  const mosque = require("../assets/mosque.png");
  return (
    <div className="landingpage_container">
      <Welcome />
      <img className="image" src={mosque} alt="Mosque" />
    </div>
  );
};
export default LandingPage;
