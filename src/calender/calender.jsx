import React from 'react';
import './calender.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Concepts } from '../concepts/concepts';
import { Day } from './day';
import { Holiday } from './holiday';


function calcDayofWeek(curDay) {

  if (curDay > 7) {
    curDay = (curDay % 7) + 1
  }
  

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
  else if (curDay === 7) {
    return "Sunday";
  }
}



export function Calender( {onUpdate} ) {

  const [showAlert, setShowAlert] = React.useState(false);

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const today = new Date();
  const navigate = useNavigate();

  const todaysDate = today;

  let todayArray = [];

  const nextDay1 = new Date(today);
  nextDay1.setDate(today.getDate() + 1);

  let nextDay1Array = [];

  const nextDay2 = new Date(today);
  nextDay2.setDate(today.getDate() + 2);

  let nextDay2Array = [];

  const nextDay3 = new Date(today);
  nextDay3.setDate(today.getDate() + 3);

  let nextDay3Array = [];


  const [concepts, setConcepts] = React.useState([]);

  fetch('/api/concepts')
      .then((response) => response.json())
      .then((testing) => {
        setConcepts(testing);
  });

  // React.useEffect(() => {
  //   const conceptsText = localStorage.getItem('concepts');
  //   if (conceptsText) {
  //     setConcepts(JSON.parse(conceptsText));
  //   }
  // }, []);

  if (concepts.length) {
    for (const [i, concept] of concepts.entries()) {
        if (concept.nextReview === todaysDate.getUTCDate()) {
          todayArray.push(concept)
        }
        else if (concept.nextReview === nextDay1.getUTCDate()) {
          nextDay1Array.push(concept)
        }
        else if (concept.nextReview === nextDay2.getUTCDate()) {
          nextDay2Array.push(concept)
        }
        else if (concept.nextReview === nextDay3.getUTCDate()) {
          nextDay3Array.push(concept)
        }
    }
  }

  //if (concepts.length > 0) {
  //   console.log(concepts[0].nextReview)
  //}
  

  let items = [
    { id: 1, name: 'Item 5' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  //console.log(concepts)

  //console.log(todayArray)
  //console.log(nextDay1Array)
  //console.log(nextDay2Array)
  //console.log(nextDay3Array)

  return (
    <main className="container rounded bg-custom text-center align-items-center">

      <div className="container rounded bg-white col-6 text-center mt-4 mb-4">
        <h1 className="mt-4">MyCalender 📅</h1>
        <p className = "wordcontainer">Check off concepts you have reviewed and preview concepts coming up here in MyCalender.</p>
        
    </div>

        <Day today={today.getDay()} dayData={todayArray} onUpdate={onUpdate} />
        <Day today={today.getDay() + 1} dayData={nextDay1Array} onUpdate={onUpdate} />
        <Day today={today.getDay() + 2} dayData={nextDay2Array}  onUpdate={onUpdate}/>
        <Day today={today.getDay() + 3} dayData={nextDay3Array} onUpdate={onUpdate} />
        <Holiday></Holiday>
        {/* 
        <section class="container rounded bg-white text-center col-6 citem  ">
          <h2>Tuesday</h2>
              <div>
              <p>Euler's Method</p>
            </div>
            <div>
              <p class="underline">It's National Pi Day! (holiday API)</p>
            </div>

        </section>

        <section class="container rounded bg-white text-center col-6 citem ">
          <h2>Wednesday</h2>
            <div>
              <p>no concepts today :-(</p>
            </div>
        </section>
        */}
    </main>
  );
}