import React from 'react'


function Result({ scores }) {
    const house = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  
    return (
      <div>
        <h2>Your Hogwarts house is {house}!</h2>
      </div>
    );
  }
  
  export default Result;