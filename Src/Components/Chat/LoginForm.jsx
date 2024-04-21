import React, { useState } from 'react';
function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim() !== '') {
      onLogin(username.trim());
    }
  };

  return (
    <>
      <h2 className='text-center mt-5 chat_page_heading'>Freelancer Chat Page</h2>
      <p className='text-center'>First you need to Login here and it will go to the Chat page.</p>
      <div className='container d-flex justify-content-center align-items-center'>
        <div id='chatLogin'>

          <form>
            <h2 className='mb-5 text-success'>Login</h2>

            <div>
              <label htmlFor='text'>
                <strong>
                  UserName :
                </strong>
              </label>
              <input className='form-control mt-1 border-success-subtle' type="text" placeholder="Enter username..." autoComplete="off" name="email" value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
              <button className='btn btn-success w-100 my-3' onClick={handleLogin}>Login</button>
            </div>

          </form>
        </div>
      </div>
    </>

  );
}

export default LoginForm;
