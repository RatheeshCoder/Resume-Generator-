
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import FormStepper from './components/FormStepper/FormStepper';
import Resume from './components/Resume/resume';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="nav">
         
          <ul className="ul">
            <li className="li">
              <Link to="/formStepper" className="link">Create Resume</Link>
            </li>
            <li className="li">
              <Link to="/resume" className="link">View Resume</Link>
            </li>
          </ul>
        </nav>

      
        <Routes>
          <Route path="/formStepper" element={<FormStepper />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
