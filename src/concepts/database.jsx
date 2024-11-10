import React from 'react';

import './concepts.css';

export function Database() {
  const [concepts, setConcepts] = React.useState([]);

  // Demonstrates calling a service asynchronously so that
  // React can properly update state objects with the results.
  React.useEffect(() => {
    const conceptsText = localStorage.getItem('concepts');
    if (conceptsText) {
      setConcepts(JSON.parse(conceptsText));
    }
  }, []);

  // Demonstrates rendering an array with React
  const conceptRows = [];
  if (concepts.length) {
    for (const [i, concept] of concepts.entries()) {
      conceptRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{concept.name}</td>
          <td>{concept.date}</td>
          <td>{concept.nextReview}</td>
        </tr>
      );
    }
  } else {
    conceptRows.push(
      <tr key='0'>
        <td colSpan='4'>Add your first concept today!</td>
      </tr>
    );
  }

  return (
    <main className=' expand container-fluid  text-center'>
      <table className='table'>
        <thead className='table-secondary'>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date Added</th>
            <th>Next Review</th>
          </tr>
        </thead>
        <tbody id='conce[ts'>{conceptRows}</tbody>
      </table>
    </main>
  );
}
