import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import './authenticated.css';
import './login.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    //localStorage.removeItem('userName');
    //props.onLogout();
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });
  }

  return (
    <div>
      <div className="container-fluid rounded bg-white col-8 text-center d-flex align-items-center mb-4">
      <div className='playerName wordcontainer'>{props.userName}</div>
      </div>
      
      <Button variant='primary' onClick={() => navigate('/calender')}>
        Calender
      </Button>
      <Button variant='secondary' onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}
