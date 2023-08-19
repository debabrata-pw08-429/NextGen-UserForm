import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for props validation
import "./loginForm.css";
import { MdEmail, IoMdLock, FaMobileAlt } from "../Registration/IconProps";

const LoginForm = ({ onLogin }) => {
  // State for toggling between email and mobile number login
  const [alterLogin, setAlterLogin] = useState(false);

  // State for form data
  const [formData, setFormData] = useState({
    email: "",
    mobileNumber: "",
    password: "",
  });

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve registration details from local storage
    const storedData =
      JSON.parse(localStorage.getItem("registrationFormData")) || 0;

    if (storedData) {
      if (
        (storedData.email === formData.email &&
          storedData.password === formData.password) ||
        storedData.mobileNumber === formData.mobileNumber
      ) {
        onLogin(storedData);
        window.location = "/userPage";
        localStorage.setItem("logIn", true);
      } else {
        alert("Invalid Credentials!!!");
      }
    } else {
      alert("Please Register your details first!!!");
    }
  };

  return (
    <div className="login_form_box">
      <div className="login-form">
        <div className="login_title">
          <h2>Welcome back</h2>
          <p>Please enter your login information.</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Conditionally render email or mobile number fields */}
          {alterLogin ? (
            <div className="form_group">
              <label htmlFor="text">
                <FaMobileAlt />
              </label>
              <input
                type="text"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                required
              />
            </div>
          ) : (
            <>
              <div className="form_group">
                <label htmlFor="email">
                  <MdEmail />
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form_group">
                <label htmlFor="password">
                  <IoMdLock />
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </>
          )}

          <button type="submit">Login</button>
        </form>
        <div>
          <hr className="or_line" />
          <span>OR</span>
        </div>
        <button
          className="Alternate_Login"
          onClick={() => setAlterLogin(!alterLogin)}
        >
          {alterLogin ? "Login with Email" : "Login with mobile number"}
        </button>

        <p>
          {"Don't have an account?"} <a href="/registration">Register Now</a>
        </p>
      </div>
    </div>
  );
};

// Props validation using PropTypes
LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired, // Function to call on login
};

export default LoginForm;
