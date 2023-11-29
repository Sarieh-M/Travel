import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SignUp.css";

const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSignUp = () => {};

  return (
    <form className="signup_form">
      <h2>Sign Up</h2>
      <input
        placeholder="Name"
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        id="password"
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        placeholder="Re-enter Password"
        type="password"
        id="reenterPassword"
        value={reenterPassword}
        onChange={(e) => setReenterPassword(e.target.value)}
      />

      <input
        placeholder="Phone"
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <div className="signup_checkbox">
        <input
          type="checkbox"
          id="agreeTerms"
          checked={agreeTerms}
          onChange={(e) => setAgreeTerms(e.target.checked)}
        />
        <label htmlFor="agreeTerms">I agree to the terms</label>
      </div>

      <button onClick={handleSignUp}>Sign Up</button>

      <div className="switch_to_login">
        <p>Already have an account?</p>
        <NavLink to="/" className=' switch_to_login_link'>&nbsp;Login</NavLink>
      </div>
    </form>
  );
};

export default SignUp;
