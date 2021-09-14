import React  from 'react';
import Brand from './includes/Brand'
import Navbar from './includes/Navbar'

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function Header(props) {
    return (
    
            <header className="header">
                    <Brand />
                    <Navbar />
            </header>
    
    )
}

export default Header


