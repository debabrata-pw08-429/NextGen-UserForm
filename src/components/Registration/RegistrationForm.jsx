import "./registrationform.css";
import { useState } from "react";
import {
  BiSolidUser,
  MdEmail,
  MdLocationPin,
  IoMdLock,
  FaMobileAlt,
  PiPersonArmsSpreadFill,
  FaTransgender,
  PiBagSimpleFill,
} from "./IconProps";

const RegistrationForm = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    age: "",
    address: "",
    gender: "",
    occupation: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function isValidGmailAddress(email) {
    const gmailRegex = /^[\w.-]+@gmail\.com$/i; // Case-insensitive match
    return gmailRegex.test(email);
  }

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidGmailAddress(formData.email)) {
      newErrors.email = "Invalid Gmail format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Implement validation logic and registration submission here
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      localStorage.setItem("registrationFormData", JSON.stringify(formData));

      setFormData({
        name: "",
        email: "",
        password: "",
        mobileNumber: "",
        age: "",
        address: "",
        gender: "",
        occupation: "",
      });

      alert("Registration successful!");
    } else {
      alert(errors);
    }
  };

  return (
    <div className="registerPage">
      <div className="registration-form">
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="form_group">
            <label htmlFor="name">
              <BiSolidUser />
            </label>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

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

          <div className="form_group">
            <label htmlFor="email">
              <FaMobileAlt />
            </label>
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="email">
              <PiPersonArmsSpreadFill />
            </label>
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="email">
              <MdLocationPin />
            </label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="email">
              <FaTransgender />
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <div className="error">{errors.gender}</div>}
          </div>

          <div className="form_group">
            <label htmlFor="occupation">
              <PiBagSimpleFill />
            </label>
            <input
              type="text"
              name="occupation"
              placeholder="Occupation"
              value={formData.occupation}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="Check_register_form">
            <div>
              <input type="checkbox" name="agree-term" />
            </div>
            <p>
              I agree all statements in <a href="#">Terms of service</a>
            </p>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
      <div>
        <img
          src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default RegistrationForm;
