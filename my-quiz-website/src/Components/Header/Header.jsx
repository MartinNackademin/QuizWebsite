import React from 'react';
import { HeaderMenuItem } from "./HeaderMenuItem";

function Header({ toggleTheme }) {
    return (
        <header className="bg-base-200 p-4 text-base-content flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <h1 className="text-xl font-bold">My Quiz Website</h1>
                <nav>
                    <ul className="flex flex-row space-x-4 border-b-2">
                        <HeaderMenuItem headerName="Home" navLink="/" />
                        <HeaderMenuItem headerName="Quiz" navLink="/Quiz" />
                    </ul>
                </nav>
            </div>
            <button onClick={toggleTheme} className="btn btn-secondary m-4">
                Theme Swap
            </button>
        </header>
    );
}

export default Header;