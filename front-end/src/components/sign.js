import React, { Component } from "react";
import Signin from "./signin";
import Signup from './signup';

export default class Sign extends Component{

    constructor(props){
        super(props);

        this.Conversion = this.Conversion.bind(this);
        
        this.state = ({
            signin : true,
        })
    }

    Conversion(){
        this.setState({
            signin : !this.state.signin
        })
    }

    render() {
        if(this.state.signin){
            return (
                <Signin setID = {this.props.setID} Conversion = {this.Conversion}/>
            )
        }else {
            return (
                <Signup setID = {this.props.setID} Conversion = {this.Conversion}/>
            )
        }
    }
}