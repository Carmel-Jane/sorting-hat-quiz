import React, { useState } from 'react';
import questions from './questions';
import Quiz from './components/Quiz';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ Gryffindor: 0, Hufflepuff: 0, Ravenclaw: 0, Slytherin: 0 });
  const [showResult, setShowResult] = useState(false);


  const handleAnswerOptionClick = (house) => {
    setScores(prevScores => ({ ...prevScores, [house]: prevScores[house] + 1 }));
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

 
  return (
    <div className="App">
      {showResult ? (
        <Result scores={scores} />
      ) : (
        <Quiz question={questions[currentQuestion]} handleAnswerOptionClick={handleAnswerOptionClick} />
      )}
    </div>
  );
}

export default App;