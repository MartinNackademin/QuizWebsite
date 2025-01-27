import React from 'react';
import Quizmanager from './QuizManger.jsx';

function QuizContainer() {
    
    
    return (
    <>        
<div className="flex flex-col justify-center items-center bg-base-300 p-8 rounded-lg shadow-2xl mt-4 text-base-content border-4 border-base-content h-full w-full 
                max-w-screen-md md:max-w-1400 mx-auto">
    <Quizmanager/>
</div>
    </>
    );
}

export default QuizContainer;