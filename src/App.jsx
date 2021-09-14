import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";

import Error404 from "./components/pages/Error404";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';


function App() {
  return (
    <div>
      <BrowserRouter>
                <Header />
                <Footer />
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/Login" component={Login} />
                        <Route path="*" component={Error404}/>
                    </Switch>
                </div>
          </BrowserRouter>
    </div>
  )
}

export default App


