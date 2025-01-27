import React, { useState, useEffect, useRef } from 'react';
import QuizDisplay from './QuizDisplay';

function QuizManager() {
    const [questionDatabase, setQuestionDatabase] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [displayContent, setDisplayContent] = useState('startScreen');
    const [userInput, setUserInput] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setCurrentScore] = useState(0); 
    const [countdown, setCountdown] = useState(10);
    const intervalRef = useRef(null);

    useEffect(() => {
        fetch('/question-database.json')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data); 
                setQuestionDatabase(data);
                setLoading(false); 
            })
            .catch(error => {
                console.error('Error fetching questions:', error);
                setLoading(false); 
            });
    }, []);

    useEffect(() => {
        if (displayContent === 'questionScreen') {
            setCountdown(10);
            intervalRef.current = setInterval(() => {
                setCountdown(prevCountdown => {
                    if (prevCountdown === 0) {
                        clearInterval(intervalRef.current);
                        handleAnswerClick('you ran out of time!');
                        return 0;
                    }
                    return prevCountdown - 1;
                });
            }, 1000);
        }

        return () => clearInterval(intervalRef.current);
    }, [displayContent]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const currentQuestion = questionDatabase[currentQuestionIndex];

    const startQuiz = () => {
        setDisplayContent('questionScreen');
        setCurrentScore(0);
        setCurrentQuestionIndex(0);
    };

    const handleAnswerClick = (option) => {
        setUserInput(option);
        console.log("Answer clicked " + option);
        if (option === currentQuestion.answer) {
            correctAnswer();
        } else {
            wrongAnswer();
        }
        setDisplayContent('answerScreen');
    };

    const correctAnswer = () => {
        console.log("Correct answer");
        setCurrentScore(score + 1);
    };

    const wrongAnswer = () => {
        console.log("Wrong answer");
    };

    const updateQuestion = () => {
        if (currentQuestionIndex === questionDatabase.length - 1) {
            setDisplayContent('endScreen');
            console.log('End of quiz');
        } else {
            setDisplayContent('questionScreen');
            console.log('Next question');
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    return (
        <>       
            <QuizDisplay
                displayContent={displayContent}  // state variable
                question={currentQuestion.question} options={currentQuestion.options} answer={currentQuestion.answer} // json data
                handleAnswerClick={handleAnswerClick} startQuiz={startQuiz} updateQuestion={updateQuestion} // functions
                userInput={userInput} score={score} countdown={countdown} currentQuestionIndex={currentQuestionIndex} // session variables
            /> 
        </>
    );
}

export default QuizManager;