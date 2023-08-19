import PropTypes from "prop-types";
import "./userDetails.css";

/**
 * Component to display user details and handle logout functionality.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.user - User details object containing name, email, mobileNumber, age, address, gender, and occupation.
 * @param {function} props.onLogout - Function to handle the logout action.
 * @returns {JSX.Element} - Rendered component.
 */

const UserDetails = ({ user }) => {
  // Retrieve registration details from local storage
  const storedData = JSON.parse(localStorage.getItem("registrationFormData"));
  const isLoggedIn = localStorage.getItem("logIn");
  user = storedData;

  return (
    <>
      <div className="user-details">
        {!isLoggedIn ? (
          <>
            <h1>Please Login First!</h1>
            <button
              onClick={() => {
                localStorage.setItem("logIn", false);
                window.location.pathname = "/";
              }}
            >
              Go To Login
            </button>
          </>
        ) : (
          <>
            <h2>User Details</h2>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <p>Mobile Number: {user?.mobileNumber}</p>
            <p>Age: {user?.age}</p>
            <p>Address: {user?.address}</p>
            <p>Gender: {user?.gender}</p>
            <p>Occupation: {user?.occupation}</p>
            <button
              onClick={() => {
                localStorage.setItem("logIn", false);
                window.location.pathname = "/";
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </>
  );
};

// Prop validation
UserDetails.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    mobileNumber: PropTypes.string,
    age: PropTypes.number,
    address: PropTypes.string,
    gender: PropTypes.string,
    occupation: PropTypes.string,
  }),
  onLogout: PropTypes.func.isRequired,
};

export default UserDetails;
