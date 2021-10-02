import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import { makeStyles } from '@mui/styles'; 
// import LoginForm from './components/LoginForm';
import "bootstrap/dist/css/bootstrap.min.css";

import Homepage from './components/homepage';
import Signin from './components/signin';
import Signup from './components/signup';
import Intro from './components/intro';

// const useStyles = makeStyles(theme => ({
//     container : {
//         position : 'center',
//     },
// }));


export default function App (){

    return(
        <div>
            <Router>
                <div className = "container">
                    <Route path='/' exact  component = {Intro} />
                    <Route path='/home' component = {Homepage} />
                    <Route path='/signin' component = {Signin} />
                    <Route path='/signup' component = {Signup} />
                </div>
            </Router>
        </div>
    );
}