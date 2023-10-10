import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import SignIn from './SignIn';
import SignUp from './SignUp';

// used to register react-toastify

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function App()
{

    return(
      <div>
      <Router>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Services" component={Services}></Route>
        <Route exact path="/Login" component={SignIn}></Route>
        <Route exact path="/SignUp" component={SignUp}></Route>
        </Switch>
      </Router>
      <ToastContainer />
      </div>
    );
}

