import React from 'react';
import './tally.css';

export function Tally(props) {
  return (
    <main className="container rounded bg-world text-center">
      

      

      <div className="container rounded bg-white col-6 text-center">
        <h1 className="mt-4">Global Revision Tally 🌐</h1>
        <div className="paddingcontainer">
      <p className="text1">There are currently . . .</p>
      <h2>{props.tallyNumber}</h2>
      <p className="text1">global revisions</p>
    </div>
    </div>

    </main>
  );
}