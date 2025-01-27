import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
    return (
    <>
       <div className="flex justify-between text-center items-center font-bold p-4 bg-inherit text-base-content border-base-200 mt-auto">
        (C) {currentYear}  Martin Mohns.
      </div>    
    </>
    )
  }
  
  export default Footer