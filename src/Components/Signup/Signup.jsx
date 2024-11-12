import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import img from "../../assets/images/img.png";
import signup from "../../assets/images/signup.jpg";
import { SiGoogle } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

function Signup() {
  const [selectedRole, setSelectedRole] = useState(""); // State to store the selected role

  // Handle role selection
  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedRole) {
      alert("Please select either 'Client' or 'Coach' to continue.");
      return;
    }
    // Proceed with form submission logic
    console.log("Form submitted with role:", selectedRole);
  };

  return (
    <div className="signup-container">
      <img className="bgimg" src={signup} alt="" />
      <div className="leftcont">
        <h1>Your growth story begins here, with CoachDost</h1>
        <img src={img} alt="Signup illustration" />
      </div>
      <div className="rightcont">
        <h2>Create Account</h2>

        {/* Role selection buttons */}
        <div className="buttons">
          <button
            className={`button-red ${
              selectedRole === "Client" ? "active" : ""
            }`}
            onClick={() => handleRoleSelect("Client")}
          >
            Client
          </button>
          <button
            className={`button-blue ${
              selectedRole === "Coach" ? "active" : ""
            }`}
            onClick={() => handleRoleSelect("Coach")}
          >
            Coach
          </button>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
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
            <SiGoogle color="#db4437" />
          </button>
          &nbsp;
          <button className="linkedin-login">
            <FaLinkedin color="#0077b5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
