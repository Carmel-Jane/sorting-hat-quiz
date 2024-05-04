import React from 'react';

function Quiz({ question, handleAnswerOptionClick }) {
  return (
    <div className="card bg-gray-100 border border-gray-300 p-6 rounded-lg shadow-md">
      <div className="text-2xl mb-4 text-gray-800">{question.questionText}</div>
      {question.answerOptions.map((option, index) => (
        <button
          className={`bg-${option.house.toLowerCase()}-400 hover:bg-${option.house.toLowerCase()}-500 text-gray-900 font-bold py-2 px-4 rounded-md inline-flex items-center mb-4`}
          onClick={() => handleAnswerOptionClick(option.house)}
          key={index}
        >
          {option.answerText}
        </button>
      ))}
    </div>
  );
}

export default Quiz;