import React, { useState } from 'react';
import questions from './questions';
import Quiz from './components/Quiz';
import Result from './components/Result';

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
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full">
        {showResult ? (
          <Result scores={scores} />
        ) : (
          <Quiz question={questions[currentQuestion]} handleAnswerOptionClick={handleAnswerOptionClick} />
        )}
      </div>
    </div>
  );
}

export default App;