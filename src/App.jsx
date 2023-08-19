// Import Modules_
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/Registration/RegistrationForm";
import LoginForm from "./components/Login/LoginPage";
import UserDetails from "./components/UserDetails/UserDetails";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

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
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginForm onLogin={handleLogin} />}></Route>
          <Route path="/registration" element={<RegistrationForm />}></Route>
          <Route
            path="/userPage"
            element={
              <UserDetails onLogout={handleLogout} user={loggedInUser} />
            }
          ></Route>
        </Routes>
      </>
    </div>
  );
};

export default App;
