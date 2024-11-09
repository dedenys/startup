import React from 'react';
import './login.css';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className="container rounded bg-custom-two text-center ">

<     div>
        {authState !== AuthState.Unknown && <h1 className='mb-4'>Welcome to the Calender Review Application! 🤗</h1>}
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>



      {/* <h1>Welcome to the Calender Review Application! 🤗</h1>
      <div className="container-fluid rounded bg-white col-8 text-center d-flex align-items-center">
        <p className = "wordcontainer"> The Calender Review Application gives you an easy way to <span className="underline">review concepts</span>  you learn and maximize memory retention.</p>
      </div>

      <div className="container-fluid rounded col-4 text-center d-flex align-items-center justify-content-center">
        
       
        <form method="get" action="play.html">

            <input className="form-control mb-2" type="text" placeholder="your@email.com" />

            <input className="form-control mb-2" type="password" placeholder="password" />


          <button type="submit" className="btn btn-primary">Login</button>
          <button type="submit" className="btn btn-secondary">Create</button>

        </form>
      </div> */}
    </main>
  );
}