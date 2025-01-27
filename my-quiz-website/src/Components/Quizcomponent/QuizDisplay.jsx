import React, { useState } from 'react';

function QuizDisplay({
     displayContent, // state for displaying different screens
     question,options,answer, // Json file information
     handleAnswerClick,startQuiz,updateQuestion, // functions to handle user input 
     userinput,score, // user variables
    
    }){
    
   

    let currentContent;
    if (displayContent === 'startScreen') {
        currentContent =(
        <>
        <div className="flex justify-center item-center font-bold text-3xl" >Welcome to the quiz</div>
            
            <button onClick={startQuiz} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mt-4" >
            Start New Quiz
            </button>    
        </>
        );
    }

    if (displayContent === 'questionScreen') {
        currentContent =(
            <div className="flex flex-col space-y-2 mt-4">
                {options.map((option, uniqueid) => (
                    <button
                        key={uniqueid}
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                        onClick={() => handleAnswerClick(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        );
    }

    if (displayContent === 'answerScreen') {
        currentContent =(
        <>
            <div className="flex justify-center item-center font-bold text-3xl" >{question}</div>
            <div>
                <div className="flex justify-center item-center font-bold text-3xl" >Correct Answer:&nbsp;<p className="text-green-500" >{answer}</p></div>
                <div className="flex justify-center item-center font-bold text-3xl" >Your Answer:&nbsp;{userinput}</div>
            </div>
            <button onClick={updateQuestion} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mt-4" >
            Continue
            </button>   

        </>
        );
    }

    if (displayContent === 'endScreen') {
        currentContent =(
            <>
             <div className="flex flex-col space-y-2 mt-4">You came to the end of the quiz!</div>
             <div className="flex flex-col space-y-2 mt-4">you scored:</div>
            <button onClick={startQuiz} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mt-4" >
            Start New Quiz
            </button> 
            </>  
            
        );
    }

    return (
        <>
        {currentContent}

        </>
);
}
     
export default QuizDisplay;