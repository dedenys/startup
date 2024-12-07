import React from 'react';
import './tally.css';
import { Button } from 'react-bootstrap';
import { GameEvent, GameNotifier } from '../calender/gameNotifier.js';

export function Tally(props) {

  const [tallynumber, setTally] = React.useState("...");


  const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
    GameNotifier.addHandler(handleGameEvent);

    return () => {
      GameNotifier.removeHandler(handleGameEvent);
    };
  });

  function handleGameEvent(event) {
    setEvent([...events, event]);
    handleClick();
  }



  fetch('/api/tallynum')
      .then((response) => response.json())
      .then((testing) => {
        setTally(testing.tallynum);
      });

  function handleClick() {

    console.log('Button clicked');
    fetch('/api/tallynum')
      .then((response) => response.json())
      .then((testing) => {
        setTally(testing.tallynum);
      });
  }

  async function incrementTally () {
    await fetch('/api/tally', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({number:1}),
    });
  }

  return (
    <main className="container rounded bg-world text-center">
      

      

      <div className="container rounded bg-white col-6 text-center">
        <h1 className="mt-4">Global Revision Tally 🌐</h1>
        <div className="paddingcontainer">
      <p className="text1">There are currently</p>
      <h2>{tallynumber}</h2>
      <p className="text1">global revisions</p>
      {/*<Button onClick={handleClick}>Refresh</Button>*/}
    </div>
    </div>

    </main>
  );
}