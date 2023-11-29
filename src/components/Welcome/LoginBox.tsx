import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./LoginBox.css";
const LoginBox: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log("Logging in...");
  };

  return (
      <form className="login_form_container">
        <label className="login_label">Log in</label>
        <input
          className="input"
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className="Login_button" onClick={handleLogin}>Login</button>
        <div className="signup_container">
          <label className="sign-up-label">New here?</label>
          <NavLink to="/signup" className="sign-up-button">
            &nbsp;Sign up
          </NavLink>
        </div>
      </form>
  );
};

export default LoginBox;
