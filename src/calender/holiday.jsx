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
  


export function Holiday (  ) {

    const [holiday, setHoliday] = React.useState('unknown');

    React.useEffect(() => {
  
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((data) => {
          setHoliday(data);
          
        })
        .catch();
    }, []);

    //console.log(holiday);

    return (
        <section className="container rounded col-6 bg-white citem mt-4 mb-4">

        <h2 className="text-center">Dog of the Day:</h2>

        <div id='picture' className='picture-box mb-4'>
        <img src={holiday.message} width={250} alt='dog'  />
        </div>
          
  
   


        </section>
    );
}