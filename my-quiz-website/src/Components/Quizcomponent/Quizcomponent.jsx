import React from 'react';
import Storagemanager from './Storagemanager.jsx';
import Quizmanager from './QuizManger.jsx';

function Quizcomponent() {
    
    
    return (
    <>        
    <div className="flex justify-center items-start h-screen">
    <div className="bg-gray-200 p-8 rounded-lg shadow-lg h-1/2 w-1/2 mt-4 flex flex-col justify-between">
        <Quizmanager/>
    </div>
    </div>
    </>
    );
}

export default Quizcomponent;