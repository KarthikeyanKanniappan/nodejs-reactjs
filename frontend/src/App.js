import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import { UserProvider } from "./UserContex";
import Final from "./pages/Final";

function App() {
  return (
    <div className="intro">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/userpage" element={<UserPage />} />
            <Route path="/final" element={<Final />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;

// import { env } from "../src/config.js";
// import axios from "axios";
