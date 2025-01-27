import React from 'react';
import Quizcomponent from '../../Quizcomponent/Quizcomponent';


    export const Quiz = () => {
        return (
            <main className="bg-base-200 p-4 text-base-content" >    
                <section>
                <h1 className='text-2xl font-bold mb-4 flex justify-center'>Quiz Page that has an amazing crazy Quiz!</h1>
                <Quizcomponent/>
                </section>

                </main>
        )
    }