import SignUp from "../components/SignUp/SignUp";
import "./Styling/SignupPage.css";
const telescope = require("../assets/telescope.png");
const SignupPage: React.FC = () => {
  return (
    <div className="signup_page_container">
      <h1 className="signup_page_text_overlay">Welcome</h1>
      <img className="telescope_image" src={telescope} alt="Beach Telescope" />
      <div className="signup_form_container">
        <SignUp />
      </div>
    </div>
  );
};

export default SignupPage;
