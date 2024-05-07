import React, { useState } from 'react';
import questions from './questions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import backgroundImage from './assets/sortingCeremony.png';

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
    <div className="relative bg-cover bg-center min-h-screen flex justify-center items-center" 
         style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="max-w-md w-full bg-white bg-opacity-75 p-5 rounded-lg relative">
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