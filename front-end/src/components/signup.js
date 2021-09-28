import { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Signin extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);

        this.state = {
            email: '',
            password:  '',
            confirm_password: '',
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
    onChangeConfirmPassword(e) {
        this.setState({
            confirm_password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        const user = {
            email: this.state.email,
            password: this.state.password
        }

        console.log(user);
        //use axios to check if user is in DB
        axios.post('http://localhost:5000/signup/add',user)
        .then(res => console.log(res.data));
        //change IsSignin to true
        this.props.handle();
        //auto move to home page
    }


    render() {
        return (
            <div>
                <h3>Sign up</h3>
                <form onSubmit={this.onSubmit}>
                    <div className = "form-group">
                        <label>Email:</label>
                        <input type='email'
                            required
                            className="form-control"
                            value = {this.state.email}
                            onChange = {this.onChangeEmail}
                            placeholder = "Enter name"
                            />
                    </div>
                    <div className = "form-group">
                        <label>Password:</label>
                        <input type='password'
                            required
                            className="form-control"
                            value = {this.state.password}
                            onChange = {this.onChangePassword}
                            placeholder = "Enter password"
                            />
                    </div>
                    <div className = "form-group">
                        <label>Check password:</label>
                        <input type='password'
                            required
                            className="form-control"
                            value = {this.state.confirm_password}
                            onChange = {this.onChangeConfirmPassword}
                            placeholder = "confirm your password"
                            />
                    </div>

                    <div className = "form-group">
                        <input type = "submit" value = "Create user" className = "btn btn-primary"/>
                    </div>

                </form>
                <Link to={'/signin/'}>sign in using exist account</Link>
            </div>
        );
    }
}