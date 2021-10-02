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

    const [ID, setID] = useState();//_id
    
    function onChangeID(id){
        setID(id);
        console.log(id);
    };

    return(
        <div>
            <Router>
                <div className = "container">
                    <Route path='/' exact  component = {Intro} />
                    <Route path='/home/:id' component = {Homepage} />
                    <Route path='/signin' component = {Signin} />
                    <Route path='/signup' component = {Signup} />
                    {/* <Route path='/signin' component = {() => <Signin handle = {onChangeID}/>} />
                    <Route path='/signup' component = {() => <Signup handle = {onChangeID}/>} /> */}
                </div>
            </Router>
        </div>
    );
}