import React, { useState } from 'react';
import QuizDisplay from './QuizDisplay';
import Questiondatabase from './Questiondatabase.json';

function QuizManager() {
    
    const [displayContent, toggledisplayContent] = useState('startScreen');
    const [userinput, setUserinput] = useState('');

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setCurrentScore] = useState(0);
    const currentQuestion = Questiondatabase[currentQuestionIndex];
    
    
    const startQuiz = () => {
        toggledisplayContent('questionScreen');
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
            setCurrentQuestionIndex(0);
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
                  displayContent={displayContent}
                  question={currentQuestion.question}options={currentQuestion.options}answer={currentQuestion.answer}
                  handleAnswerClick={handleAnswerClick}
                  startQuiz={startQuiz}
                  userinput={userinput}
                  updateQuestion={updateQuestion}
                  score={score}
                  
                />
          
        
        </>
    );
}

export default QuizManager;