import React from 'react';
import './calender.css';

import { Concepts } from '../concepts/concepts';

export function Calender() {
  return (
    <main class="container rounded bg-custom text-center align-items-center">

      <div class="container rounded bg-white col-6 text-center">
        <h1 class="mt-4">MyCalender 📅</h1>
        <p class = "wordcontainer">Check off concepts you have reviewed and preview concepts coming up here in MyCalender. Want to add a new concept? <a href="concepts.html">add new concept</a></p>
        
    </div>
    


        <section class="container rounded bg-white text-center col-6 citem ">
          <h2 class="mt-4">Today</h2>
            <div class="align-items-center">
              <p>L'Hospitals Rule</p>
              <button class="btn btn-secondary">Check off</button>
            </div>
            <div>
              <p>Euler's Method</p>
              <button class="btn btn-secondary">Check off</button>
            </div>
          
        </section>

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
    </main>
  );
}