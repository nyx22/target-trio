import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.js";
import Signup from "./components/Signup/Signup.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home.js";
import UserHome from "./pages/UserHome.js";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import VendorHome from "./pages/VendorHome.js";

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/user" element={<UserHome />}></Route>
        <Route path="/vendor" element={<VendorHome />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;