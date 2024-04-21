import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function JobPostForm() {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="container" id='postJob'>
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
      <h1 className="text-center pb-5" id='postjob_heading'>CRAFT YOUR MISSION HERE</h1>
          <div className="mb-3">
            <label htmlFor="projectName" className="form-label">Project Name:</label>
            <input className="form-control border-success-subtle" type="text" autoComplete='off' id="projectName" name="projectName"  required minLength="2" maxLength="100" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Job Description:</label>
            <textarea className="form-control border-success-subtle" id="description" name="description"  rows="4" cols="50" required minLength="20" maxLength="800" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
          </div>

          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      ) : (
        <div className="popup-container">
          <div className="popup">
            <h2 className='text-center'>Form Submitted</h2>
            <p>Your form has been successfully submitted!</p>
            <div className='text-center'>
              <Link className='btn btn-secondary text-light px-5' to='/'>Back</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobPostForm;
