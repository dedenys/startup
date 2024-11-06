import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
  <div className="bg-secondary text-dark bg-light">
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-0 ">
        <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0  text-dark text-decoration-none">
          <h1>calender review application</h1>
        </a>
  
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="index.html" className="nav-link px-3 link-secondary">Home</a></li>
          <li><a href="calender.html" className="nav-link  px-3 ">MyCalender</a></li>
          <li><a href="concepts.html" className="nav-link px-3 ">Add/View Concepts</a></li>
          <li><a href="tally.html" className="nav-link px-3 ">Global Tally</a></li>
        </ul>
  
        <div className="col-md-3 text-end">
          <h6>user: username123</h6>
        </div>
      </header>
    </div>

    <main>main content here</main>

    <footer className="container">
      <span className="text-reset">Derek Denys</span>
      <a href="https://github.com/dedenys/startup">GitHub</a>
    </footer>

  </div>
  );
}