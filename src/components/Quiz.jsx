import React from 'react';

function Quiz({ question, handleAnswerOptionClick }) {
  return (
    <div>
      <div>{question.questionText}</div>
      {question.answerOptions.map((option, index) => (
        <button onClick={() => handleAnswerOptionClick(option.house)} key={index}>
          {option.answerText}
        </button>
      ))}
    </div>
  );
}

export default Quiz;