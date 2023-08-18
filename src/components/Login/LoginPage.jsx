import { useState } from "react";
import "./LoginForm.css"; // Import CSS file for styling

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Implement login logic here and call onLogin with user data if successful
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve registration details from local storage
    const storedRegistrationData = JSON.parse(
      localStorage.getItem("registrationFormData")
    );

    if (storedRegistrationData) {
      // Check if the entered identifier and password match the stored data
      if (
        (formData.identifier === storedRegistrationData.email ||
          formData.identifier === storedRegistrationData.mobileNumber) &&
        formData.password === storedRegistrationData.password
      ) {
        // Call the onLogin function with user data if successful
        onLogin(storedRegistrationData);
      } else {
        alert(
          "Invalid credentials. Please check your email/mobile number and password."
        );
      }
    } else {
      alert("No registration data found. Please register first.");
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="identifier"
          placeholder="Email/Mobile Number"
          value={formData.identifier}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
