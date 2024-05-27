import React, { useState } from 'react';
import questions from './resources/quizQuestion.json';
import './Quiz.css';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handleQuit = () => {
        if (window.confirm('Are you sure you want to quit?')) {
        }
    };

    const currentQues = questions[currentQuestion];

    return (
        <div className="quiz-container">
            <h2 className="question">{currentQues.question}</h2>
            <ul className="options">
                <li>{currentQues.optionA}</li>
                <li>{currentQues.optionB}</li>
                <li>{currentQues.optionC}</li>
                <li>{currentQues.optionD}</li>
            </ul>
            <div className="buttons">
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
                <button onClick={handleQuit}>Quit</button>
            </div>
        </div>
    );
};

export default Quiz;
