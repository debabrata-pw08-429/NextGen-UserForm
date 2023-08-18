import "./userDetails.css";

const UserDetails = ({ user, onLogout }) => {
  return (
    <div className="user-details">
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Mobile Number: {user.mobileNumber}</p>
      <p>Age: {user.age}</p>
      <p>Address: {user.address}</p>
      <p>Gender: {user.gender}</p>
      <p>Occupation: {user.occupation}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserDetails;
