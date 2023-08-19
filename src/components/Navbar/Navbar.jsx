import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom for navigation
import "./navbar.css"; // Import the CSS for styling
import { BsGithub } from "react-icons/bs"; // Import GitHub icon from react-icons
import Logo from "../../assets/react.svg"; // Import the logo image

const Navbar = () => {
  return (
    <>
      {/* Main navigation container */}
      <nav className="nav">
        {/* Clickable logo */}
        <div onClick={() => (window.location.href = "/")}>
          <img src={Logo} alt="logo" className="logo-nav" />
          <h1>NextGen</h1>
        </div>

        {/* Sub navigation */}
        <nav className="nav_sub">
          {/* NavLink for registration */}
          <NavLink
            to="/registration"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                borderRadius: isActive ? "8px" : "",
                color: isActive ? "white" : "white",
                padding: isActive ? "8px" : "",
                fontSize: "1rem",
              };
            }}
          >
            Register
          </NavLink>

          {/* NavLink for GitHub repository */}
          <NavLink
            to="https://github.com/debabrata-pw08-429/NextGen-UserForm"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                borderRadius: isActive ? "8px" : "",
                color: isActive ? "white" : "white",
                padding: isActive ? "8px" : "",
                fontSize: "30px",
              };
            }}
            target="_blank"
          >
            <BsGithub /> {/* GitHub icon */}
          </NavLink>
        </nav>
      </nav>
    </>
  );
};

export default Navbar; // Export the Navbar component
