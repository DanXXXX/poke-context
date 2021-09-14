import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";




function Brand(props) {
    return (
        <div>
            <Link to="/" className="brand">
                <h1 className="brand__title">Poké-Contexte</h1>
            </Link>
        </div>
    )
}

export default Brand
