import React from 'react';
import './calender.css';
import Button from 'react-bootstrap/Button';
import { GameEvent, GameNotifier } from './gameNotifier';


async function updateConcepts(concepts, email) {
  await fetch('/api/concept', {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify([concepts, email]),
  });
}

async function deleteConcepts() {
  let l = [];
  updateConcepts(l);
}

async function saveConcept(concept) {
  await fetch('/api/concept', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(concept),
  });
}

async function retreiveConcepts(setConcepts) {
  fetch('/api/concepts')
      .then((response) => response.json())
      .then((testing) => {
        setConcepts(testing);
        //return testing;
    });
}

function parseConcepts(name, concepts) {
  let myarray = [];
  if (concepts.length) {
    for (const [i, concept] of concepts.entries()) {
      if (concept.name === name) {
        let newConcept = concept;
        newConcept.nextReview = concept.nextReview + 1
        myarray.push(newConcept)
      }
      else {
        myarray.push(concept)
      }
    }
  }

  return myarray;
}
async function grabConcepts(setConcepts) {
  fetch('/api/concepts?email=' + email)
      .then((response) => response.json())
      .then((testing) => {
        setConcepts(testing);
  });
}

async function reviewConcept(name, onUpdate, concepts, setConcepts, email, setButton) {
    //let concepts = [];
    setButton(true);
    GameNotifier.broadcastEvent(name, GameEvent.Start, {});

    incrementTally();

    //const conceptTest = localStorage.getItem('concepts');
    //if (conceptTest) {
    //  concepts = JSON.parse(conceptTest);
    //}

    //let realConcepts = []

    //updateConcepts( { name: 'c', date: '2024-11-20T04:51:48.060Z', nextReview: 21 } );

    //let test = retreiveConcepts;
    //retreiveConcepts(setConcepts);
    //console.log(concepts);
    //let l = [];
    //updateConcepts(l);
    //deleteConcepts();
    //console.log("####")
    //console.log(concepts);
    //console.log("####")
    //console.log(name);
    //console.log("####")

    var finalConcepts = [];
    //console.log(finalConcepts);
    //console.log(finalConcepts);
    //console.log(finalConcepts);

    if (concepts.length) {
          for (const [i, concept] of concepts.entries()) {
            if (concept.name === name) {
              console.log("WORKED");
              let newConcept = concept;
              newConcept.nextReview = concept.nextReview + 1
              finalConcepts.push(newConcept)
            }
            else {
              finalConcepts.push(concept)
            }
          }
        }

      console.log(finalConcepts);

      await updateConcepts(finalConcepts, email);
     // await grabConcepts(setConcepts);

      //incrementTally();

     // finalConcepts = await parseConcepts(name, concepts);
      //finalConcepts = [{"test":321}];

      //updateConcepts(finalConcepts);

    

      //localStorage.setItem('concepts', JSON.stringify(finalConcepts));

      //onUpdate()
      setButton(false);

}

async function incrementTally () {
  await fetch('/api/tally', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({number:1}),
  });
}

export function Task( {name, onUpdate, email, currentDay} ) {

  const [concepts, setConcepts] = React.useState([]);
  const [showButton, setButton] = React.useState(false);
  //const today = new Date();

  //console.log(currentDay)

  //console.log(email);

  fetch('/api/concepts?email=' + email)
      .then((response) => response.json())
      .then((testing) => {
        setConcepts(testing);
  });

    //currentDay &&
    //disabled={!(currentDay)}
    //let showButton = true;

    return (
        <div className="mb-2 mx-auto">
              <p>{name}</p>
              { currentDay &&
              <Button className="btn btn-secondary" onClick={() => reviewConcept(name, onUpdate, concepts, setConcepts, email, setButton)}>
            Check off
            </Button>
              }
              
         </div>
    );
}