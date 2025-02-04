import React, { useState } from 'react';

function QuizDisplay({
     displayContent, // state for displaying different screens
     question,options,answer, // Json file information
     handleAnswerClick,startQuiz,updateQuestion, // functions to handle user input 
     userinput,score,countdown,currentQuestionIndex // session variables
    
    }){
    
        const progressbar = (
            <ul className="steps">
                <li className={`step ${currentQuestionIndex >= 0 ? 'step-primary' : ''}`}></li>
                <li className={`step ${currentQuestionIndex >= 1 ? 'step-primary' : ''}`}></li>
                <li className={`step ${currentQuestionIndex >= 2 ? 'step-primary' : ''}`}></li>
                <li className={`step ${currentQuestionIndex >= 3 ? 'step-primary' : ''}`}></li>
                <li className={`step ${currentQuestionIndex >= 4 ? 'step-primary' : ''}`}></li>
            </ul>
        );
        
    let currentContent;

    if (displayContent === 'startScreen') {
        currentContent =(
        <>
        <div className='flex flex-col space-y-4 mt-4 justify-between'>
        <div className="" >Welcome to the quiz</div>  
            
            <button onClick={startQuiz} className="btn btn-primary mt-4" >
            Start New Quiz
            </button>  
            </div>
            
        </>
        );
    }

    if (displayContent === 'questionScreen') {
        currentContent =(
            <div className="flex flex-col space-y-4 mt-4 justify-between">
                <div>{question}</div>
                <div>
                <span className="countdown font-mono text-5xl">
             <span style={{ "--value": countdown }}></span>
                </span>
                </div>

               
                {options.map((option, uniqueid) => (
                    <button
                        key={uniqueid}
                        className="btn btn-accent "
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
                {progressbar}
            <div className="flex justify-center item-center font-bold " >{question}</div>
            <div>
                <div className="flex justify-center item-center font-bold " >Correct Answer:&nbsp;<p className="text-green-500" >{answer}</p></div>
                <div className="flex justify-center item-center font-bold " >Your Answer:&nbsp;{userinput}</div>
            </div>
            <button onClick={updateQuestion} className="btn btn-primary mt-4">
            Continue
            </button>   

        </>
        );
    }

    if (displayContent === 'endScreen') {
        currentContent =(
            <>
            {progressbar}
             <div className="flex flex-col space-y-2 mt-4">You came to the end of the quiz!</div>
             
             <div>
             <div className="flex flex-col space-y-2 mt-4 font-bold text-2xl text-center">you scored:</div>
             <div className="flex flex-col space-y-2 mt-4 font-bold text-4xl  text-center" >{score}</div>
             </div>
             
            <button onClick={startQuiz} className="btn btn-primary mt-4" >
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