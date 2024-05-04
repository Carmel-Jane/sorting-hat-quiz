import React, { useState } from 'react';
import questions from './questions';
import Quiz from './components/Quiz';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ Gryffindor: 0, Hufflepuff: 0, Ravenclaw: 0, Slytherin: 0 });
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="App">
      <Quiz question={questions[currentQuestion]} handleAnswerOptionClick={() => {}} />
    </div>
  );
}

export default App;