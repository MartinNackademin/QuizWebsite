import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Home } from './Components/Pages/Home/Home.jsx';
import { Quiz } from './Components/Pages/Quiz/quiz.jsx';

function Layout({ toggleTheme }) {
    return (
        <>
            <Header toggleTheme={toggleTheme} />
            <Outlet />
            <Footer />
        </>
    );
}

function App() {
    const [theme, setTheme] = useState('synthwave');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'synthwave' ? 'cupcake' : 'synthwave'));
    };

    const router = createHashRouter([
        {
            element: <Layout toggleTheme={toggleTheme} />,
            errorElement: <div>Error 404 - Oh my god O_O </div>,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/Quiz",
                    element: <Quiz />
                },
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}

export default App;