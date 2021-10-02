import React,{ useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
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

    const [user, setUser] = useState();//_id
    
    function onChangeUser(id){
        setUser(id);
        console.log(id);
    };

    return(
        <div>
            <Router>
                <div className = "container">
                    <Route path='/' exact  component = {Intro} />
                    <Route path='/home/:email' component = {Homepage} />
                    <Route path='/signin' component = {() => <Signin handle = {onChangeUser}/>} />
                    <Route path='/signup' component = {() => <Signup handle = {onChangeUser}/>} />
                </div>
            </Router>
        </div>
    );
}