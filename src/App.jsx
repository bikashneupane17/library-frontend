import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Signup } from "./pages/login-signup/Signup";
import { Login } from "./pages/login-signup/Login";
import { HomePage } from "./pages/home/HomePage";
import { Product } from "./pages/product/Product";
import { Dashboard } from "./pages/dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product" element={<Product />}></Route>

        {/* Private routes */}
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
