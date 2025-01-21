import { HeaderMenuItem } from "./HeaderMenuItem"

function Header() {
    return (
        <header className="bg-gray-400 p-2">
            <h1>My Quiz Website</h1>
            <nav>
                <ul className="flex flex-row space-x-4 border-b-2">
                <HeaderMenuItem  headerName="Home" navLink="/" />
                <HeaderMenuItem  headerName="Quiz" navLink="/Quiz" />
                </ul>
            </nav>
        </header>
    );
}

export default Header