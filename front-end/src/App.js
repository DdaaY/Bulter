import React ,{ useState }from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Homepage from './components/homepage';
import Signin from './components/signin';
import Signup from './components/signup';
import Intro from './components/intro';
import Sign from './components/sign';

// const useStyles = makeStyles(theme => ({
//     container : {
//         position : 'center',
//     },
// }));


export default function App(){

    
    const [ID, setID] = useState();

    if(!ID){
        return(
            <Sign setID = {setID} />
        )
    }else {
        return (
            <div className = "container-fluid">
                <Router>
                    <Switch>
                        <Route path='/' exact>
                            <Homepage id = {ID}/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}