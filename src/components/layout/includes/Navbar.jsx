import React  from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        
            <nav className="navbar">
                <ul className="navbar__ul">
                    <li className="navbar__ul-li">
                        <Link to="/" className="nav__link">Home</Link>
                    </li>
                    <li className="navbar__ul-li">
                        <Link to="/Login" className="nav__link">Login</Link>
                    </li>
                   
                </ul>
            </nav>   
    
    )
}

export default Navbar


