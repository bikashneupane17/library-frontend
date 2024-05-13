import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Signup } from "./pages/login-signup/Signup";
import { Login } from "./pages/login-signup/Login";
import { HomePage } from "./pages/home/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
