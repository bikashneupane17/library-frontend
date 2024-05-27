import "./App.css";

import { Route, Routes } from "react-router-dom";

import { AddNewBook } from "./pages/books/AddNewBook";
import { AdminList } from "./pages/user/AdminList";
import { AllBurrow } from "./pages/burrow/AllBurrow";
import { BookList } from "./pages/books/BookList";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { EditBook } from "./pages/books/EditBook";
import { HomePage } from "./pages/home/HomePage";
import { Login } from "./pages/login-signup/Login";
import { MyBurrow } from "./pages/burrow/MyBurrow";
import { Signup } from "./pages/login-signup/Signup";
import { StudentsList } from "./pages/user/StudentsList";
import { ToastContainer } from "react-toastify";
import { UserProfile } from "./pages/user/UserProfile";

function App() {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>

        {/* Private routes */}
        {/* admin access only  */}
        {/* books */}
        <Route path="/admin/books" element={<BookList />}></Route>
        <Route path="/admin/books/new" element={<AddNewBook />}></Route>
        <Route path="/admin/books/edit/:_id" element={<EditBook />}></Route>

        {/* user */}
        <Route path="/admin/students" element={<StudentsList />}></Route>
        <Route path="/admin/admins" element={<AdminList />}></Route>
        <Route path="/admin/all-burrows" element={<AllBurrow />}></Route>

        {/* both admin and students  */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-books" element={<MyBurrow />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
