import { useState } from "react";
import RegistrationForm from "./components/Registration/RegistrationForm";
// import LoginForm from "./components/Login/LoginPage";
// import UserDetails from "./components/UserDetails/UserDetails";
import "./App.css";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div className="app">
      {/* {loggedInUser ? (
        <UserDetails user={loggedInUser} onLogout={handleLogout} />
      ) : (
        <div className="auth-container">
          <RegistrationForm />
          <LoginForm onLogin={handleLogin} />
        </div>
      )} */}

      <RegistrationForm />
    </div>
  );
};

export default App;
