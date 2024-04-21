import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom/dist";


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log(email + " " + password);

      navigate("/");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <>
      <div className='d-flex justify-content-center align-items-center  login_page '>
        <div className="bg-white rounded login_box">
          <h2 className='mb-4 text-success'>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email </strong>
              </label>
              <input
                className="form-control rounded border-success-subtle mt-1"
                type="email"
                placeholder="Enter email here..."
                autoComplete="off"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password </strong>
              </label>
              <input
                className="form-control rounded border-success-subtle mt-1"
                type="password"
                placeholder="Enter password here..."
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
          </form>

          <p>Don't Have an Account</p>
          <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Sign Up</Link>
        </div>
      </div>

    </>
  );
}


