import { Component } from "react";
import axios from 'axios';

export default class Signin extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            email: '',
            password:  '',
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

    onSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        console.log(user);
        //axois needed
        //change IsSignin to true
        this.props.handle();
        //move to homepage

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

                </form>
            </div>
        );
    }
}