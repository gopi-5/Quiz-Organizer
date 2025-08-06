import React from "react";
import './register.css';

const Register = () => {
  return (
    <div className="register-container">
      <h2>Registration Form</h2>
      <form id="registerForm">
        <label htmlFor="name">Team-Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="age">Team-Members:</label>
        <input type="number" id="age" name="age" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="mobile">Mobile No.:</label>
        <input type="text" id="mobile" name="mobile" required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
