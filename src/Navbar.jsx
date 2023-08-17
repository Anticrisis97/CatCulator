export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title-cat">CatCulator</a>
        <ul>
            <li>
                <a href="/database">Database</a>
            </li>
            <li>
                <a href="/catculate">Catculate!</a>
            </li>
        </ul>
    </nav>
}