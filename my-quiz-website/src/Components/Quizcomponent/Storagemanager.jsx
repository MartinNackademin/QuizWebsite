import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import QuestionDatabase from './Questiondatabase.json';

function StorageManager() {

    if(Cookies.get('quizStarted'))
        {
                console.log('Cookie found, there is a quiz in progress the user could continue');
        }

    
    
    return null; 
};

function startquiz() {
    if(Cookies.get('quizStarted'))
        {
                console.log('Cookie found, there is a quiz in progress but the user started another quiz');
                return;
        }
    Cookies.set('quizStarted');
}   

export default StorageManager;