import React, { useState } from 'react';

function QuizManager() {
    const [quizStarted, setQuizStarted] = useState(false);

    const handleStartQuiz = () => {
        setQuizStarted(true);
    };

    return (
        <div className="flex justify-center items-start h-screen">
            <div className="bg-gray-200 p-8 rounded-lg shadow-lg h-1/2 w-1/2 mt-4 flex flex-col justify-between">
                
            {quizStarted && (
                    <h1 className="text-2xl font-bold mb-4">
                        Quiz in progress
                    </h1>
                )}
                {!quizStarted && (
                    <h1 className="text-2xl font-bold mb-4">
                        Welcome to the Quiz
                    </h1>
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
    );
}

export default QuizManager;