import React from 'react';
import { HeaderMenuItem } from "./HeaderMenuItem";

function Header({ toggleTheme }) {
    return (
        <div className="bg-base-200 p-4 text-base-content">
            <div className="navbar flex flex-col items-start">
                <div className="flex justify-between w-full">
                    <a className="text-xl font-bold">Quizzy</a>
                    <button onClick={toggleTheme} className="btn btn-secondary">
                        Theme Swap
                    </button>
                </div>
                <nav className="mt-4 w-full">
                    <ul className="flex space-x-4 p-0">
                        <HeaderMenuItem headerName="Home" navLink="/" />
                        <HeaderMenuItem headerName="Quiz" navLink="/Quiz" />
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;