import { Link } from "react-router-dom";
import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom/dist";








export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      alert("Registered Successfully.Please Login");
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="bg-white rounded signup_box">
          <h2 className="mb-4 text-success">Sign Up</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter email here..."
                autoComplete="off"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control rounded border-success-subtle mt-1"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter password here..."
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control rounded border-success-subtle mt-1"
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              Register
            </button>
          </form>

          <p>Already Have an Account</p>
          <Link
            to="/login"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

