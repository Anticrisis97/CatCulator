import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Database from './pages/Database.jsx';
import Catculate from './pages/Catculate.jsx';
import Navbar from './Navbar.jsx';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path="/"  element={<Home />} />
                        <Route path="/Database" element={<Database />} />
                        <Route path="/Catculate" element={<Catculate />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}




//return (
//        <>
//            <Navbar/>
//            <div className="container">
//                <Component/>
//           </div>
//        </>
//    )
//}

export default App
