import "./App.css";

import { Route, Routes } from "react-router-dom";

import { AddNewBook } from "./pages/books/AddNewBook";
import { AdminList } from "./pages/user/AdminList";
import { BookList } from "./pages/books/BookList";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { EditBook } from "./pages/books/EditBook";
import { HomePage } from "./pages/home/HomePage";
import { Login } from "./pages/login-signup/Login";
import { Signup } from "./pages/login-signup/Signup";
import { StudentsList } from "./pages/user/StudentsList";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>

        {/* Private routes */}
        <Route path="/admin/books" element={<BookList />}></Route>
        <Route path="/admin/books/new" element={<AddNewBook />}></Route>
        <Route path="/admin/books/edit/:_id" element={<EditBook />}></Route>
        <Route path="/admin/students" element={<StudentsList />}></Route>
        <Route path="/admin/admins" element={<AdminList />}></Route>

        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
