import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import { makeStyles } from '@mui/styles'; 
// import LoginForm from './components/LoginForm';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar';
import ExercisesList from './components/exercise-list';
import EditExercise from './components/edit-exercise';
import CreateExercise from './components/create-exercise';
import CreateUser from './components/create-user';
import Homepage from './components/homepage';

// const useStyles = makeStyles(theme => ({
//     container : {
//         position : 'center',
//     },
// }));


export default function App (){

    // const adminUser = {
    //     email : "1596934767@qq.com",
    //     password : "12"
    // }

    // const [user,setUser] = useState({user : "", email : ""});
    // const [error,setError] = useState("");

    // const Login = details => {
    //     console.log(details);

    //     if(details.email == adminUser.email && details.password == adminUser.password){
    //         console.log("logged in");

    //         setUser({
    //             name : details.name,
    //             email : details.email,
    //         });

    //     }else {
    //         console.log("Don't match");
    //     }
    // }

    // const Logout = () => {
    //     setUser({
    //         user : "", 
    //         email : ""
    //     });
    // }

    // const classes = useStyles();

    return(
        // <div>
        //     {(user.email != "") ? (
        //         <div>
        //             <h2>Welcome,<span>{user.name}</span></h2>
        //             <button onClick = {Logout}>Logout</button>
        //         </div>
        //     ) : (
        //         <LoginForm Login = {Login} error = {error}/>
        //     )}
        // </div>
        <Router>
            <div className = "container">
                <Navbar />
                <br/>
                <Route path='/' exact component = {ExercisesList} />
                <Route path='/edit/:id' component = {EditExercise} />
                <Route path='/create' component = {CreateExercise} />
                <Route path='/user' component = {CreateUser} />
                <Route path='/home' component = {Homepage} />
            </div>
        </Router>
        
    );
}