import {Link} from "react-router-dom";

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title-cat">CatCulator</Link>
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