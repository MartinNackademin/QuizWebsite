import React from 'react';
import Quizmanager from './QuizManger.jsx';

function Quizcomponent() {
    
    
    return (
    <>        
   <div className="flex justify-center items-start h-screen bg-base-100">
   <div className="bg-base-300 p-8 rounded-lg shadow-2xl h-1/2 w-1/2 mt-4 flex flex-col justify-between text-base-content border-4 border-base-content">
        <Quizmanager/>
    </div>
    </div>
    </>
    );
}

export default Quizcomponent;