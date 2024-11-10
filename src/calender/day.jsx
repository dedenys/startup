import React from 'react';
import './calender.css';

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
  


export function Day( {today} ) {

    const todayTwo = new Date();
    let itIsToday = "";

    if (todayTwo.getDay() === today) {
        itIsToday = "Today "
        today = "(" + calcDayofWeek(today) + ")"
    }
    else {
        today = calcDayofWeek(today)
    }

    return (
        <section className="container rounded bg-white text-center col-6 citem mt-4 mb-4 align-items-center">

          <h2 className="mt-4">{itIsToday}{today}</h2>
            <div className="align-items-center">
              <p>L'Hospitals Rule</p>
              <button className="btn btn-secondary">Check off</button>
            </div>
            <div>
              <p>Euler's Method</p>
              <button class="btn btn-secondary">Check off</button>
            </div>
          
        </section>
    );
}