import React from 'react';
import './calender.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Concepts } from '../concepts/concepts';
import { Day } from './day';


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



export function Calender() {

  const today = new Date();
  const navigate = useNavigate();

  return (
    <main class="container rounded bg-custom text-center align-items-center">

      <div class="container rounded bg-white col-6 text-center mt-4 mb-4">
        <h1 class="mt-4">MyCalender 📅</h1>
        <p class = "wordcontainer">Check off concepts you have reviewed and preview concepts coming up here in MyCalender. Want to add a new concept? <Link to="../../concepts/concepts">add new concept</Link></p>
        
    </div>

        <Day today={today.getDay()} />
        <Day today={today.getDay() + 1}/>
        <Day today={today.getDay() + 2}/>
        <Day today={today.getDay() + 3}/>
        <Day today={today.getDay() + 4}/>
        <Day today={today.getDay() + 5}/>
        <Day today={today.getDay() + 6}/>
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