import React from 'react';
import './concepts.css';

export function Concepts() {
  return (
    <main className="expand container rounded text-center ">

        
        <h2>Add New Concept</h2>
        <form method="get">
            <p>Enter concepts you learned today here</p>
            <div>
              <input className="form-control mb-2" type="text" placeholder="enter concept here" />
            </div>
            <button className="btn btn-secondary" type="submit">Add Concept</button>
        </form>

        <hr />


        <h2>Concept Database</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Concept</th>
            <th>Date Added</th>
            <th>Next Review Date</th>
            <th>Past Revision Dates</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>L'Hospitals Rule</td>
            <td>11/11/2011</td>
            <td>11/15/2011</td>
            <td>11/12/2011</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Fundamental Theorem of Calculus</td>
            <td>11/12/2011</td>
            <td>11/17/2011</td>
            <td>11/13/2011,11/15/2011</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Euler's Method</td>
            <td>11/14/2011</td>
            <td>11/20/2011</td>
            <td>11/15/2011,11/16/2011</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}