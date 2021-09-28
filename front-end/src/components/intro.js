import React, { Component } from "react";
import { Link } from 'react-router-dom';


export default class Intro extends Component{
    render() {
        return(
            <div>
                <h3>Welcome to Bulter</h3>
                <Link to={'/signin/'}>sign in</Link> | <Link to={'/signup/'}>sign up</Link>
            </div>
            
        );
    }
}