import React from 'react';
import './concepts.css';




function calcDayofWeek(curDay) {
  if (curDay === 1) {
    return "Monday";
  }
  else if (curDay === 2 ) {
    return "Tuesday";
  }
  else if (curDay === 3 ) {
    return "Wednesday";
  }
  else if (curDay === 4 ) {
    return "Thursday";
  }
  else if (curDay === 5 ) {
    return "Friday";
  }
  else if (curDay === 6 ) {
    return "Saturday";
  }
  else {
    return "Sunday";
  }
}

function addConcept() {

}

export function Concepts() {

  const today = new Date();

  const [text, updateText] = React.useState("abc");

  // When the color changes update the state
  const onChange = (e) => {
    updateText(e.target.value);
  };

  return (
    <main className="expand container rounded text-center ">

        
        <h2>Add New Concept</h2>
        <form method="get">
            <p>Enter concepts you learned today here</p>
            <div>
              {/* <input className="form-control mb-2" type="text" placeholder="enter concept here" /> */}
              <input className="form-control mb-2" type="text" onChange={(e) => onChange(e)} value={text} />
            </div>
            <p>{calcDayofWeek(today.getDay())}</p>
            <button className="btn btn-secondary" onClick={() => addConcept()}>
            Add Concept
            </button>
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