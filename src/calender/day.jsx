import React from 'react';
import './calender.css';
import { Task } from './task';

function calcDayofWeek(curDay) {

    if (curDay > 7) {
      curDay = (curDay % 7)
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
  


export function Day( {today, dayData, onUpdate, email} ) {

    const todayTwo = new Date();
    let itIsToday = "";

    if (todayTwo.getDay() === today) {
        itIsToday = "Today "
        today = "(" + calcDayofWeek(today) + ")"
    }
    else {
        today = calcDayofWeek(today)
    }

   // console.log(dayData.length)

    let showTask = false;

    if (dayData.length > 0) {
        showTask = true;
    }

    return (
        <section className="container rounded col-6 bg-white citem mt-4 mb-4">

        <h2 className="text-center">{itIsToday}{today}</h2>
        
          
        

        {dayData.map(item => (
        <Task name={item.name} onUpdate={onUpdate} email={email} currentDay={todayTwo.getDay() === today}/>
      ))}
   


        </section>
    );
}