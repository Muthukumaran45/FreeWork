import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import JobPostForm from "../pages/postJob";
import Message from "../pages/Message";
import BrowseJOb from "../pages/BrowseJob";
import Login from "../Regiter/Login";
import SignUp from "../Regiter/SignUp";
import NavbarBelow from "./NavbarBelow";

export default function Navbar() {
  return (
    <>
      <BrowserRouter>

        <header>
          <nav className="navbar navbar-light bg-light sticky-top ">
            <div>
              <Link className="navbar-brand nav_heading" to="/"><img id="logoWidth" src="../img/logo.png" alt="" /><span id="logo_first">reeWork</span></Link>
            </div>
            <div>
              <Link className="navbar-brand btn px-0 border-0" to="/login">Login</Link>
              <Link className="navbar-brand bg-success btn text-light p-0 pb-1 px-2" to="/signup"> Sign Up</Link>
            </div>
          </nav>
        </header>

        <NavbarBelow />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BrowseJob" element={<BrowseJOb />} />
          <Route path="/postJOb" element={<JobPostForm />} />
          <Route path="/message" element={<Message />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
