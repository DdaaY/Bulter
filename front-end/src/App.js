import React ,{ Component }from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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


export default class App extends Component{

    constructor(props){
        super(props);

        this.onChangeID = this.onChangeID.bind(this);

        this.state = ({
            id: 0,
        })
    }
    
    onChangeID(id){
        this.setState({
            id: id
        });

    };

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                    <div className = "container-fluid">
                        <Route path='/' exact  component = {Intro} />
                        <Route path='/home/:id' component = {Homepage} />
                        <Route path='/signin' component = {() => <Signin handle = {this.onChangeID}/>} />
                        <Route path='/signup' component = {() => <Signup handle = {this.onChangeID}/>} />
                    </div>
                    </Switch>
                </Router>
            </div>
        );
    }
}