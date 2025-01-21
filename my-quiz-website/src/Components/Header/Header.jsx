import { HeaderMenuItem } from "./HeaderMenuItem"

function Header() {
    return (
        <header>
            <h1>My Quiz Website</h1>
            <nav>
                <ul>
                <HeaderMenuItem  headerName="Home" navLink="/" />
                <HeaderMenuItem  headerName="Quiz" navLink="/Quiz" />
                </ul>
            </nav>
        </header>
    );
}