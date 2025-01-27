import React, { useState } from 'react';
import QuizDisplay from './QuizDisplay';
import Questiondatabase from './Questiondatabase.json';

function QuizManager() {
    
    const [displayContent, toggledisplayContent] = useState('startScreen');
    const [userinput, setUserinput] = useState('');

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
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


    }
    const wrongAnswer = () => {
        console.log("Wrong answer");
    }

    const updateQuestion = () => {
        console.log("Question updated");
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        console.log("it should re render with new question");
        console.log(currentQuestion.answer);
        if(currentQuestionIndex >= Questiondatabase.length - 1){
            
            toggledisplayContent('endScreen');
        }
        else{
            toggledisplayContent('questionScreen');
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
                  
                />
          
        
        </>
    );
}

export default QuizManager;