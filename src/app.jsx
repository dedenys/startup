import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Concepts } from './concepts/concepts';
import { Tally } from './tally/tally';
import { Calender } from './calender/calender';

export default function App() {
  return (
    <BrowserRouter>
  <div className="bg-secondary text-dark bg-light">
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-0 ">
        <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0  text-dark text-decoration-none">
          <h1>calender review application</h1>
        </a>
  
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          {/*<li><a href="index.html" className="nav-link px-3 link-secondary">Home</a></li>
          <li><a href="calender.html" className="nav-link  px-3 ">MyCalender</a></li>
          <li><a href="concepts.html" className="nav-link px-3 ">Add/View Concepts</a></li>
          <li><a href="tally.html" className="nav-link px-3 ">Global Tally</a></li> */}
          <li>
            <NavLink className='nav-link' to=''>Login</NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to='concepts'>Concepts</NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to='tally'>Tally</NavLink>
          </li>
          <li>
           <NavLink className='nav-link' to='calender'>Calender</NavLink>
          </li>

        </ul>
  
        <div className="col-md-3 text-end">
          <h6>user: username123</h6>
        </div>
      </header>
    </div>

    <Routes>
      <Route path='/' element={<Login />} exact />
      <Route path='/concepts' element={<Concepts />} />
      <Route path='/tally' element={<Tally />} />
      <Route path='/calender' element={<Calender />} />
      <Route path='*' element={<NotFound />} />
    </Routes>

    <footer className="container">
      <span className="text-reset">Derek Denys</span>
      <a href="https://github.com/dedenys/startup">GitHub</a>
    </footer>

  </div>
  </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}