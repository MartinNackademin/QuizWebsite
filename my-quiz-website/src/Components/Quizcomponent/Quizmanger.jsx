import React, { useState } from 'react';
import Questiondisplay from './Questiondisplay';
import Questiondatabase from './Questiondatabase.json';

function QuizManager() {
      
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = Questiondatabase[currentQuestionIndex];

    const handleStartQuiz = () => {
        setQuizStarted(true);
        updatequestion();
        console.log("Quiz started");
    };

    const handleAnswerClick = (option) => {
        console.log("Answer clicked "+option);

        handlenextquestion();
    }
    const handlenextquestion = () => {
        console.log("Next question added 1 to question index");
        updatequestion();
    }

    const updatequestion = () => {
        console.log("Question updated");
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        console.log("it should re render with new question");
        console.log(currentQuestion.answer);
    }



    return (
        <>
            {quizStarted && (
                    <h1 className="text-2xl font-bold mb-4 text-center">
                        Quiz in progress
                    </h1>
                )}
                                {!quizStarted && (
                    <h1 className="text-2xl font-bold mb-4 text-center ">
                        Welcome to the Quiz
                    </h1>
                )}

       
        <div className="flex justify-center items-start h-screen">
            <div className="bg-gray-200 p-8 rounded-lg shadow-lg h-1/2 w-1/2 mt-4 flex flex-col justify-between">
            {quizStarted && (
                  <Questiondisplay
                  question={currentQuestion.question}
                  options={currentQuestion.options}
                  handleAnswerClick={handleAnswerClick}
                    />
                )}
                
                    <div className='flex flex-col space-y-1'>
                     {!quizStarted && (
                        <button onClick={handleStartQuiz} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mt-4" >
                        Start New Quiz
                        
                        </button>
                     )}

                      {!quizStarted && (
                         <button onClick={handleStartQuiz} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mt-4">
                          Continue Quiz

                        </button>
                )}
                    </div>  
            </div>
        </div>
        </>
    );
}

export default QuizManager;