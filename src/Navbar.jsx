import {Link} from "react-router-dom";

export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title-cat">CatCulator</a>
        <ul>
            <li>
                <Link to="/Database">Database</Link>
            </li>
            <li>
                <Link to="/Catculate">Catculate!</Link>
            </li>
        </ul>
    </nav>
}