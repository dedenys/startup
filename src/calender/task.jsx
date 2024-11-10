import React from 'react';
import './calender.css';
import Button from 'react-bootstrap/Button';


function reviewConcept(name) {
    let concepts = [];

    const conceptTest = localStorage.getItem('concepts');
    if (conceptTest) {
      concepts = JSON.parse(conceptTest);
    }

    let finalConcepts = [];

    if (concepts.length) {
        for (const [i, concept] of concepts.entries()) {
          if (concept.name === name) {
            let newConcept = concept;
            newConcept.nextReview = concept.nextReview + 1
            finalConcepts.push(newConcept)
          }
          else {
            finalConcepts.push(concept)
          }
        }
      }

      localStorage.setItem('concepts', JSON.stringify(finalConcepts));


}

export function Task( {name} ) {
    return (
        <div className="mb-2 mx-auto">
              <p>{name}</p>
              <Button className="btn btn-secondary" onClick={() => reviewConcept(name)}>
            Check off
            </Button>
         </div>
    );
}