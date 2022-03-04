import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    joinNewsletter: true,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormInputs((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formInputs.password === formInputs.confirmPassword) {
      console.log("Successfully signed up");
    } else console.log("Password do not match");

    if (formInputs.joinNewsletter === true) {
      console.log("Thanks for joining our newsletter!");
      return;
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          value={formInputs.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          value={formInputs.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="confirmPassword"
          value={formInputs.confirmPassword}
          onChange={handleChange}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="joinNewsletter"
            checked={formInputs.joinNewsletter}
            onChange={handleChange}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
