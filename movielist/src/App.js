// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import CompanyInfo from "./Components/CompanyInfo/CompanyInfor";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/company-info" element={<CompanyInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
