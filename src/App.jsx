import {useState} from 'react'
import Navbar from "./Navbar.jsx";
import Database from "./pages/Database.jsx";
import Catculate from "./pages/Catculate.jsx";
import Home from "./pages/Home.jsx";

function App() {
    let Component
    switch (window.location.pathname) {
        case "/":
            Component = Home
            break
        case "/database":
            Component = Database
            break
        case "/catculate":
            Component = Catculate
            break
    }

    return (
        <>
            <Navbar/>
            <div className="container">
                <Component/>
            </div>
        </>
    )
}

export default App
