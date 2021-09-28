import React ,{ useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import { makeStyles } from '@mui/styles'; 
// import LoginForm from './components/LoginForm';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar';
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

    const [User, setUser] = useState();
    const [IsSignin, setIsSignin] = useState(false);

    const handleSignin = () => {
        setIsSignin(!IsSignin);
    }


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

        <div>
            {(IsSignin) ? (
            <Router>
                <div className = "container">
                    <Navbar/>
                    <br/>
                    <Route path='/' exact component = {Homepage} />
                </div>
            </Router>) : (
            <div>
            <Router>
                <Route path='/' exact  component = {Intro} />
                <Route path='/signin' component={() => <Signin handle={handleSignin} />} />
                 <Route path='/signup' component={() => <Signup handle={handleSignin} />}/>
                
            </Router>
            </div>)}
        </div>

        
        
    );
}