import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
    return (
    <>
      <footer className='flex justify-between items-center font-bold p-4 bg-gray-300'>
        (C) {currentYear}  Martin Mohns. The best Quiz website EU nordic 
      </footer>    
    </>
    )
  }
  
  export default Footer