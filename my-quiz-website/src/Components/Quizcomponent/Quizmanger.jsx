import React, { useState, useEffect, useRef } from 'react';
import QuizDisplay from './QuizDisplay';

function QuizManager() {
    
    const [Questiondatabase, setQuestiondatabase] = useState([]);
    const [loading, setLoading] = useState(true); 

    const [displayContent, toggledisplayContent] = useState('startScreen');
    const [userinput, setUserinput] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setCurrentScore] = useState(0); 
    const [countdown, setCountdown] = useState(10);
    const intervalRef = useRef(null);
   
    useEffect(() => {
        fetch('/Questiondatabase.json')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data); // Log fetched data
                setQuestiondatabase(data);
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch(error => {
                console.error('Error fetching questions:', error);
                setLoading(false); // Set loading to false even if there's an error
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


    const currentQuestion = Questiondatabase[currentQuestionIndex];
    
    
    const startQuiz = () => {
        toggledisplayContent('questionScreen');
        setCurrentScore(0);
        setCurrentQuestionIndex(0);
    }
    
    const handleAnswerClick = (option) => {
        setUserinput(option);
        console.log("Answer clicked "+option);
        if (option === currentQuestion.answer) {
            
            correctAnswer();
        } else {
            wrongAnswer();
        }
        toggledisplayContent('answerScreen');
    }

    const correctAnswer = () => {
        console.log("Correct answer");
        setCurrentScore(score + 1);

    }
    const wrongAnswer = () => {
        console.log("Wrong answer");
        
    }

    const updateQuestion = () => {
        if(currentQuestionIndex === Questiondatabase.length - 1){
            toggledisplayContent('endScreen');
            console.log('End of quiz');
        }
        else{
            toggledisplayContent('questionScreen');
            console.log('Next question');
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    }


    return (
        <>       
                 <QuizDisplay
                  displayContent={displayContent}  // state variable
                  question={currentQuestion.question}options={currentQuestion.options}answer={currentQuestion.answer} // json data
                  handleAnswerClick={handleAnswerClick}startQuiz={startQuiz}updateQuestion={updateQuestion} // functions
                  userinput={userinput}score={score}countdown={countdown}currentQuestionIndex={currentQuestionIndex} // session variables
                /> 
        </>
    );
}

export default QuizManager;