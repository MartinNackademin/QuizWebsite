import React from 'react';

function Questiondisplay({ question, options,handleAnswerClick }) {
    

    
    
    return (
        <>

        <div className="p-4">
            <h1 className='text-xl font-bold text-center'>{question}</h1>
        </div>


        {options.map((option, uniqueid) => (
                    <button
                        key={uniqueid}
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                        onClick={() => handleAnswerClick(option)}
                    >
                        {option}
                    </button>
                ))}
   
    </>
);
}
     
export default Questiondisplay;