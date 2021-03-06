import { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Signup from './signup';

export default class Signin extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            email: '',
            password:  '',
            passwordInDB: '',
            errorMessage: 'no error here',
            _id: 0,
        }
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    async onSubmit(e) {
        e.preventDefault();

        this.setState({
            passwordInDB: '',
            errorMessage:'no error here',
            _id: 0,
        })

        const user = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(user);

        //use axios to check if user is in DB
        await axios.get('http://localhost:5000/'+this.state.email)
        .then(res => {
            this.setState({
                passwordInDB: res.data[0].password,
                _id: res.data[0]._id,
            });
        })
        .catch((error) => {
            console.log(error)
        })
        //error message
        
        //verification
        if(this.state.passwordInDB.length === 0){
            this.setState({
                errorMessage:'email has not been registerd'
            })
        }else{
            if(this.state.password !== this.state.passwordInDB ){
                this.setState({
                    errorMessage: 'Password is incorrect'
                })
            }
        }

        this.setState({
            password: '',
        })

        //migrate to home page
        if(this.state.errorMessage === 'no error here'){
            this.props.setID(this.state._id);
        }

        
        

    }


    render() {
            return (
                <div>
                    <h3>Sign in</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className = "form-group">
                            <label>Email:</label>
                            <input type='email'
                                required
                                className="form-control"
                                value = {this.state.email}
                                onChange = {this.onChangeEmail}
                                />
                        </div>
                        <div className = "form-group">
                            <label>Password:</label>
                            <input type='password'
                                required
                                className="form-control"
                                value = {this.state.password}
                                onChange = {this.onChangePassword}/>
                        </div>
    
                        <div className = "form-group">
                            <input type = "submit" value = "Create user" className = "btn btn-primary"/>
                        </div>
                        <button onClick = {this.props.Conversion}> 
                        sign up
                        </button>
                    </form>
                </div>
            );

        
    }
}