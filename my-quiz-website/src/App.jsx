import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { createHashRouter, RouterProvider, Outlet} from 'react-router-dom';
import { Home } from './Components/Pages/Home/Home.jsx';
import { Quiz } from './Components/Pages/Quiz/quiz.jsx';

function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

const router = createHashRouter([
    {
        element: <Layout/>,
        errorElement: <div>Error 404 - Oh my god O_O </div>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/Quiz",
                element: <Quiz/>
            },
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;