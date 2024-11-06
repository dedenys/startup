import React from 'react';

export function Login() {
  return (
    <main className="container rounded bg-custom text-center ">
      <h1>Welcome to the Calender Review Application! 🤗</h1>
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
      </div>
    </main>
  );
}