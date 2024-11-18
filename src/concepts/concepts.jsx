import React from 'react';
import './concepts.css';

import Button from 'react-bootstrap/Button';
import { Database } from './database';


async function updateConcepts(concepts) {
  await fetch('/api/concept', {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(concepts),
  });
}


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


function addConcept(conceptToAdd, today, tallyFunction, setConcepts, setVar) {

    let concepts = [];

    const conceptTest = localStorage.getItem('concepts');
    if (conceptTest) {
      concepts = JSON.parse(conceptTest);
    }

    const future = new Date(today);
    future.setDate(today.getDate() + 1);
    let concept = {name: conceptToAdd, date: today, nextReview: future.getUTCDate()}

    saveConcept(concept);

    concepts.push(concept)

    localStorage.setItem('concepts', JSON.stringify(concepts));
    
    const conceptsText = localStorage.getItem('concepts');
    if (conceptsText) {
      //setConcepts(JSON.parse(conceptsText));
     // setConcepts(concepts);
    }

    setVar(true);

    //setConcepts(JSON.stringify(concepts));
    

    

}


async function saveConcept(concept) {
  await fetch('/api/concept', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(concept),
  });
}

async function deleteConcepts() {
  let l = [];
  updateConcepts(l);
}


export function Concepts( {onUpdate}) {

  const today = new Date();

  const [text, updateText] = React.useState("");

  const [concepts, setConcepts] = React.useState([]);

  const [myvar, setVar] = React.useState(false);

  // When the color changes update the state
  const onChange = (e) => {
    updateText(e.target.value);
  };

  const handleTally = () => {
    onUpdate();
  };

  fetch('/api/concepts')
      .then((response) => response.json())
      .then((testing) => {
        setConcepts(testing);
  });
 

  // Demonstrates calling a service asynchronously so that
  // React can properly update state objects with the results.

  React.useEffect(() => {
    const conceptsText = localStorage.getItem('concepts');
    if (conceptsText) {
      setConcepts(JSON.parse(conceptsText));
    }

  }, []);

  return (
    <main className="expand container rounded text-center ">

        
        <h2>Add New Concept</h2>
        <form method="get">
            <p>Enter concepts you learned today here</p>
            <div>
              {/* <input className="form-control mb-2" type="text" placeholder="enter concept here" /> */}
              <input className="form-control mb-2" type="text" onChange={(e) => onChange(e)} value={text} />
            </div>
            <Button className="btn btn-secondary" onClick={() => addConcept(text, today, handleTally, setConcepts,setVar)}>
            Add Concept
            </Button>
            <Button className="btn btn-secondary" onClick={() => deleteConcepts()}>
            Clear Concepts
            </Button>
        </form>

        <hr />

        {/* 
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
      */}

      <Database key={myvar} concepts={concepts}/>

    </main>
  );
}