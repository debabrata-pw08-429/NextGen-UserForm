import { useState } from "react";
import "./LoginForm.css";
import { MdEmail, IoMdLock, FaMobileAlt } from "../Registration/IconProps";

const LoginForm = ({ onLogin }) => {
  const [alterLogin, setAlterLogin] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    mobileNumber: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve registration details from local storage
    const storedData = JSON.parse(localStorage.getItem("registrationFormData"));

    if (
      (storedData.email === formData.email &&
        storedData.password === formData.password) ||
      storedData.mobileNumber === formData.mobileNumber
    ) {
      onLogin(storedData);
      window.location = "/userPage";
    } else {
      alert("Invalid Credentials!!!");
    }
  };

  return (
    <div className="login_form_box">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {alterLogin ? (
            <>
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
            </>
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
          {"Don't have an account?"} <a href="">Register Now</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
