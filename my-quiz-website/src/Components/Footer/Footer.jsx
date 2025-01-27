import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
    return (
    <>
      <footer className='flex justify-between items-center font-bold p-4 bg-base-200 text-base-content'>
        (C) {currentYear}  Martin Mohns. The best Quiz website EU nordic 
      </footer>    
    </>
    )
  }
  
  export default Footer