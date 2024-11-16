import React from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    //localStorage.setItem('userName', userName);
    //props.onLogin(userName);
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    //localStorage.setItem('userName', userName);
    //props.onLogin(userName);
    loginOrCreate(`/api/auth/create`);
  }


  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  return (
    <>
      {/* <div>

        
        <div className='input-group mb-3'>
          <span className='input-group-text'>@</span>
          <input className='form-control' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='your@email.com' />
        </div>
        <div className='input-group mb-3'>
          <span className='input-group-text'>🔒</span>
          <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        </div>
        <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
          Login
        </Button>
        <Button variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
          Create
        </Button>
      </div>

      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
      */}

      <div className="container-fluid rounded bg-white col-8 text-center d-flex align-items-center mb-4">
        <p className = "wordcontainer"> The Calender Review Application gives you an easy way to <span className="underline">review concepts</span>  you learn and maximize memory retention.</p>
      </div>

      <div className="container-fluid rounded col-4 text-center d-flex align-items-center justify-content-center">
        
       
        <form method="get" action="play.html">

            <input className="form-control mb-3" type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='your@email.com' />

            <input className="form-control mb-3" type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />



          <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
          Login
        </Button>
        <Button variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
          Create
        </Button>
          {/* <button type="submit" className="btn btn-primary">Login</button>
          <button type="submit" className="btn btn-secondary">Create</button> */}

        </form>
      </div>

      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}
