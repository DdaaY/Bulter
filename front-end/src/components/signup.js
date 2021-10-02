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
            password:  '',//recommend 8-20 characters and no limitation on the existence of special characters
            confirm_password: '',
            isExist: false,
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
    onChangeConfirmPassword(e) {
        this.setState({
            confirm_password: e.target.value
        });
    }

    async onSubmit(e) {
        e.preventDefault();
        
        //validation of information

        switch(this.validate()){
            case 'invalidpassword':

                break;
            case 'unmatch':
                break;
            default:
                break;
        }

        if(this.validate()){
            const user = {
                email: this.state.email,
                password: this.state.password
            };
            
            await axios.get('http://localhost:5000/signup/'+user.email)
            .then(res => {
                console.log(res.data);
                if(res.data.length > 0){
                    this.setState({
                        isExist: true,
                    })
                }
            });

            if(this.state.isExist){
                console.log('Exist');
            }else{
                axios.post('http://localhost:5000/signup/add',user)
                .then(res => console.log(res.data));

                await axios.get('http://localhost:5000/signup/'+user.email)
                .then(res => {
                    console.log(res.data);
                    this.setState({
                        _id: res.data[0]._id,
                    })
                });

                // this.props.handle(this.state._id);

                window.location = '/home/'+this.state._id;
            }

        }else{
            //alert notice
        }
    }

    validate(){
        if(this.state.password === this.state.confirm_password){
            if(this.state.password.length >= 8 && this.state.password.length <= 20){
                return true;
            }
        }
        return false;
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
                        <h3>hi</h3>
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