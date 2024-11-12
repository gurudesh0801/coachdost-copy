import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import img from "../../assets/images/img.png";
import { SiGoogle } from "react-icons/si"; // Google icon
import { FaLinkedin } from "react-icons/fa"; // LinkedIn icon

function Signup() {
  return (
    <div className="signup-container">
      <div className="leftcont">
        <h1>Your growth story begins here, with CoachDost</h1>
        <img src={img} alt="Signup illustration" />
      </div>
      <div className="rightcont">
        <h2>Create Account</h2>
        <div className="buttons">
          <button className="button-red">Button</button>
          <button className="button-blue">Button</button>
          <button className="button-purple">Button</button>
        </div>

        <form className="signup-form">
          <div className="form-row">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Phone Number" required />
            <input type="email" placeholder="Email" required />
          </div>
          <input type="password" placeholder="Password" required />
          <button type="submit" className="create-account-button">
            Create Account
          </button>
        </form>

        <p className="login-text">
          Already have an account? <Link to="/login">login</Link>
        </p>

        <div className="social-login">
          <button className="google-login">
            Sign in with &nbsp;
            <SiGoogle color="#db4437" />
          </button>
          <button className="linkedin-login">
            Sign in with &nbsp;
            <FaLinkedin color="#0077b5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
