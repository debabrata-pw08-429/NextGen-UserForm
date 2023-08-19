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

const formFields = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Name",
    errorMessage:
      "* Username should be 3-16 characters and shouldn't include any special character!",
    label: <BiSolidUser />,
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "* It should be a valid gmail address!",
    label: <MdEmail />,
    pattern:
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
    required: true,
  },
  {
    id: 3,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
      "* Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    label: <IoMdLock />,
    pattern:
      "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
    required: true,
  },
  {
    id: 4,
    name: "mobileNumber",
    type: "text",
    placeholder: "Mobile Number",
    errorMessage: "* Required",
    label: <FaMobileAlt />,
    pattern: "",
    required: true,
  },
  {
    id: 5,
    name: "age",
    type: "number",
    placeholder: "Age",
    errorMessage: "* Age Should be in between 1 to 100",
    label: <PiPersonArmsSpreadFill />,
    pattern: "^(?:[1-9][0-9]?|100)$",
    required: true,
  },
  {
    id: 6,
    name: "address",
    type: "text",
    placeholder: "Address",
    errorMessage: "",
    label: <MdLocationPin />,
    pattern: "",
    required: true,
  },
  {
    id: 7,
    name: "occupation",
    type: "text",
    placeholder: "Occupation",
    errorMessage: "",
    label: <PiBagSimpleFill />,
    pattern: "",
    required: true,
  },
];

const RegistrationForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
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
    window.location = "/";
  };

  return (
    <div className="registerPage">
      <div className="registration-form">
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
          {formFields.map((field) => {
            let isValid = true;
            if (formData[field.name].length > 0 && field.pattern !== "") {
              const validRegex = new RegExp(field.pattern);
              isValid = validRegex.test(formData[field.name]);
            }

            return (
              <div className="form_group" key={field.id}>
                <label
                  htmlFor={field.name}
                  style={{
                    top: isValid ? "45%" : "25%",
                  }}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  required={field.required}
                  pattern={field.pattern !== "" ? field.pattern : null}
                  aria-invalid={isValid}
                  aria-errormessage={field.id}
                />
                {isValid ? null : (
                  <div id={field.id} className="error">
                    {field.errorMessage}
                  </div>
                )}
              </div>
            );
          })}

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
